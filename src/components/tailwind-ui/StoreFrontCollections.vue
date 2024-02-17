<template>
  <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
    <a v-for="{ data: collection, slug } in collections" :key="collection.title" :href="`/work/${slug}`" class="group block">
      <div aria-hidden="true" class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75">
        <img :src="collection.img" :alt="collection.img_alt" class="h-full w-full object-cover object-center" />
      </div>
      <h3 class="mt-4 text-base font-semibold">{{ collection.title }}</h3>
      <p class="mt-2 text-sm">{{ collection.description }}</p>
    </a>
  </div>
</template>

<script setup>
defineProps({
  collections: Array,
});
</script>
