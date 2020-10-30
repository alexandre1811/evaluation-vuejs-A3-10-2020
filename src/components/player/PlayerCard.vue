<template>
  <div class="max-w-sm m-3 rounded overflow-hidden shadow-lg" :class="isInjuredClass">
    <img class="w-full" style="max-width: 100%" :src=player.img :alt=player.name>
    <div class="px-6 py-4 text-center">
      <div class="font-bold  text-xl mb-2">{{ playerName }} ({{ player.number }})</div>
      <p class="text-base">
        {{ player.position }}
      </p>
      <button-base text="Sélectionner" @click="addToSelection" class="m-2"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "player-card",
  props: ['player'],
  computed: {
    playerName() {
      if(this.player.name.split('.').length > 1){
        return this.player.name.split('.')[1]
      }
      return this.player.name;
    },
    playerInjured() {
      if(this.player.health == "out"){
        return true
      }
      return false
    },
    isInjuredClass() {
      return { 
        'bg-orange-500 text-white': this.playerInjured, 'bg-blue-700 text-white': !this.playerInjured
        }
    },
  },
  methods: {
    addToSelection() {
      this.$emit('add-player', this.player)
    }
  }
}
</script>

<style scoped>

</style>