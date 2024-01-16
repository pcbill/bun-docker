<script setup>

const props = defineProps({
      gid: String
    })

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
  key: 'award_list',
  label: '中獎獎品'
}, {
  key: 'getgift_time',
  label: '領獎時間'
}]

const {data} = await useFetch('/api/winners', {query: {gid: props.gid}})
const rows = data.value.rows

</script>

<template>
  <UTable :rows="rows" :columns="columns">
  </UTable>
</template>

