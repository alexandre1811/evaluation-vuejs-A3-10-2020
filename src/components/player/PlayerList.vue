<template>
  <div class="p-4 bg-blue-600 text-3xl text-center text-white">
    <h1>{{ playersData.name }} </h1>
  </div>
  <div class="p-3 bg-orange-500 text-white text-lg fixed" style="max-height: 75px; max-width: 150px">
    <selection-box :selection="selection"/>
  </div>
<div class="flex flex-wrap">
  <player-card v-for="(player, index) in playersData.players" :key="index" :player="player" @add-player="addPlayerToSelection"/>
</div>

</template>

<script>
import playersData from '../../assets/data/nyk.json'
import PlayerCard from './PlayerCard.vue'
import SelectionBox from '../selection/SelectionBox.vue'

export default {
  name: "player-List",
  components: {
    PlayerCard,
    SelectionBox
  },
  data() {
    return {
      playersData : playersData,
      selection: []
    }
  },
  methods: {
    addPlayerToSelection(player) {
      this.selection.push(player)
      this.$emit('update-selection', player)
    }
  }
}
</script>

<style>

</style>