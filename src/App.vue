<template>
  <nav-bar @change-component="updateSelectedComponent"/>
  <keep-alive>
    <component :is="selectedComponent" v-bind="currentProps" @update-selection="updateSelection"
    />
  </keep-alive>
</template>
<script>
import NavBar from "@/components/base/NavBar";
import PlayerList from "@/components/player/PlayerList";
import SelectionList from "@/components/selection/SelectionList";
export default {
  name: 'App',
  components: {
    NavBar,
    PlayerList,
    SelectionList
  },
  data() {
    return {
      selectedComponent: 'player-list',
      selectionArray: []
    }
  },
  computed: {
    currentProps() {
      if(this.selectedComponent == "selection-list") {
        return { selection: this.selectionArray }
      }
      return false
    }
  },
  methods: {
    updateSelectedComponent(comp) {
      this.selectedComponent = comp
    },
    updateSelection(player) {
      this.selectionArray.push(player)
    }
  }
}
</script>
<style>
</style>
