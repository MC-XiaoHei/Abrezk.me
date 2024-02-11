<script setup lang="ts">

</script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  padding: 0;
  backdrop-filter: blur(25px) saturate(200%);
  -webkit-backdrop-filter: blur(25px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.01);
  border-radius: 12px;
  box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f;
}
</style>