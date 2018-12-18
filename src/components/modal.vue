<template lang="html">
  <div class="global-overlay" @click="cb">
    <div class="standard-modal">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['cb']
}
</script>
