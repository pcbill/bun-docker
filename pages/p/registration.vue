<template>
  <div>
    報到
    <UForm :state="state" @submit="onSubmit">
      號碼 <UInput v-model="state.uid" autofocus />
      姓名 <UInput v-model="state.uname"/>
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

const { data } = await useFetch('/api/registration');
const state = reactive({
  rows: data.value.rows,
  uid: undefined,
  uname: undefined
})

async function onSubmit (event: FormSubmitEvent<any>) {
  if (event.data.uid) {
    await useFetch('/api/register', {query: {uid: event.data.uid}})
  } else if (event.data.uname) {
    await useFetch('/api/register', {query: {uname: event.data.uname}})
  }

  const { data } = await useFetch('/api/registration');
  state.rows = data.value.rows
}
</script>
