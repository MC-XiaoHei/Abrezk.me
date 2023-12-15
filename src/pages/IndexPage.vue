<template>
  <q-page class="row flex-center">
    <div class="flex-center row main-div">
      <div class="col-12 col-md-6 row" style="height: 300px;width: 350px">
        <div class="col-5 full-height">
          <div style="background-color: green;height: 220px">
          </div>
          <div style="background-color: yellow;height: 80px">
          </div>
        </div>
        <div class="col-7 full-height">
          <div style="background-color: lightgreen;height: 160px">
          </div>
          <div style="background-color: lightyellow;height: 140px">
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 reverse-md row" style="height: 300px;width: 350px">
        <div class="col-5 full-height" style="background-color: red">
        </div>
        <div class="col-7 full-height">
          <div style="background-color: green;height: 200px">
          </div>
          <div style="background-color: yellow;height: 100px">
          </div>
        </div>
      </div>
      <div class="col-12 text-center">
        <a>Author: </a><a style="text-decoration: none;color: #fff"
                          href="https://github.com/MC-XiaoHei">MC_XiaoHei</a><a> Src: </a><a
        style="text-decoration: none;color: #fff" href="https://github.com/MC-XiaoHei/Abrezk.me">GitHub</a>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">

</script>

<style lang="sass">
.main-div
  @media (max-width: 1024px)
    width: 350px
</style>
