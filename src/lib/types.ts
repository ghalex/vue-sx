

export interface Theme {
  colors: {[key: string]: string | string[]}
  fonts: {[key: string]: string}
  breakpoints: string[]
  fontSizes: number[]
  space: number[]
  shadows: any
}

export interface Sx {
  [key: string]: string | number | ((theme: Theme) => any) | Sx
}