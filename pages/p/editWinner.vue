<template>
  <div>
    得獎者列表
    <UTable :rows="rows" :columns="columns">
      <template #gid-data="{ row }">
        {{ $route.query.gid }}
      </template>
      <template #actions-data="{ row }">
        <UButton @click="oncancel(row.uid)">取消資格</UButton>
      </template>
    </UTable>
  </div>
</template>
<script setup>
const route = useRoute()

const {data} = await useFetch('/api/findPersonByAwardId', {query: {gid: route.query.gid}})
const rows = data.value.rows

const columns = [{
  key: 'uid',
  label: '號碼'
}, {
  key: 'name',
  label: '姓名'
}, {
  key: 'table_num',
  label: '桌次'
}, {
  key: 'gid',
  label: '中獎獎項'
}, {
  key: 'award_time',
  label: '中獎時間'
}, {
  key: 'actions',
}]

const oncancel = async (uid) => {
  await useFetch('/api/cancelWinner', {query: {uid: uid, gid: route.query.gid}})
  reloadNuxtApp({ path: "/p/editWinner", query: { gid: route.query.gid }})
}

</script>
