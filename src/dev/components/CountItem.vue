<template><jsx /></template>

<script setup lang="tsx">
import { ref } from 'vue'
import { styled, Box } from '@/lib'
import type { Sx } from '@/lib/types';

const Custom = styled('div')({
  border: '1px solid red',
  bg: 'purple',
  color: 'white',
  m: [5, 3, 0]
})

const count = ref(0)
const { msg } = defineProps({
  msg: String
})

const handleCount = () => {
  count.value += 1
}

const jsx = () => (
  <div>
    <h1>{msg}, count is: {count.value}</h1>
    {count.value > 3 && <div>Wooow! You counted to 3</div>}

    <Box
      sx={{
        bg: (theme) => theme.colors.primary,
        color: 'white',
        '&:hover': {
          backgroundColor: 'red'
        }
      }}
      as="div"
      onClick={handleCount}>
      Count Up
    </Box>
    <Custom>Meeee</Custom>
  </div>
)
</script>
