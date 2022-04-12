import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {App} from './App'

export function renderApp(options) {
  return {
    ...render(<App />),
    user: userEvent.setup(options),
  }
}

export {waitFor, screen} from '@testing-library/react'
