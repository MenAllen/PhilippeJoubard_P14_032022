import React from "react";
import { useTable, useGlobalFilter, useAsyncDebounce, usePagination, useSortBy } from "react-table";
import { useSticky } from "react-table-sticky";
import "./Table.css";

/**
 * Global Filtering Function
 */
function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
	const count = preGlobalFilteredRows.length;
	const [value, setValue] = React.useState(globalFilter);
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 200);

	return (
		<div className="searchBlock">
			<strong>Search: </strong>
			<input
				className="form-control ml-2"
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

/**
 *  DisplayList is a React component in charge of displaying the employees created and their characteristics
 *
 *  @returns a Table with Employees created
 */
export default function Table({ columns, data }) {
	// Use the useTable Hook to send the columns and data to build the table
	const {
		page,
		getTableProps, // table props from react-table
		getTableBodyProps, // table body props from react-table
		headerGroups, // headerGroups, if your table has groupings
		rows, // rows for the table based on the data passed
		prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
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
			initialState: { pageIndex: 0, pageSize: 5 },
		},
		useGlobalFilter,
		useSortBy,
		usePagination,
//    useSticky
	);

	//  const initRow = rows.slice(0, data.length)

	console.log("Table data: ", data);
	console.log("rows: ", rows);

	return (
		<>
			<h1 className="p-3 text-center text-light">Employees List</h1>
			<div className="d-inline-flex justify-content-between flex-wrap w-85 m-3">
				<div className="pagination">
					<select
						value={pageSize}
						onChange={(e) => {
							setPageSize(Number(e.target.value));
						}}>
						{[5, 10, 20, 30, 50].map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								Show {pageSize}
							</option>
						))}
					</select>
					<div className="nextBlock">
						<strong>entries</strong>
					</div>
				</div>
				<GlobalFilter
					preGlobalFilteredRows={preGlobalFilteredRows}
					globalFilter={state.globalFilter}
					setGlobalFilter={setGlobalFilter}
				/>
			</div>

			<div className="table-responsive p-0 w-85 h-75">
				<table {...getTableProps()} className="w-100" >
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
		</>
	);
}
