<template>
  <slot />
</template>

<script setup lang="tsx">
import { provide } from 'vue'
import { themeKey } from '../Theme'

const { theme } = defineProps({
  theme: { type: Object, default: () => {} },
})

provide(themeKey, theme)
</script>
