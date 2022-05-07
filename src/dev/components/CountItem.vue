<template><jsx /></template>

<script setup lang="tsx">
import { ref } from 'vue'
import ExBtb from './ExButton.vue'

import { styled } from '@/lib'

const Custom = styled('div')({
  border: '1px solid red',
  bg: 'purple',
  display: 'inline',
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
    <h1>{msg}</h1>
    <button type="button" onClick={handleCount} >count is: {count.value}</button>
    <ExBtb onClick={handleCount} count={count.value}>ButtonX</ExBtb>
    {count.value > 3 && <div>Wooow!</div>}
    <Custom>Meeee</Custom>
  </div>
)

</script>

<style scoped>
</style>
