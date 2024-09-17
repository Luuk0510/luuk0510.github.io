<template>
  <div class="fixed top-0 w-full navbar bg-base-100 max-min-xl z-10">
    <!-- Navbar Start -->
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><router-link to="/about-me">Over mij</router-link></li>
          <li><router-link to="/skills">Vaardigheden</router-link></li>
          <li><router-link to="/experience">Werkervaring</router-link></li>
          <li><router-link to="/education">Opleiding</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <router-link to="/" class="btn btn-ghost text-2xl">Luuk Spruijtenburg</router-link>
    </div>

    <!-- Navbar Center -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 ">
        <li><router-link to="/about-me" class="btn btn-ghost text-xl">Over mij</router-link></li>
        <li><router-link to="/skills" class="btn btn-ghost text-xl">Vaardigheden</router-link></li>
        <li><router-link to="/experience" class="btn btn-ghost text-xl">Werkervaring</router-link></li>
        <li><router-link to="/education" class="btn btn-ghost text-xl">Opleiding</router-link></li>
        <li><router-link to="/contact" class="btn btn-ghost text-xl">Contact</router-link></li>
      </ul>
    </div>

    <!-- Navbar End -->
    <div class="navbar-end">
      <div class="dropdown dropdown-hover dropdown-bottom dropdown-end">
        <div tabindex="0" role="button" class="btn m-1 text-xl">
          Theme
          <svg width="12px" height="12px" class="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
          <li>
            <input type="radio" name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default"
              value="default" />
          </li>
          <li>
            <input type="radio" name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="light" />
          </li>
          <li>
            <input type="radio" name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark" />
          </li>
          <li>
            <input type="radio" name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro" />
          </li>
          <li>
            <input type="radio" name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Black" value="black" />
          </li>
          <li>
            <input type="radio" name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cupcake"
              value="cupcake" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Eventuele aangepaste stijlen kunnen hier worden toegevoegd */
</style>