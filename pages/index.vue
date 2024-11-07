<script setup lang="ts">
const user = useLogtoUser()
</script>

<template>
  <!-- Display user information when signed in -->
  <ul v-if="Boolean(user)">
    <li v-for="(value, key) in user" :key="key">
      <b>{{ key }}:</b> {{ value }}
    </li>
  </ul>
  <!-- Simplified button for sign-in and sign-out -->
  <a :href="`/auth/sign-${user ? 'out' : 'in'}`"> Sign {{ user ? 'out' : 'in' }} </a>
</template>
