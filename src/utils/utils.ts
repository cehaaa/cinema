import {useRoute} from 'vue-router'
import {computed} from 'vue'

export const checkRouteName = () => {
  const router = useRoute()
  const name = computed(()=> router.name)

  return name.value
}