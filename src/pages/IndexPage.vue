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
              <my-card style="background-color: rgba(0,0,0,0.5)">
                <q-carousel
                  animated
                  style="background-color: rgba(0,0,0,0)"
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
            <div class="fit row justify-start items-start content-start no-wrap"
                 style="gap: 8px">
              <q-card style="background-color: rgba(0,0,0,0.5)"
                      class="full-height animation"
                      :style="{ flexGrow: workVisibleIndex === index ? 1 : 0, minWidth: '15px' }"
                      @click="workVisibleIndex = index"
                      v-for="(src,index) in workImageIndex" :key="src">
              </q-card>
            </div>
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
let workVisibleIndex = ref(0);
</script>

<style lang="sass">
.animation
  transition: width 0.5s linear, flex-grow 0.5s linear

.main-div
  @media (max-width: 1024px)
    width: 350px
  @media (min-height: 600px)
    @supports (zoom: 0.8)
      zoom: 0.8
    @supports not (zoom: 0.8)
      scale: 0.8
  @media (min-height: 780px)
    @supports (zoom: 0.9)
      zoom: 0.9
    @supports not (zoom: 0.9)
      scale: 0.9
  @media (min-height: 850px)
    @supports (zoom: 1)
      zoom: 1
    @supports not (zoom: 1)
      scale: 1
  @media (min-height: 1000px)
    @supports (zoom: 1.1)
      zoom: 1.1
    @supports not (zoom: 1.1)
      scale: 1.1
  @media (min-width: 1200px)
    @supports (zoom: 1.4)
      zoom: 1.4
    @supports not (zoom: 1.4)
      scale: 1.4
  @media (min-width: 1500px)
    @supports (zoom: 1.5)
      zoom: 1.5
    @supports not (zoom: 1.5)
      scale: 1.5
  @media (min-width: 1700px)
    @supports (zoom: 1.7)
      zoom: 1.7
    @supports not (zoom: 1.7)
      scale: 1.7
  @media (min-width: 2000px)
    @supports (zoom: 2)
      zoom: 2
    @supports not (zoom: 2)
      scale: 2

.carousel
  @supports (zoom: 1)
    zoom: 0.6
  @supports not (zoom: 1)
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

.width-transition
  transition: width 0.5s ease-in-out
</style>
