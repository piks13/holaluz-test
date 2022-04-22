<template>
  <v-row class="search-section align-center ma-0 mt-3">
    <v-col class="text-center text-md-right" cols="12" md="4">
      <p class="mr-9 mb-0 white--text display-1">¡Busca por CUPS!</p>
    </v-col>
    <v-col cols="12" md="5">
      <v-autocomplete
        v-model="values"
        :items="clients"
        item-text="cups"
        background-color="#fff"
        outlined
        return-object
        clearable
        hide-details
      ></v-autocomplete>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SearchSection',
  data() {
    return {
      values: [],
    }
  },
  computed: {
    ...mapGetters(['clients']),
  },
}
</script>
<style scoped lang="scss">
.search-section {
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  background: rgb(227, 33, 121);
  background: linear-gradient(
    90deg,
    rgba(227, 33, 121, 1) 61%,
    rgba(240, 109, 21, 1) 94%
  );
  height: 150px;
}
</style>
