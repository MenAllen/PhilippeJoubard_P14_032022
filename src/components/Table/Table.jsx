import React from "react";
import propTypes from "prop-types";
import Populate from "../Populate/Populate";
import { useTable, useGlobalFilter, useAsyncDebounce, usePagination, useSortBy } from "react-table";
import Row from "react-bootstrap/Row";
import "../../style/style.css";

// * Global Filtering Function
/* istanbul ignore next */
function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
	const count = preGlobalFilteredRows.length;
	const [value, setValue] = React.useState(globalFilter);
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 200);

	return (
		<div className="searchBlock">
			<strong>Search</strong>
			<input
				className="form-control ml-2 border border-secondary"
				value={value || ""}
				onChange={(e) => {
					setValue(e.target.value);
					onChange(e.target.value);
				}}
				placeholder={`${count} records...`}
			/>
		</div>
	);
}

// * Column hiding Function
const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
	const defaultRef = React.useRef();
	const resolvedRef = ref || defaultRef;

	React.useEffect(() => {
		resolvedRef.current.indeterminate = indeterminate;
	}, [resolvedRef, indeterminate]);

	return <input type="checkbox" ref={resolvedRef} {...rest} />;
});

/**
 *  Table is a React component in charge of displaying the list of employees.
 *  It is based on bootstrap react Table.
 *	It includes table facilities : sort, search, pagination & column hiding
 *	It also includes table populate facility
 *
 *  @prop {columns} includes the colums name for the table header
 *  @prop {data} includes the content of the table
 *
 *  @returns a div including the Table with columns header and the employees data
 */
function Table({ columns, data }) {
	const [displayColumnsBar, setDisplayColumnsBar] = React.useState(false);

	// * Toggle menu for columns hiding. Clicking outside the menu closes the menu if open
	const toggleColumnsBar = (e) => {
		e.stopPropagation();
		if (e.target.attributes.class !== undefined ) {
			if (e.target.attributes.class.nodeValue === "customBtn rndCorner") {
				setDisplayColumnsBar(!displayColumnsBar);
			} else 
				if (e.target.attributes.class.nodeValue !== "checkbox")
				setDisplayColumnsBar(false);
		}
	};

	// Use the useTable Hook to send the columns and data to build the table
	const {
		page,
		getTableProps, // table props from react-table
		getTableBodyProps, // table body props from react-table
		headerGroups, // headerGroups, if your table has groupings
		prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
		allColumns,
		getToggleHideAllColumnsProps,
		state,
		preGlobalFilteredRows,
		setGlobalFilter,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0, pageSize: 10 },
		},
		useGlobalFilter,
		useSortBy,
		usePagination
	);

	// Render the UI for the table
	return (
		<Row
			className="main-row justify-content-center align-items-center"
			bg="primary"
			onClick={toggleColumnsBar}>
			<div className="d-inline-flex justify-content-center flex-wrap position-relative w-85 my-3 p-0">
				<h1 className="p-3 text-center text-dark">List Employees</h1>
				<div className="selectColumns">
					<div className={displayColumnsBar ? "columnsBar active" : "columnsBar"}>
						{allColumns.map((column) => (
							<div key={column.id}>
								<label>
									<input className="checkbox" type="checkbox" {...column.getToggleHiddenProps()} />{" "}
									{column.id}
								</label>
							</div>
						))}
						<div>
							<IndeterminateCheckbox {...getToggleHideAllColumnsProps()} /> Toggle All
						</div>
					</div>
					<button
						className={displayColumnsBar ? "customBtn" : "customBtn rndCorner"}
						type="button"
						title="Hide column(s)"
						onClick={toggleColumnsBar}>
						{displayColumnsBar ? "X" : "COL"}
					</button>
				</div>
			</div>

			<div className="d-inline-flex justify-content-between flex-wrap w-85 my-3 p-0">
				<div className="searchBlock">
					<strong>Show&ensp;</strong>
					<select
						className="ml-2"
						value={pageSize}
						onChange={(e) => {
							setPageSize(Number(e.target.value));
						}}>
						{[10, 25, 50, 100].map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								{pageSize} entries
							</option>
						))}
					</select>
				</div>
				<GlobalFilter
					preGlobalFilteredRows={preGlobalFilteredRows}
					globalFilter={state.globalFilter}
					setGlobalFilter={setGlobalFilter}
				/>
			</div>

			<div className="tableContainer m-0 p-0 w-85 h-75">
				<table {...getTableProps()} className="m-0">
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th className="me-2" {...column.getHeaderProps(column.getSortByToggleProps())}>
										{column.render("Header")}
										<span>{column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : "  "}</span>
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{page.map((row, i) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			<div className="d-inline-flex justify-content-between align-items-center flex-wrap w-85 my-3 p-0">
				<Populate />
				<div className="d-inline-flex justify-content-end w-75 m-3">
					<div>
						<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
							{"<<"}
						</button>{" "}
						<button onClick={() => previousPage()} disabled={!canPreviousPage}>
							{"<"}
						</button>{" "}
						<button onClick={() => nextPage()} disabled={!canNextPage}>
							{">"}
						</button>{" "}
						<button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
							{">>"}
						</button>{" "}
					</div>
					<div className="nextBlock">
						<span>
							<strong> Page </strong>
							<strong>
								{pageIndex + 1} of {pageOptions.length}
							</strong>{" "}
						</span>
					</div>
				</div>
			</div>
		</Row>
	);
}

Table.propTypes = {
	columns: propTypes.array.isRequired,
	data: propTypes.array.isRequired,
};

export default Table;
