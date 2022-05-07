
<script lang="tsx">
import { defineComponent } from 'vue'
import { Box } from '@/lib'
import { Theme } from '../theme'

export default defineComponent({
  name: 'MyBtn',
  props: {
    count: {type: Number, default: 0}
  },
  setup (props, { slots }) {
    
    return () => (
      <Box
        as='button'
        sx={{
          backgroundColor: (theme: Theme) => theme.colors.primary,
          border: 'none',
          m: 2,
          px: 2,
          py: 3
        }}>
        {slots.default!()}
      </Box>
    )
  }
})
</script>
