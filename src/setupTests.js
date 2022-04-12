const nativeConsoleError = global.console.error

global.console.error = (...args) => {
  if (args.join('').includes('Could not parse CSS stylesheet')) {
    return
  }
  return nativeConsoleError(...args)
}