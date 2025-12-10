<script setup lang="ts">
import IconCheckFill from './icons/IconCheckFill.vue';
import { timelineItems } from '@/data/timeline';
</script>


<template>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li v-for="(item, index) in timelineItems" :key="index"
        v-motion-slide-visible-once-bottom>
            <hr v-if="index > 0" />
            <div class="timeline-middle">
                <IconCheckFill class="h-5 w-5"/>
            </div>
            <div :class="['mb-10', 'lg:w-3/5', 'md:w-5/6', 'sm:w-full', index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end']">
                <time class="font-mono italic text-lg">{{ item.time }}</time>
                <div class="card bg-base-200 shadow-xl">
                    <div class="card-body">
                        <div class="text-lg font-black">{{ item.title }}</div>
                        <p>{{ item.description }}</p>
                        <router-link :to="item.link" class="flex flex-col justify-center items-center">
                            <div class="btn btn-primary text-base">
                                Meer lezen
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <hr />
        </li>
    </ul>
</template>

<style scoped>
</style>
