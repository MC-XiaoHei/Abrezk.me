<template>
  <q-page class="row flex-center">
    <div class="flex-center row main-div q-gutter-y-md q-gutter-x-xs">
      <a class="col-12 text-center text-h6">不是所有破碎的事情都值得修补。</a>
      <div class="col-6 row q-col-gutter-x-md q-pr-md-sm" style="height: 300px;width: 350px">
        <div class="col-5 full-height">
          <div style="height: 220px">
            <my-card>
            </my-card>
          </div>
          <div class="q-pt-md" style="height: 80px">
            <my-card>
            </my-card>
          </div>
        </div>
        <div class="col-7 full-height">
          <div style="height: 160px">
            <my-card>
            </my-card>
          </div>
          <div class="q-pt-md" style="height: 140px">
            <my-card>
            </my-card>
          </div>
        </div>
      </div>
      <div class="col-6 reverse-md row q-col-gutter-x-md q-pl-md-sm" style="height: 300px;width: 350px">
        <div class="col-5 full-height">
          <my-card>
          </my-card>
        </div>
        <div class="col-7 full-height">
          <div style="height: 200px">
            <my-card>
            </my-card>
          </div>
          <div class="q-pt-md" style="height: 100px">
            <my-card>
            </my-card>
          </div>
        </div>
      </div>
      <div class="col-12 text-center text-caption">
        <a>关于本站</a>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">

import MyCard from 'components/MyCard.vue';
</script>

<style lang="sass">
.main-div
  @media (max-width: 1024px)
    width: 350px
  @media (min-width: 1440px)
    scale: 1.5
</style>
