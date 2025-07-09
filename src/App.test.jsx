import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  it('displays the initial count as 0', () => {
    render(<App />)
    expect(screen.getByText('count is 0')).toBeInTheDocument()
  })

  it('increments count when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button')
    
    fireEvent.click(button)
    expect(screen.getByText('count is 1')).toBeInTheDocument()
    
    fireEvent.click(button)
    expect(screen.getByText('count is 2')).toBeInTheDocument()
  })

  it('displays Vite and React logos', () => {
    render(<App />)
    
    const viteLogo = screen.getByAltText('Vite logo')
    const reactLogo = screen.getByAltText('React logo')
    
    expect(viteLogo).toBeInTheDocument()
    expect(reactLogo).toBeInTheDocument()
  })

  it('has correct links for logos', () => {
    render(<App />)
    
    const viteLink = screen.getByRole('link', { name: /vite logo/i })
    const reactLink = screen.getByRole('link', { name: /react logo/i })
    
    expect(viteLink).toHaveAttribute('href', 'https://vite.dev')
    expect(reactLink).toHaveAttribute('href', 'https://react.dev')
  })

  it('displays helpful text for development', () => {
    render(<App />)
    
    expect(screen.getByText(/Edit/)).toBeInTheDocument()
    expect(screen.getByText(/save to test HMR/)).toBeInTheDocument()
  })

  it('displays documentation link text', () => {
    render(<App />)
    
    expect(screen.getByText(/Click on the Vite and React logos to learn more/)).toBeInTheDocument()
  })
}) 