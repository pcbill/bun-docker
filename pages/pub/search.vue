<template>
  <div>
    <UForm :state="state" @submit="onSubmit">
      號碼 <UInput v-model="state.uid" autofocus />
      姓名 <UInput v-model="state.uname"/>
      <UButton type="submit" value="submit">submit</UButton>
    </UForm>
    <PersonList :rows="state.rows" ></PersonList>
  </div>
</template>
<script setup lang="ts">
import type {FormSubmitEvent} from "#ui/types";

const state = reactive({
  rows: [],
  uid: undefined,
  uname: undefined
})

async function onSubmit (event: FormSubmitEvent<any>) {
  if (event.data.uid) {
    const { data } = await useFetch('/api/people', {query: {uid: event.data.uid}})
    event.data.rows = data.value.rows
  } else if (event.data.uname) {
    const { data } = await useFetch('/api/people', {query: {uname: event.data.uname}})
    event.data.rows = data.value.rows
  }
}

</script>
