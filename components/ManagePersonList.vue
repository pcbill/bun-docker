<script setup>
let props = defineProps({
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

 const updateGetgiftTime = async (uid) => {
    await useFetch('/api/updateGetgiftTime', {query: {uid: uid}})
   reloadNuxtApp({path:"/p/searchForManagement?uid="+uid})
}


</script>

<template>
  <UTable :rows="rows" :columns="columns">
    <template #award_list-data="{ row }">
      <div v-if='row.award_game_id == null'>
        尚未中獎
      </div>
    </template>
    <template #getgift_time-data="{ row }">
      <div v-if='row.getgift_time != null'>
        已於{{ row.getgift_time }}領走獎品
      </div>
      <div v-else-if="row.award_time != null">
          <UButton @click="updateGetgiftTime(row.uid)" >我要領獎</UButton>
      </div>
      <div v-else>

      </div>
    </template>
  </UTable>
</template>

