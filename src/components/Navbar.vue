<script setup lang="ts">
import { useThemeSwitcher } from '@/composables/useThemeSwitcher'
import type { ThemeChoice } from '@/stores/theme'
import { navLinks } from '@/data/navLinks'

const { theme, setTheme } = useThemeSwitcher()

const handleThemeChange = (value: ThemeChoice) => {
  setTheme(value)
}

const isChecked = (value: ThemeChoice) => theme.value === value

</script>

<template>
    <header class="fixed top-0 w-full navbar bg-base-100 max-min-xl z-10">
        <!-- Navbar Start -->
        <nav class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-sm">
                    <li v-for="link in navLinks" :key="link.path">
                        <router-link :to="link.path" class="text-xl">{{ link.label }}</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- Navbar Center -->
        <nav class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li v-for="link in navLinks" :key="link.path">
                    <router-link
                        :to="link.path"
                        class="btn text-xl"
                        :class="$route.path === link.path ? 'btn-primary text-primary-content' : 'btn-ghost'"
                    >
                        {{ link.label }}
                    </router-link>
                </li>
            </ul>
        </nav>

        <!-- Navbar End -->
        <div class="navbar-end">
            <div class="dropdown dropdown-hover dropdown-bottom dropdown-end">
                <div tabindex="0" role="button" class="btn m-1 text-xl">
                    Thema
                    <svg width="12px" height="12px" class="inline-block h-3 w-3 fill-current opacity-60"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                    </svg>
                </div>
                <ul tabindex="0" class="dropdown-content bg-base-200 rounded-box z-1 w-52 p-2 shadow-2xl">
                    <li>
                        <input type="radio" name="theme-dropdown"
                            class="theme-controller btn btn-sm btn-block justify-start text-xl"
                            :class="isChecked('light') ? 'btn-primary text-primary-content' : 'btn-ghost'"
                            aria-label="Light" data-set-theme="light" value="light" :checked="isChecked('light')" @change="handleThemeChange('light')" />
                    </li>
                    <li>
                        <input type="radio" name="theme-dropdown"
                            class="theme-controller btn btn-sm btn-block justify-start text-xl"
                            :class="isChecked('dark') ? 'btn-primary text-primary-content' : 'btn-ghost'"
                            aria-label="Dark" data-set-theme="dark" value="dark" :checked="isChecked('dark')" @change="handleThemeChange('dark')" />
                    </li>
                    <li>
                        <input type="radio" name="theme-dropdown"
                            class="theme-controller btn btn-sm btn-block justify-start text-xl"
                            :class="isChecked('retro') ? 'btn-primary text-primary-content' : 'btn-ghost'"
                            aria-label="Retro" data-set-theme="retro" value="retro" :checked="isChecked('retro')" @change="handleThemeChange('retro')" />
                    </li>
                    <li>
                        <input type="radio" name="theme-dropdown"
                            class="theme-controller btn btn-sm btn-block justify-start text-xl"
                            :class="isChecked('black') ? 'btn-primary text-primary-content' : 'btn-ghost'"
                            aria-label="Black" data-set-theme="black" value="black" :checked="isChecked('black')" @change="handleThemeChange('black')" />
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped>
input {
  font-size: 1rem; 
}
</style>
