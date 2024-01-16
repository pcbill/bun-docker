<script setup>

const props = defineProps({
      rows: Array
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
  key: 'registration_time',
  label: '報到時間'
}, {
  key: 'award_list',
  label: '中獎獎品'
}, {
  key: 'getgift_time',
  label: '領獎時間'
}]

</script>

<template>
  <UTable :rows="rows" :columns="columns">
  </UTable>
</template>

