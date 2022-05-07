<template>
  <component :is="as" :class="cls">
    <slot />
  </component>
</template>

<script setup lang="tsx">
import { computed, inject, watch } from 'vue'
import { css, CSSInterpolation } from '@emotion/css'
import { themeKey, defaultTheme } from '../Theme'
import stcss from '@styled-system/css'

const props = defineProps({
  sx: { type: Object as () => { [key: string]: any }, default: () => ({}) },
  as: { type: [Object, String], default: 'div'}
})

const theme = inject(themeKey, defaultTheme)

const sx = computed(() => {
  return stcss(props.sx)({ theme })
})

const cls = computed(() => css(sx.value))
</script>
