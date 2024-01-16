<template>
  <div>
    <WinnerList :gid="`${$route.query.gid}`"/>
  </div>
</template>
<script setup lang="ts">
import WinnerList from "~/components/WinnerList.vue";
</script>
