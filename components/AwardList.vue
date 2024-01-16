<script setup>

const columns = [{
  key: 'gid',
  label: '獎項'
}, {
  key: 'award_list',
  label: '獎項名稱'
}, {
  key: 'participant_count',
  label: '數量'
}, {
  key: 'reminder_count',
  label: '剩餘'
}, {
  key: 'actions'
}]

const { data } = await useFetch('/api/awards')
const rows = data.value.rows

</script>

<template>
  共有 {{rows.length}} 獎項
  <UTable :rows="rows" :columns="columns">
    <template #actions-data="{ row }">
      <NuxtLink :to='{ path: "/pub/winnerList", query: { gid: `${row.gid}` }}'>
        <UButton>得獎者列表</UButton>
      </NuxtLink>
    </template>
  </UTable>
</template>

