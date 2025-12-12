<script setup lang="ts">
import IconCheckFill from './icons/IconCheckFill.vue';
import BaseCard from '@/components/BaseCard.vue';
import { useTimeline } from '@/composables/useTimeline';
import { TIMELINE } from '@/constants/animations'

withDefaults(defineProps<{ motion?: boolean }>(), { motion: true })

const { items } = useTimeline();
</script>


<template>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <template v-for="(item, index) in items" :key="index">
          <li v-if="motion" v-motion-slide-visible-once-bottom>
            <hr v-if="index > 0" />
            <div class="timeline-middle">
                <IconCheckFill class="h-5 w-5"/>
            </div>
            <div :class="['mb-10', 'lg:w-3/5', 'md:w-5/6', 'sm:w-full', index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end']">
                <time class="font-mono italic text-lg">{{ item.time }}</time>
                <BaseCard
                  cardClass="bg-base-200 shadow-xl"
                  :motion="true"
                  :delay="index * TIMELINE.cardStaggerDelay"
                  :duration="TIMELINE.cardDuration"
                >
                    <template #header>
                        <div class="text-lg font-black">{{ item.title }}</div>
                    </template>
                    <p>{{ item.description }}</p>
                    <router-link :to="item.link" class="flex flex-col justify-center items-center">
                        <div class="btn btn-primary text-base">
                            Meer lezen
                        </div>
                    </router-link>
                </BaseCard>
            </div>
            <hr />
          </li>

          <li v-else>
            <hr v-if="index > 0" />
            <div class="timeline-middle">
              <IconCheckFill class="h-5 w-5" />
            </div>
            <div
              :class="[
                'mb-10',
                'lg:w-3/5',
                'md:w-5/6',
                'sm:w-full',
                index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end',
              ]"
            >
              <time class="font-mono italic text-lg">{{ item.time }}</time>
              <BaseCard cardClass="bg-base-200 shadow-xl" :motion="false">
                <template #header>
                  <div class="text-lg font-black">{{ item.title }}</div>
                </template>
                <p>{{ item.description }}</p>
                <router-link :to="item.link" class="flex flex-col justify-center items-center">
                  <div class="btn btn-primary text-base">Meer lezen</div>
                </router-link>
              </BaseCard>
            </div>
            <hr />
          </li>
        </template>
    </ul>
</template>

<style scoped>
</style>
