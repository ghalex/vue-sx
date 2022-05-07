import { defineComponent, VueElement } from "vue";
import Box from './components/Box.vue'

export default (el: string | VueElement) => (sx: { [key: string]: any }) => {
  return defineComponent({
    setup (_, { slots }) {
      return () => <Box as={el} sx={sx}>{slots.default!()}</Box>
    }
  })
}