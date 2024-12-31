import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../Counter'

describe('Counter Component', () => {
  it('renders the initial count correctly', () => {
    render(<Counter />)
    
    const countText = screen.getByText(/Count:/)
    expect(countText).toHaveTextContent('Count: 0')
  })

  it('increments the count when the button is clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    const incrementButton = screen.getByText(/Increment/)
    await user.click(incrementButton)
    
    const countText = screen.getByText(/Count:/)
    expect(countText).toHaveTextContent('Count: 1')
  })
})