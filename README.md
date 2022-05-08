<h1 align="center">VueSx</h1>
<h3 align="center">CSS-in-JS for Vue</h3>
<p align="center">
<b>vue-sx</b> is a simple library that allows you to write clean CSS-in-JS for Vue
</p>


<p align="center">
<a title="Total downloads" href="https://www.npmjs.com/package/vue-sx">
    <img src="https://img.shields.io/npm/dm/vue-sx.svg?style=flat-square">
  </a>
  <a title="Current version" href="https://www.npmjs.com/package/vue-sx">
    <img src="https://img.shields.io/npm/v/vue-sx.svg?style=flat-square">
  </a>
  <a title="MIT License" href="LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/ghalex/vue-sx?style=flat-square">
  </a>
  <br>
  <br>
</p>

## Introduction

vue-sx is using [styled-system](https://styled-system.com/) and [emotion](emotion.sh) to allow you to write simple and clean css-in-js for Vue components. Inspired by `sx` prop from [@mui/material
](https://mui.com/system/basics/#the-sx-prop)

Some of the key features are:
- Customize styles inline with the `sx` prop
- Ergonomic responsive array-based values
- [Styled System](https://styled-system.com/) props
- Themeable and compatible with the [Theme Specification](https://styled-system.com/theme-specification)
- Built with [Emotion](emotion.sh) css prop

## Getting Started

```sh
npm i vue-sx
```

```vue
<script>
import { defineComponent } from 'vue'
import { Box, styled } from 'vue-sx'

const Custom = styled('div')({
  border: '1px solid red',
  bg: 'purple',
  color: 'white',
  m: [5, 3, 0]
})

export default defineComponent({
  components: { Box, Custom }
})
</script>

<template>
  <Custom>
    <Box
      sx={{
        bg: (theme) => theme.colors.primary,
        color: 'white',
        p: 2, // theme.space[2],
        mt: 2 
      }}
      as="button"
      >
      Click me
    </Box>
  </Custom>
</template>
```

### `sx` Prop

The `Box` components accepts a `sx` prop that works with no additional setup required.

The `sx` prop is similar to Emotion's `css` prop, but allows you to use values derived from the theme object.

Box follows the [Theme Specification](), which means that any theme created for use with [Theme UI](), [Styled System](), or other similar libraries will work out-of-the-box.

This allows you to share design constraints for typography, color, and layout throughout your application using a theming context.

```vue
<Box
  :sx="{
    p: 4,
    color: 'primary',
  }"
/>
```

## Theming

To add a theme to an application, import the `ThemeProvider` component from `vue-sx` and pass a custom theme object in.

```vue
<script>
import { ref, defineComponent } from 'vue'
import { Box, ThemeProvider } from 'vue-sx'

const theme = {
  breakpoints: [
    '40em', '52em', '64em',
  ],
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256,
  ],
}

export default defineComponent({
  components: { Box, Custom },
  setup() {
    const currentTheme = ref(theme)
    return { currentTheme }
  }
})
</script>

<template>
  <ThemeProvider :theme="currentTheme">
    <Box
      :sx="{
        border: '1px solid red',
        bg: theme => theme.colors.primary,
        p: 4,
        mr: 4
      }">
      It works
    </Box>
  </ThemeProvider>
</template>
```