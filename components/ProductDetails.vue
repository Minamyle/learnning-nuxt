<template>
  <div class="p-3 rounded-md bg-white shadow-md h-full text-center">
   <div class="grid grid-cols-2 gap-10">

    <div class="p-7">
      <img :src="product.image" alt="product image" class="mx-auto my-7">
    </div>

    <div class="p-7">
      <h2 class="text-4xl my-7 truncate">{{ product.title }}</h2>
      <p class="text-xl my-7">price - ${{ product.price }}</p>
      <h3 class="font-bold border-b-2 mb-4 -b-2">Product description:</h3>
      <p class="mb-7">{{ product.description }}</p>
      <button class="bg-[#12b488] text-white px-3 py-2 rounded-md text-sm flex">
        <span class="material-symbols-outlined">
shopping_cart
</span>
        <span>Add to Cart</span>
      </button>

    </div>

   </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
img{
  max-width: 400px;
}
</style>
