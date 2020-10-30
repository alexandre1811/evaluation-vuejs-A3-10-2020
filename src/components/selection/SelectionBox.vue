<template>
  <div>Ma sélection : {{ selection.length }}
    <span v-if="nbrJoueurs">joueurs</span>
    <span v-else>joueur</span>
  </div>
</template>

<script>
export default {
  name: "selection-box",
  props: ['selection'],
  computed: {
    nbrJoueurs() {
      if(this.selection.length > 1){
        return true
      }
      return false
    }
  }
}
</script>

<style>

</style>