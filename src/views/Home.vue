<template>
  <div>
    <button class="btn btn-primary">Halo dunia ini daisy</button>

    {{ name }}
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { Options, Vue } from "vue-class-component";

// @Options({
//   components: {
//     HelloWorld,
//   },
// })
export default class Home extends Vue {
  name = ref("christian");
}
</script>
