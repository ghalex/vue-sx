<template>
  <component :is="as" :class="cls">
    <slot />
  </component>
</template>

<script setup lang="tsx">
import { computed, inject } from 'vue'
import { css } from '@emotion/css'
import { Sx } from '../types'
import { themeKey, defaultTheme } from '../Theme'
import stcss from '@styled-system/css'

const props = defineProps({
  sx: { type: Object as () => Sx, default: () => ({}) },
  as: { type: [Object, String], default: 'div'}
})

const theme = inject(themeKey, defaultTheme)

const sx = computed(() => {
  return stcss(props.sx)({ theme })
})

const cls = computed(() => css(sx.value))
</script>
