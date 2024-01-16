<template>
  <NuxtLink to="/p/registration">
    <UButton>自動報到</UButton>
  </NuxtLink>
  <NuxtLink to="/p/manageRegistration">
    <UButton>手動報到</UButton>
  </NuxtLink>
  <NuxtLink to="/p/searchForManagement">
    <UButton>兌獎管理</UButton>
  </NuxtLink>
  <NuxtLink to="/p/gameplay">
    <UButton>抽獎管理</UButton>
  </NuxtLink>

  <slot />
</template>
<script setup lang="ts">
</script>
