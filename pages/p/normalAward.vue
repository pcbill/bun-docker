<script setup>
import shuffle from '~/utils/random.js'

const route = useRoute();
const gid = route.query.gid;

const {data} = await useFetch('/api/games', {query: {gid}})
const game = data.value.rows[0];
const countPerTime = game.participant_count;

const sleep = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

 const state = reactive({
   rows: []
 })

const executeGameplay = async () => {
  const {data}  = await useFetch("/api/getPeopleWithoutAward");
  const peopleWithoutAward = data.value.rows;
  for (let i = 0; i < 1000; i++) {
    shuffle(peopleWithoutAward)
  }
  const totalCadidateIds = peopleWithoutAward.map((it) => {
    return it.uid;
  });

  let results = [];
  for (let i = 0; i < countPerTime; i++) {
  // console.log("sleep start")
    let p = peopleWithoutAward[i];
    results.push(p);
  // console.log(results.length)
    // rows.push(p);
    state.rows = [p, ...state.rows];
    // console.log(state.rows.length)
    await sleep(2000);
  // console.log("sleep end")
  }
  const resultIds = results.map((it) => {
    return it.uid;
  });

   useFetch("/api/createHistory", {query:{gid, result: totalCadidateIds}});
   const reminderCount = game.reminder_count - countPerTime;
   // console.log("game.reminderCount "+game.reminderCount)
   // console.log("countPerTime "+countPerTime)
   // console.log("reminderCount "+reminderCount)
   useFetch("/api/updateGamePlayed", {query:{gid, reminderCount}});
   useFetch("/api/updateAward", {query:{gid, uids:resultIds}});

console.log(results.length)
console.log(resultIds.length)
  // rows.push({})
}

const columns = [{
  // label: ''
// }, {
  key: 'uid',
  label: '號碼'
}, {
  key: 'name',
  label: '姓名'
}, {
  key: 'table_num',
  label: '號次'
}]

</script>

<template>
  <div>
    快速抽出 {{ game.reminder_count }} 位得獎者
  </div>
  <UButton @click="executeGameplay()">抽～～</UButton>
    <UTable :rows="state.rows" :columns="columns">
  </UTable>
</template>
