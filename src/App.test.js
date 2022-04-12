import {renderApp, screen} from './testEnv'

test('test something', async () => {
  const {user} = renderApp()

  await user.type(screen.getByRole('input'), 'abc')

  expect(screen.getByTestId('output')).toHaveTextContent('abc')
})
