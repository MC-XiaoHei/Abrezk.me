<script setup lang="ts">
import GlassCard from './components/GlassCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const modules = [Autoplay, Pagination];
const slideUrls = [
  'https://s11.ax1x.com/2024/02/11/pF3b3sU.webp',
  'https://s11.ax1x.com/2024/02/11/pF3buin.webp',
  'https://s11.ax1x.com/2024/02/11/pF3bMR0.webp',
  'https://s11.ax1x.com/2024/02/11/pF3b1MT.webp',
  'https://s11.ax1x.com/2024/02/11/pF3bKGq.webp',
  'https://s11.ax1x.com/2024/02/11/pF3bQzV.webp'
];
</script>

<template>
  <div class="text-3xl mb-6 sm:hidden whitespace-nowrap text-white">不是所有破碎的事情，<br />都值得修补。</div>
  <div class="text-4xl mb-8 hidden sm:block whitespace-nowrap text-white">不是所有破碎的事情都值得修补。</div>
  <div
    class="w-full h-[70vh] sm:w-[470px] sm:h-[920px] lg:w-[940px] lg:h-[460px] xl:w-[1100px] xl:h-[555px] flex flex-wrap lg:flex-nowrap gap-x-0 lg:gap-x-5 gap-y-5 lg:gap-y-0">
    <div class="w-full h-1/2 lg:h-full flex gap-x-5">
      <div class="w-5/12 h-full order-1 lg:order-none flex flex-col gap-y-5">
        <glass-card>
          <img src="https://s11.ax1x.com/2024/02/10/pF32M2d.webp"
               alt="avatar" class="rounded-[12px]" />
        </glass-card>
        <glass-card class="flex-grow"></glass-card>
      </div>
      <div class="w-7/12 h-full order-2 lg:order-none flex flex-col gap-y-5">
        <glass-card class="text-left flex-grow sm:flex-initial">
          <div class="p-5 sm:p-6 text-white">
            <p>
              Abrezk，也许可以叫标本。
            </p><br class="hidden sm:block " />
            <p>
              博览闲书的空想家，今天也在无所事事中安然度日。
            </p><br class="hidden sm:block" />
            <p>
              写不出作品的OC人，希望有一天可以在游戏中与你相遇(●'◡'●)。
            </p>
          </div>

        </glass-card>
        <glass-card class="flex-grow hidden sm:block"></glass-card>
      </div>
    </div>
    <div class="w-full h-1/2 lg:h-full flex gap-x-5">
      <div class="w-7/12 h-full order-4 lg:order-none flex flex-col gap-y-5">
        <glass-card class="h-2/3 aspect-square">
          <div class="w-full h-full">
            <swiper
              :modules="modules"
              :loop="true"
              :slides-per-view="1"
              :autoplay="{ delay: 2000, disableOnInteraction: false }"
              :pagination="{ clickable: true }"
              class="swiperBox w-full h-full rounded-[12px]"
            >
              <swiper-slide v-for="(url, index) in slideUrls" :key="index">
                <img :src="url" class="w-full h-full object-cover" alt="">
              </swiper-slide>
            </swiper>
          </div>
        </glass-card>
        <glass-card class="h-1/3"></glass-card>
      </div>
      <div class="w-5/12 h-full order-3 lg:order-none">
        <glass-card class="h-full"></glass-card>
      </div>
    </div>
  </div>

</template>

<style scoped>

:deep(.swiper-pagination-bullet) {
  background: grey;
}

:deep(.swiper-pagination-bullet-active) {
  background: dimgrey;
}
</style>