<script setup>
import { ref } from 'vue';
import IconCheckFill from './icons/IconCheckFill.vue';

const timelineItems = ref([
    {
        time: 'Heden',
        title: 'First Macintosh computer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis pharetra velit, at venenatis turpis laoreet volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In volutpat laoreet pharetra. Cras et rutrum nisi, eget vestibulum libero. Morbi ac nulla nec ex suscipit euismod id vel leo. Nullam efficitur lacinia mi sed consectetur. Integer id euismod ex. Vivamus porta, lacus at porttitor pulvinar, erat ligula varius metus, sit amet iaculis tellus magna eu turpis. Mauris ac condimentum dolor. Morbi in ipsum cursus neque rutrum faucibus. Vestibulum blandit consectetur sapien ac hendrerit. Vestibulum quis augue vehicula libero tempus congue. Nulla massa metus, pulvinar vel convallis ut, blandit sit amet tellus. ',
        isVisible: false,
        link: '/',
    },
    {
        time: 'sep 2024 - jan 2025',
        title: 'Marvelous',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis pharetra velit, at venenatis turpis laoreet volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In volutpat laoreet pharetra. Cras et rutrum nisi, eget vestibulum libero. Morbi ac nulla nec ex suscipit euismod id vel leo. Nullam efficitur lacinia mi sed consectetur. Integer id euismod ex. Vivamus porta, lacus at porttitor pulvinar, erat ligula varius metus, sit amet iaculis tellus magna eu turpis. Mauris ac condimentum dolor. Morbi in ipsum cursus neque rutrum faucibus. Vestibulum blandit consectetur sapien ac hendrerit. Vestibulum quis augue vehicula libero tempus congue. Nulla massa metus, pulvinar vel convallis ut, blandit sit amet tellus. ',
        isVisible: false,
        link: '/marvelous',
    },
    {
        time: 'sep 2022 - Heden',
        title: 'Avans',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis pharetra velit, at venenatis turpis laoreet volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In volutpat laoreet pharetra. Cras et rutrum nisi, eget vestibulum libero. Morbi ac nulla nec ex suscipit euismod id vel leo. Nullam efficitur lacinia mi sed consectetur. Integer id euismod ex. Vivamus porta, lacus at porttitor pulvinar, erat ligula varius metus, sit amet iaculis tellus magna eu turpis. Mauris ac condimentum dolor. Morbi in ipsum cursus neque rutrum faucibus. Vestibulum blandit consectetur sapien ac hendrerit. Vestibulum quis augue vehicula libero tempus congue. Nulla massa metus, pulvinar vel convallis ut, blandit sit amet tellus. ',
        isVisible: false,
        link: '/mobicoach',
    },
    {
        time: '2024',
        title: 'Mobicoach',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis pharetra velit, at venenatis turpis laoreet volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In volutpat laoreet pharetra. Cras et rutrum nisi, eget vestibulum libero. Morbi ac nulla nec ex suscipit euismod id vel leo. Nullam efficitur lacinia mi sed consectetur. Integer id euismod ex. Vivamus porta, lacus at porttitor pulvinar, erat ligula varius metus, sit amet iaculis tellus magna eu turpis. Mauris ac condimentum dolor. Morbi in ipsum cursus neque rutrum faucibus. Vestibulum blandit consectetur sapien ac hendrerit. Vestibulum quis augue vehicula libero tempus congue. Nulla massa metus, pulvinar vel convallis ut, blandit sit amet tellus. ',
        isVisible: false,
        link: '/mobicoach',
    },
    {
        time: 'aug 2019 - jun 2022',
        title: 'De Leijgraaf',
        description: 'Ik heb mijn MBO-niveau 4 opleiding in Software Development afgerond aan De Leijgraaf in Oss, nu onderdeel van het Koning Willem I College. Tijdens deze opleiding heb ik onder andere PHP geleerd en waardevolle ervaring opgedaan door te werken aan verschillende projecten. Daarnaast heb ik veel aandacht besteed aan UX/UI design, waardoor ik niet alleen technische vaardigheden heb ontwikkeld, maar ook heb geleerd hoe ik gebruiksvriendelijke en aantrekkelijke interfaces kan ontwerpen.',
        isVisible: false,
        link: '/leijgraaf',
    },
]);
</script>

<template>
    <h1 class="text-center text-4xl font-black mb-10">Tijdlijn</h1>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li v-for="(item, index) in timelineItems" :key="index"
        v-motion-slide-visible-bottom>
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