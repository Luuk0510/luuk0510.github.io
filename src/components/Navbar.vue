<script setup lang="ts">
// English comments only
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)
const closeMenu = () => (isOpen.value = false)
</script>

<template>
  <header class="navbar">
    <div class="nav-inner">
      <!-- Left: hamburger on mobile -->
      <div class="nav-left">
        <button class="hamburger" aria-label="Open menu" @click="toggleMenu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <!-- Center: main nav (desktop) -->
      <nav class="nav-center">
        <ul class="nav-list">
          <li><router-link to="/" class="nav-link" :class="{ 'is-active': $route.path === '/' }">Over mij</router-link></li>
          <li><router-link to="/skills" class="nav-link" :class="{ 'is-active': $route.path === '/skills' }">Vaardigheden</router-link></li>
          <li><router-link to="/experience" class="nav-link" :class="{ 'is-active': $route.path === '/experience' }">Werkervaring</router-link></li>
          <li><router-link to="/education" class="nav-link" :class="{ 'is-active': $route.path === '/education' }">Opleiding</router-link></li>
          <li><router-link to="/contact" class="nav-link" :class="{ 'is-active': $route.path === '/contact' }">Contact</router-link></li>
        </ul>
      </nav>

      <!-- Right: empty to keep center aligned -->
      <div class="nav-right" />
    </div>

    <!-- Mobile menu -->
    <nav class="mobile-menu" v-if="isOpen">
      <ul class="mobile-list">
        <li><router-link to="/" class="mobile-link" :class="{ 'is-active': $route.path === '/' }" @click="closeMenu">Over mij</router-link></li>
        <li><router-link to="/skills" class="mobile-link" :class="{ 'is-active': $route.path === '/skills' }" @click="closeMenu">Vaardigheden</router-link></li>
        <li><router-link to="/experience" class="mobile-link" :class="{ 'is-active': $route.path === '/experience' }" @click="closeMenu">Werkervaring</router-link></li>
        <li><router-link to="/education" class="mobile-link" :class="{ 'is-active': $route.path === '/education' }" @click="closeMenu">Opleiding</router-link></li>
        <li><router-link to="/contact" class="mobile-link" :class="{ 'is-active': $route.path === '/contact' }" @click="closeMenu">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>
