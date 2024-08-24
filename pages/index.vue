<script setup lang="ts">
const { $client } = useNuxtApp()

const hello = await $client.hello.useQuery({ text: 'client' })
const greeting = computed(() => hello.data.value)
</script>

<template>
  <div>
    <p>{{ greeting?.greeting }}</p>
  </div>
</template>
