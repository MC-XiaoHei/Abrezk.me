<template>
  <q-page class="row flex-center">
    <q-img no-native-menu no-transition fetchpriority="high" class="fit" fit="cover" src="/images/background.jpg"
           style="z-index: -1;position: absolute"/>
    <div class="flex-center row main-div q-gutter-y-md q-gutter-x-xs">
      <a class="col-12 text-center text-h6">{{ personalized_signature }}</a>
      <div class="col-6 row q-col-gutter-x-md q-pr-md-sm" style="height: 300px;width: 350px">
        <div class="col-5 full-height">
          <q-responsive :ratio="1">
            <div ref="avatar">
              <my-card>
                <img src="/images/avatar.jpg" alt="">
              </my-card>
            </div>
          </q-responsive>
          <div class="q-pt-md" :style="'height:'+(300-avatarHeight)+'px'">
            <my-card>
              <q-card-section>
                社交媒体：
                AAAaaa
              </q-card-section>
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
          <q-responsive :ratio="1">
            <div class="fit" ref="draw">
              <my-card>
              </my-card>
            </div>
          </q-responsive>
          <div class="q-pt-md" :style="'height:'+(300-drawHeight)+'px'">
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
import personalized_signature from '../texts/personalized_signature';
import {nextTick, onMounted, ref} from 'vue';

const avatar = ref();
const avatarHeight = ref(0);

const draw = ref();
const drawHeight = ref(0);

onMounted(async () => {
  await nextTick();
  avatarHeight.value = avatar.value.offsetHeight;
  drawHeight.value = draw.value.offsetHeight;
});
</script>

<style lang="sass">
.main-div
  @media (max-width: 1024px)
    width: 350px
  @media (min-width: 1440px)
    @supports (zoom: 1.5)
      zoom: 1.5
    @supports not (zoom: 1.5)
      scale: 1.5
</style>
