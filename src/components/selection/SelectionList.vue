<template>
  <div class="p-4 bg-blue-600 text-3xl text-center text-white">
    <h1>Ma sélection</h1>
  </div>
  <div class="p-3 bg-orange-500 text-white text-lg fixed" v-if="selection.length <= 0">
    <p>Vous n'avez pas sélectionné de joueurs</p>
  </div>
  <div class="flex flex-wrap">
    <div class="max-w-sm m-3 rounded overflow-hidden text-white bg-gray-700" v-for="select in selection" :key="select">
      <img class="w-full" style="max-width: 100%" :src=select.img :alt=select.name>
      <div class="px-6 py-4 text-center">
        <div class="font-bold  text-xl mb-2">{{ select.name }} Numero : {{ select.number }}</div>
        <p class="text-base">
          {{ select.position }}
          <br>
          Né le {{select.birthDate}}  {{select.country}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "selection-list",
  props: ['selection']
}
</script>
<style>
</style>