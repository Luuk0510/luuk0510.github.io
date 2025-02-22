<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { usePageTitle } from '@/composables/usePageTitle'

import SkillCard from '@/components/SkillCard.vue';
import Link from '@/components/Link.vue';

import HTML5Logo from '@/assets/images/logo/html5_logo.png';
import CSS3Logo from '@/assets/images/logo/css3_logo.png';
import JavaScriptLogo from '@/assets/images/logo/javascript_logo.png'
import TailwindLogo from '@/assets/images/logo/tailwind_logo.png'
import VueLogo from '@/assets/images/logo/vue_logo.png';
import SQLLogo from '@/assets/images/logo/sql_logo.png';
import CSharpLogo from '@/assets/images/logo/csharp_logo.png';
import PHPLogo from '@/assets/images/logo/php_logo.png';
import LaravelLogo from '@/assets/images/logo/laravel_logo.png';

const isBlackTheme = ref(false);

onMounted(() => {
    const theme = document.documentElement.getAttribute('data-theme');
    isBlackTheme.value = theme === 'black';
});

usePageTitle();
</script>

<template>
    <div class="lg:inset-0 justify-center items-center">
        <div class="flex flex-col justify-center items-center mt-24 mb-20">
            <h1 class="text-4xl font-black mb-5">Mijn vaardigheden</h1>

            <div class="grid lg:grid-cols-2 gap-10 lg:m-4">
                <div>
                    <h2 class="text-3xl font-bold mb-4 text-center">Frontend</h2>

                    <SkillCard :src="HTML5Logo" alt="html" :delay="900">
                        HTML vormt de basis van mijn webontwikkeling. Ik gebruik het om webpagina's te structureren en semantische HTML toe te passen voor toegankelijkere en beter leesbare content.
                    </SkillCard>
                
                    <SkillCard :src="CSS3Logo" alt="css" :delay="1200">
                        Ik heb ervaring met CSS, inclusief frameworks zoals Tailwind en Bootstrap. Ik vind het leuk om een front end te maken. CSS is belangrijk om visueel aantrekkelijke en toegankelijke interfaces te bouwen.
                    </SkillCard>
                
                    <SkillCard :src="TailwindLogo" alt="tailwind" :delay="1500">
                        Ik maak veel gebruik van Tailwind CSS en ben vertrouwd met bibliotheken zoals <Link href="https://preline.co/" target="_blank">Preline UI</Link> en <Link href="https://daisyui.com/" target="_blank">daisyUI</Link>, die ik in dit portfolio heb gebruikt voor een consistente ervaring.
                    </SkillCard>
                
                    <SkillCard :src="JavaScriptLogo" alt="javascript" :delay="1800">
                        JavaScript geeft mij de mogelijkheid om interactieve en dynamische webapplicaties te bouwen.
                    </SkillCard>
                
                    <SkillCard :src="VueLogo" alt="vue.js" :delay="2000">
                        Vue.js is mijn go-to framework voor het ontwikkelen van dynamische interfaces. Ik heb het in verschillende projecten gebruikt, waaronder dit portfolio.
                    </SkillCard>
                </div>
                
                <div>
                    <h2 class="text-3xl font-bold mb-4 text-center">Backend</h2>
                    <SkillCard :src="SQLLogo" alt="sql logo" :delay="900">
                        Ik heb ervaring met databasebeheer in zowel MySQL als Microsoft SQL. Daarnaast heb ik gewerkt met NoSQL-databases, wat me in staat stelt om flexibele en schaalbare datamodellen te ontwerpen en implementeren.
                    </SkillCard>        
                    
                    <SkillCard :src="CSharpLogo" alt="csharp logo" :delay="1200">
                        Met C# en ASP.NET Core heb ik diverse webapplicaties ontwikkeld. Ik heb gewerkt met MVC en Razor Pages. Daarnaast heb ik ook .NET MAUI Blazor Hybrid gebruikt. Ik volg object-georiënteerde programmeerprincipes en best practices.
                    </SkillCard>

                    <SkillCard :src="PHPLogo" alt="php  logo" :delay="1500">
                        Tijdens mijn studie heb ik met PHP gewerkt, met name in combinatie met Laravel voor het bouwen van efficiënte webapplicaties en API's, waarbij ik MySQL-databases heb geïntegreerd.
                    </SkillCard>        

                    <SkillCard :src="LaravelLogo" alt="laravel logo" :delay="1800">
                        Laravel is het framework waarin ik tijdens mijn studie veel ervaring heb opgedaan. Ik heb het gebruikt voor het bouwen van complexe backends voor verschillende webapplicaties.
                    </SkillCard>        
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
