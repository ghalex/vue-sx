<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Btn, Count } from './components'
import { ThemeProvider } from '@/lib'
import { theme } from './theme'

export default defineComponent({
  components: { Btn, Count, ThemeProvider },
  setup() {
    const currentTheme = ref(theme)

    return { currentTheme }
  }
})
</script>

<template>
  <ThemeProvider :theme="currentTheme">
    <div>
      <img alt="Vue logo" src="./assets/logo.png" />
      <Count msg="Hello!" />
    </div>
  </ThemeProvider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
