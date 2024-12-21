<template>
  <div>
    <p>product details for {{ id }}</p>
    <p>
      my name is amina and i am a student of noun university studying computer
      science
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style scoped></style>
