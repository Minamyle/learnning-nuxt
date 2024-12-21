<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/products"> Nuxt Dojo merch</NuxtLink>
      </nav>
    </header>
    <div>
      <slot />
    </div>
    <footer>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-active {
  color: #12b488;
}
</style>
