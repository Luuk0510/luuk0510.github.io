<template>
  <div class="fixed top-0 w-full navbar bg-base-100 max-min-xl z-10">
    <!-- Navbar Start -->
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><router-link to="/about-me" class="text-xl">Over mij</router-link></li>
          <li><router-link to="/skills" class="text-xl">Vaardigheden</router-link></li>
          <li><router-link to="/experience" class="text-xl">Werkervaring</router-link></li>
          <li><router-link to="/education" class="text-xl">Opleiding</router-link></li>
          <li><router-link to="/contact" class="text-xl">Contact</router-link></li>
        </ul>
      </div>
      <router-link to="/" class="btn btn-ghost text-2xl">Luuk Spruijtenburg</router-link>
    </div>

    <!-- Navbar Center -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <router-link to="/about-me" class="btn btn-ghost text-xl">Over mij</router-link>
        </li>
        <li>
          <router-link to="/skills" class="btn btn-ghost text-xl">Vaardigheden</router-link>
        </li>
        <li>
          <router-link to="/experience" class="btn btn-ghost text-xl">Werkervaring</router-link>
        </li>
        <li>
          <router-link to="/education" class="btn btn-ghost text-xl">Opleiding</router-link>
        </li>
        <li>
          <router-link to="/contact" class="btn btn-ghost text-xl">Contact</router-link>
        </li>
      </ul>
    </div>

    <!-- Navbar End -->
    <div class="navbar-end">
      <div class="dropdown dropdown-hover dropdown-bottom dropdown-end">
        <div tabindex="0" role="button" class="btn m-1 text-xl">
          Thema
          <svg
            width="12px"
            height="12px"
            class="inline-block h-3 w-3 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start text-xl"
              aria-label="Default"
              data-set-theme="default"
              value="default"
              @change="updateTheme"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start text-xl"
              aria-label="Light"
              data-set-theme="light"
              value="light"
              @change="updateTheme"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start text-xl"
              aria-label="Dark"
              data-set-theme="dark"
              value="dark"
              @change="updateTheme"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start text-xl"
              aria-label="Retro"
              data-set-theme="retro"
              value="retro"
              @change="updateTheme"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start text-xl"
              aria-label="Black"
              data-set-theme="black"
              value="black"
              @change="updateTheme"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start text-xl"
              aria-label="Cupcake"
              data-set-theme="cupcake"
              value="cupcake"
              @change="updateTheme"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const updateTheme = (event) => {
  const selectedTheme = event.target.value
  document.documentElement.setAttribute('data-theme', selectedTheme)
  localStorage.setItem('theme', selectedTheme)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'default'
  document.documentElement.setAttribute('data-theme', savedTheme)
  const themeControllers = document.querySelectorAll('input[name="theme-dropdown"]')
  themeControllers.forEach((controller) => {
    if (controller.value === savedTheme) {
      controller.checked = true
    }
  })
})
</script>

<style scoped>
</style>
