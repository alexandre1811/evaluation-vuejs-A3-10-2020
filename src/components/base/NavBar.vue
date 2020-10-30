<template>
  <div class="bg-gray-800 p-2">
    <ul class="flex">
      <img src="https://upload.wikimedia.org/wikipedia/fr/d/dc/NY_Knicks_Logo_2011.png" class="mx-3" style="max-width: 50px" alt="New York Nicks Logo">
      <li class="mr-3" v-for="(link, index) in navigation" :key="index" @click="selectComponent(link.component)" >
        <a class="inline-block border border-blue-600 rounded py-1 px-3 bg-blue-600 text-white hover:bg-orange-500 hover:border-orange-500 " href="#">{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "nav-bar",
  data() {
    return {
      navigation: [
        { name: "Tous les joueurs", component: "player-list" },
        { name: "Ma sélection", component: "selection-list" }
      ]
    }
  },
  methods: {
    selectComponent(comp) {
      this.$emit('change-component', comp)
    }
  }
}
</script>
<style>
</style>