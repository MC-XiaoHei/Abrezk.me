<template>
  <q-page class="row flex-center">
    <div class="flex-center row main-div">
      <div class="col-12 col-md-6 row" style="height: 300px;width: 350px">
        <div class="col-5 full-height">
          <div style="height: 220px">
            <my-card>
            </my-card>
          </div>
          <div style="height: 80px">
            <my-card>
            </my-card>
          </div>
        </div>
        <div class="col-7 full-height">
          <div style="height: 160px">
            <my-card>
            </my-card>
          </div>
          <div style="height: 140px">
            <my-card>
            </my-card>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 reverse-md row" style="height: 300px;width: 350px">
        <div class="col-5 full-height">
          <my-card>
          </my-card>
        </div>
        <div class="col-7 full-height">
          <div style="height: 200px">
            <my-card>
            </my-card>
          </div>
          <div style="height: 100px">
            <my-card>
            </my-card>
          </div>
        </div>
      </div>
      <div class="col-12 text-center">
        <a>Design by </a>
        <a style="text-decoration: none;color: #fff"
           href="https://github.com/MC-XiaoHei">MC_XiaoHei</a>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">

import MyCard from "components/MyCard.vue";
</script>

<style lang="sass">
.main-div
  @media (max-width: 1024px)
    width: 350px
</style>
