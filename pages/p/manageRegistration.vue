<template>
  <div>
    手動報到
    <UForm :state="state" @submit="onSubmit">
      桌次 <UInput v-model="state.table_num" autofocus />
      姓名 <UInput v-model="state.uname"/>
      號碼 <UInput v-model="state.uid"/>
      <UButton type="submit" value="submit">submit</UButton>
    </UForm>
    <UTable :rows="state.rows" :columns="columns" />
  </div>
</template>
<script setup lang="ts">
import type {FormSubmitEvent} from "#ui/types";

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
}]

// const { reg } = await useFetch('/api/registration');
const state = reactive({
  rows: [],
  table_num: undefined,
  uname: undefined,
  uid: undefined
})

async function onSubmit (event: FormSubmitEvent<any>) {
  const { data } = await useFetch('/api/findPerson', {query: {uid: state.uid}})
  if (data.value.rows.length == 0) {
    await useFetch('/api/createPerson', {query: {
        uid: state.uid,
        name: state.uname,
        table_num: state.table_num
    }})
  }

  const regs = await useFetch('/api/registration');
  state.rows = regs.data.value.rows
}
</script>
