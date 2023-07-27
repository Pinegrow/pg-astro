import devtools from '@vue/devtools'

// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  // devtools.connect(/* host, port */)
  // (window as any) = devtools
  // @ts-ignore
  window.devtools = devtools
}
export {}
