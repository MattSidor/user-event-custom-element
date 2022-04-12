import {renderApp, screen} from './testEnv'

test('test text input', async () => {
  const {user} = renderApp()

  const input = screen.getByTestId('paper-input')
  await user.type(input, 'hello')
  expect(screen.getByTestId('output')).toHaveTextContent('hello')
})

test('test clear', async() => {
  const {user} = renderApp()

  const input = screen.getByTestId('paper-input')
  await user.type(input, 'hello')
  await user.clear(input)
})
