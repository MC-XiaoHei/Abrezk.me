<template>
  <q-page class="row flex-center">
    <q-img no-native-menu no-transition fetchpriority="high" class="fit" fit="cover" src="/images/background.jpg"
           style="z-index: -1;position: absolute"/>
    <div class="flex-center row main-div q-gutter-y-md q-gutter-x-xs">
      <a class="col-12 text-center text-h6">{{ personalized_signature }}</a>
      <div class="col-6 row q-col-gutter-x-md q-pr-md-sm" style="height: 300px;width: 350px">
        <div class="col-5 full-height column">
          <div>
            <my-card>
              <img src="/images/avatar.jpg" alt="">
            </my-card>
          </div>
          <div class="q-pt-md col-grow">
            <my-card>

            </my-card>
          </div>
        </div>
        <div class="col-7 full-height column">
          <div>
            <my-card>
              <q-card-section>
                <div class="text-weight-bold text" v-html="personalized_profile"/>
              </q-card-section>
            </my-card>
          </div>
          <div class="q-pt-md col-grow">
            <my-card>
              <q-card-section class="text-weight-bold text">
                近期动态：
              </q-card-section>
              <q-card-section class="fit text-center text-caption">
                即将开放
              </q-card-section>
            </my-card>
          </div>
        </div>
      </div>
      <div class="col-6 reverse-md row q-col-gutter-x-md q-pl-md-sm" style="height: 300px;width: 350px">
        <div class="col-5 full-height">
          <my-card>
            <q-card-section class="text-weight-bold text">
              留言板：
            </q-card-section>
            <q-card-section class="fit text-center text-caption" style="line-height: 150px">
              即将开放
            </q-card-section>
          </my-card>
        </div>
        <div class="col-7 full-height" style="display: flex;flex-direction: column">
          <q-responsive :ratio="1">
            <div class="fit" style="overflow: hidden;position: relative">
              <div class="banner text-caption">
                <p>我画的?画</p>
              </div>
              <my-card>
                <q-carousel
                  animated
                  v-model="slide"
                  navigation
                  infinite
                  :autoplay="autoplay"
                  transition-prev="slide-right"
                  transition-next="slide-left"
                  @mouseenter="autoplay = false"
                  @mouseleave="autoplay = true"
                  keep-alive
                  class="fit carousel"
                >
                  <q-carousel-slide v-for="src in drawImageIndex" :key="src" :name="src" :img-src="src"/>
                </q-carousel>
              </my-card>
            </div>
          </q-responsive>
          <div class="q-pt-md" style="flex: 1 1 auto">
<!--            <div class="fit row" style="gap: 8px;flex-wrap: nowrap">-->
<!--              <my-card :fit="false"-->
<!--                       :style="'min-width:'+ (index === workVisibleIndex) ? '16px' : '1 1 auto'"-->
<!--                       v-for="(src,index) in workImageIndex" :key="src">-->

<!--              </my-card>-->
<!--            </div>-->
          </div>
        </div>
      </div>
      <div class="col-12 text-center text-weight-bold text">
        <a>关于本站</a>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import MyCard from 'components/MyCard.vue';
import {ref} from 'vue';
import personalized_signature from 'src/dynamic/personalized_signature';
import personalized_profile from 'src/dynamic/personal-profile';
import drawImageIndex from 'src/dynamic/draw-image-index';
import workImageIndex from 'src/dynamic/work-image-index';

const slide = ref(1);
const autoplay = ref(true);

const workVisibleIndex = ref(0);
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

.carousel
  @supports (zoom: 0.6)
    zoom: 0.6
  @supports not (zoom: 0.6)
    scale: 0.6

.banner
  position: absolute
  top: 18px
  right: -75px
  width: 200px
  height: 12px
  background-color: red
  transform: rotate(45deg)
  display: flex
  justify-content: center
  align-items: center
  z-index: 1

.banner p
  margin-top: 16px
  color: white
  font-size: 10px
  text-align: center

.text
  font-size: 10px
</style>
