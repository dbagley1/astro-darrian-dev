<template>
  <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    <article v-for="{ data: post, slug } in posts" :key="post.id" class="flex flex-col items-start justify-between">
      <div class="relative w-full">
        <img :src="`${post.img}`" alt="" class="object-top aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
        <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div class="max-w-xl">
        <!-- <div class="mt-8 flex items-center gap-x-4 text-xs">
          <time :publishDate="post.publishDate" class="">{{ post.publishDate }}</time>
          <p class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium hover:bg-gray-100">{{ post.tags[0] }}</p>
        </div> -->
        <div class="group relative">
          <h3 class="mt-3 text-lg font-semibold leading-6 group-hover:">
            <a :href="`./work/${slug}`">
              <span class="absolute inset-0" />
              {{ post.title }}
            </a>
          </h3>
          <p class="mt-5 line-clamp-3 text-sm leading-6">{{ post.description }}</p>
        </div>
        <!-- <div class="relative mt-8 flex items-center gap-x-4">
            <img :src="post.author.img" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
            <div class="text-sm leading-6">
              <p class="font-semibold ">
                <a :href="post.author.href">
                  <span class="absolute inset-0" />
                  {{ post.author.name }}
                </a>
              </p>
              <p class="">{{ post.author.role }}</p>
            </div>
          </div> -->
      </div>
    </article>
  </div>
</template>

<script setup>
defineProps({
  posts: Array,
});

/* const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    img:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    publishDate: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      img:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]
 */
</script>
