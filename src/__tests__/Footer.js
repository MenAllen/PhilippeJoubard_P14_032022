import Footer from '../components/Footer/Footer'
import { render, screen } from '@testing-library/react'
 
describe('Footer', () => {
    test('Should render without crash', async () => {
        render(<Footer />)

        const cardTitle = screen.getByText(/Copyright/i)
        expect(cardTitle.textContent).toBe('Copyright 2022 Wealth Health')
    })
})