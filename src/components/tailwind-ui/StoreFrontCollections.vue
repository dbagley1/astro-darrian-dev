<template>
  <section aria-labelledby="collection-heading" class="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
    <h2 id="collection-heading" class="text-2xl font-bold tracking-tight">Shop by Collection</h2>
    <p class="mt-4 text-base">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>
    <div class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
      <a v-for="{ data: collection, slug } in collections" :key="collection.title" :href="`./work/${slug}`" class="group block">
        <div aria-hidden="true" class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75">
          <img :src="collection.img" :alt="collection.img_alt" class="h-full w-full object-cover object-center" />
        </div>
        <h3 class="mt-4 text-base font-semibold">{{ collection.title }}</h3>
        <p class="mt-2 text-sm">{{ collection.description }}</p>
      </a>
    </div>
  </section>
</template>

<script setup>
defineProps({
  collections: Array,
});
</script>
