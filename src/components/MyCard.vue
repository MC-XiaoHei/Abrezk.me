ge<script setup lang="ts">

</script>

<template>
  <q-card class="full-width full-height glass-container">
    <slot/>
  </q-card>
</template>

<style scoped lang="sass">
// TODO: 兼容firefox
/* This was made with GlassGenerator.netlify.app */
.glass-container
  gap: 20px
  border-radius: 4px
  backdrop-filter: blur(10px)
  background-color: rgba(0,191,255, 0)
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px
  border: 0 rgba(255,255,255,0.4) solid
  border-bottom: 0 rgba(40,40,40,0.35) solid
  border-right: 0 rgba(40,40,40,0.35) solid

</style>
