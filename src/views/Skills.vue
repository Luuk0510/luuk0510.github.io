<script setup lang="ts">
import { ref, onMounted } from 'vue';

import SkillCard from '@/components/SkillCard.vue';
import Link from '@/components/Link.vue';

import HTML5Logo from '@/assets/images/html5_logo.png';
import CSS3Logo from '@/assets/images/css3_logo.png';
import JavaScriptLogo from '@/assets/images/javascript_logo.png'
import TailwindLogo from '@/assets/images/tailwind_logo.png'
import VueLogo from '@/assets/images/vue_logo.png';
import SQLLogo from '@/assets/images/sql_logo.png';
import CSharpLogo from '@/assets/images/csharp_logo.png';
import PHPLogo from '@/assets/images/php_logo.png';
import LaravelLogo from '@/assets/images/laravel_logo.png';
import PythonLogo from '@/assets/images/python_logo.png';

const isBlackTheme = ref(false);

onMounted(() => {
    const theme = document.documentElement.getAttribute('data-theme');
    isBlackTheme.value = theme === 'black';
});
</script>

<template>
    <div class="lg:inset-0 justify-center items-center">
        <div class="flex flex-col justify-center items-center lg:my-20 mb-20">
            <h1 class="text-4xl font-black mb-5">Mijn vaardigheden</h1>

            <div class="grid lg:grid-cols-2 gap-10 lg:m-4">
                <div>
                    <h2 class="text-3xl font-bold mb-4 text-center">Frontend</h2>

                    <SkillCard :src="HTML5Logo" alt="html" :delay="900">
                        HTML vormt de basis van mijn webontwikkeling. Ik gebruik het om webpagina's te structureren en semantische HTML toe te passen voor toegankelijkere en beter leesbare content.
                    </SkillCard>
                
                    <SkillCard :src="CSS3Logo" alt="css" :delay="1200">
                        Ik heb uitgebreide ervaring met CSS, inclusief frameworks zoals Tailwind en Bootstrap. CSS is essentieel om visueel aantrekkelijke en toegankelijke interfaces te bouwen.
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
                        Ik heb ervaring met databasebeheer in zowel MySQL als Microsoft SQL. Dit stelt me in staat om robuuste en efficiënte backends te bouwen die gegevens veilig opslaan en verwerken.
                    </SkillCard>        

                    <SkillCard :src="CSharpLogo" alt="csharp logo" :delay="1200">
                        Met C# en ASP.NET heb ik diverse webapplicaties ontwikkeld, inclusief RESTful APIs en backends voor schaalbare systemen. Mijn ervaring omvat object-georiënteerde programmeerprincipes en best practices.
                    </SkillCard>        

                    <SkillCard :src="PHPLogo" alt="php  logo" :delay="1500">
                        Tijdens mijn studie heb ik met PHP gewerkt, met name in combinatie met Laravel voor het bouwen van efficiënte webapplicaties en API's, waarbij ik MySQL-databases heb geïntegreerd.
                    </SkillCard>        

                    <SkillCard :src="LaravelLogo" alt="laravel logo" :delay="1800">
                        Laravel is het framework waarin ik tijdens mijn studie veel ervaring heb opgedaan. Ik heb het gebruikt voor het bouwen van complexe backends voor verschillende webapplicaties.
                    </SkillCard>        

                    <SkillCard :src="PythonLogo" alt="python logo" :delay="2000">
                        Python gebruik ik voor het automatiseren van processen, het bouwen van scripts, en data-analyse. Het is een flexibele taal die ik heb gebruikt in zowel kleine scripts als grotere applicaties. Later wil ik Python gebruiken voor AI.
                    </SkillCard>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
