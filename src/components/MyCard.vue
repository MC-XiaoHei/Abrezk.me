<script setup lang="ts">

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
  backdrop-filter: blur(15px)
  -webkit-backdrop-filter: blur(15px)
  background-color: rgba(0,191,255, 0)
</style>
