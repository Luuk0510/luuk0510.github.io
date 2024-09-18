<template>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li v-for="(item, index) in timelineItems" :key="index" :ref="setObserver"
        v-motion-slide-visible-bottom>
            <hr v-if="index > 0" />
            <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div :class="['mb-10', 'lg:w-3/5', 'md:w-5/6', 'sm:w-full', index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end']">
                <time class="font-mono italic text-lg">{{ item.time }}</time>
                <div class="card bg-base-200 shadow-xl">
                    <div class="card-body">
                        <div class="text-lg font-black">{{ item.title }}</div>
                        <p>{{ item.description }}</p>
                        <router-link to="/" class="flex flex-col justify-center items-center">
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

<script setup>
import { ref, onMounted } from 'vue';

const timelineItems = ref([
    {
        time: 'Heden',
        title: 'First Macintosh computer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis pharetra velit, at venenatis turpis laoreet volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In volutpat laoreet pharetra. Cras et rutrum nisi, eget vestibulum libero. Morbi ac nulla nec ex suscipit euismod id vel leo. Nullam efficitur lacinia mi sed consectetur. Integer id euismod ex. Vivamus porta, lacus at porttitor pulvinar, erat ligula varius metus, sit amet iaculis tellus magna eu turpis. Mauris ac condimentum dolor. Morbi in ipsum cursus neque rutrum faucibus. Vestibulum blandit consectetur sapien ac hendrerit. Vestibulum quis augue vehicula libero tempus congue. Nulla massa metus, pulvinar vel convallis ut, blandit sit amet tellus. ',
        isVisible: false
    },
    {
        time: 'sep 2024 - jan 2025',
        title: 'Marvelous',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis pharetra velit, at venenatis turpis laoreet volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In volutpat laoreet pharetra. Cras et rutrum nisi, eget vestibulum libero. Morbi ac nulla nec ex suscipit euismod id vel leo. Nullam efficitur lacinia mi sed consectetur. Integer id euismod ex. Vivamus porta, lacus at porttitor pulvinar, erat ligula varius metus, sit amet iaculis tellus magna eu turpis. Mauris ac condimentum dolor. Morbi in ipsum cursus neque rutrum faucibus. Vestibulum blandit consectetur sapien ac hendrerit. Vestibulum quis augue vehicula libero tempus congue. Nulla massa metus, pulvinar vel convallis ut, blandit sit amet tellus. ',
        isVisible: false
    },
    {
        time: 'sep 2022 - Heden',
        title: 'Avans',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis pharetra velit, at venenatis turpis laoreet volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In volutpat laoreet pharetra. Cras et rutrum nisi, eget vestibulum libero. Morbi ac nulla nec ex suscipit euismod id vel leo. Nullam efficitur lacinia mi sed consectetur. Integer id euismod ex. Vivamus porta, lacus at porttitor pulvinar, erat ligula varius metus, sit amet iaculis tellus magna eu turpis. Mauris ac condimentum dolor. Morbi in ipsum cursus neque rutrum faucibus. Vestibulum blandit consectetur sapien ac hendrerit. Vestibulum quis augue vehicula libero tempus congue. Nulla massa metus, pulvinar vel convallis ut, blandit sit amet tellus. ',
        isVisible: false
    },
    {
        time: '2024',
        title: 'Mobicoach',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis pharetra velit, at venenatis turpis laoreet volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In volutpat laoreet pharetra. Cras et rutrum nisi, eget vestibulum libero. Morbi ac nulla nec ex suscipit euismod id vel leo. Nullam efficitur lacinia mi sed consectetur. Integer id euismod ex. Vivamus porta, lacus at porttitor pulvinar, erat ligula varius metus, sit amet iaculis tellus magna eu turpis. Mauris ac condimentum dolor. Morbi in ipsum cursus neque rutrum faucibus. Vestibulum blandit consectetur sapien ac hendrerit. Vestibulum quis augue vehicula libero tempus congue. Nulla massa metus, pulvinar vel convallis ut, blandit sit amet tellus. ',
        isVisible: false
    },
    {
        time: 'aug 2019 - jun 2022',
        title: 'De Leijgraaf',
        description: 'Ik heb mijn MBO-niveau 4 opleiding in Software Development afgerond aan De Leijgraaf in Oss, nu onderdeel van het Koning Willem I College. Tijdens deze opleiding heb ik onder andere PHP geleerd en waardevolle ervaring opgedaan door te werken aan verschillende projecten. Daarnaast heb ik veel aandacht besteed aan UX/UI design, waardoor ik niet alleen technische vaardigheden heb ontwikkeld, maar ook heb geleerd hoe ik gebruiksvriendelijke en aantrekkelijke interfaces kan ontwerpen.',
        isVisible: false
    },
]);

</script>

<style scoped>
</style>