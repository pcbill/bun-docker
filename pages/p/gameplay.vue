<template>
  <div>
    抽獎管理
  </div>
  <UForm :state="state" @submit="onSubmit">
    獎項 <UInput v-model="state.gid" autofocus />
    獎品列表 <UInput v-model="state.award_list"/>
    數量 <UInput v-model="state.participant_count"/>
    快速抽：0；大獎抽：1<UInput v-model="state.type"/>
    <UButton type="submit" value="submit">submit</UButton>
  </UForm>
  <UTable :rows="state.rows" :columns="columns">
    <template #actions-data="{ row }">
        <UButton @click="deleteGameplay(row.gid)">刪除</UButton>
        <NuxtLink v-if='row.exec_type != 0' :to='{ path: "/p/editWinner", query: { gid: `${row.gid}` }}' >
          <UButton>修改得獎者</UButton>
        </NuxtLink>
        <div v-if="row.reminder_count > 0">
          <div v-if="row.exec_type == 0 && peopleCountWithoutAward >= row.reminder_count">
            <NuxtLink :to='{path:"/p/normalAward", query:{ gid: `${row.gid}` }}'>
              <UButton>進入一般抽獎</UButton>
            </NuxtLink>
          </div>
          <div v-else-if="peopleCountWithoutAward >= 1">
            <NuxtLink :to='{path:"/big/bigAward", query:{ award: `${row.award_list}`,
                                                        gid: `${row.gid}` }
            }'>
              <UButton>進入抽大獎</UButton>
            </NuxtLink>
          </div>
        </div>
    </template>
    <template #type-data="{ row }">
      <div v-if='row.exec_type === 0'>
        快速抽獎
      </div>
      <div v-else>
        大獎
      </div>

    </template>
  </UTable>
</template>
<script setup lang="ts">

import type {FormSubmitEvent} from "#ui/types/index.js";

const {data} = await useFetch('/api/games')
// let rows = data.value.rows

const columns = [{
  key: 'actions'
}, {
  key: 'gid',
  label: '獎項'
}, {
  key: 'award_list',
  label: '獎品列表'
}, {
  key: 'participant_count',
  label: '數量'
}, {
  key: 'reminder_count',
  label: '剩餘'
}, {
  key: 'award_list',
  label: '中獎獎品'
}, {
  key: 'type',
  label: '形式'
}]

const state = reactive({
  rows: data.value.rows,
  gid: undefined,
  award_list: undefined,
  participant_count: undefined,
  type: undefined
})
const getPeopleCountWithoutAward = async () => {
  const count = await useFetch("/api/getPeopleCountWithoutAward");
  return count.data.value.rows[0].count;
}
const peopleCountWithoutAward = await getPeopleCountWithoutAward()

const deleteGameplay = async (gid) => {
  await useFetch('/api/deleteGameplay', {query: {gid: gid}})

  const {data} = await useFetch('/api/games')
  state.rows = data.value.rows
}

async function onSubmit (event: FormSubmitEvent<any>) {
  await useFetch('/api/createGame', {query: {
      gid: state.gid,
      award_list: state.award_list,
      participant_count: state.participant_count,
      type: state.type
  }})

  const {data} = await useFetch('/api/games')
  state.rows = data.value.rows
  // const regs = await useFetch('/api/registration');
  // state.rows = regs.data.value.rows
}

</script>
