<template>
  <div>
    兌獎管理
    <UForm :state="state" @submit="onSubmit">
      號碼 <UInput v-model="state.uid" autofocus></UInput>
      姓名 <UInput v-model="state.uname"/>
      <UButton type="submit" value="submit">submit</UButton>
    </UForm>
    <ManagePersonList :rows="state.rows" ></ManagePersonList>
  </div>
</template>
<script setup lang="ts">
import type {FormSubmitEvent} from "#ui/types";

const route = useRoute()

const state = reactive({
  rows: [],
  uid: route.query.uid,
  uname: undefined
})

async function onSubmit (event: FormSubmitEvent<any>) {
  let rows = []
  if (event.data.uid) {
    const { data } = await useFetch('/api/people', {query: {uid: event.data.uid}})
    rows = data.value.rows
  } else if (event.data.uname) {
    const { data } = await useFetch('/api/people', {query: {uname: event.data.uname}})
    rows = data.value.rows
  }
  state.rows = rows
}

</script>
