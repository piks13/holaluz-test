<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row class="align-center">
          <v-col cols="6">
            <v-img :src="img.logo" countain max-width="111"></v-img>
          </v-col>
          <v-col cols="6">
            <v-img
              class="ml-auto"
              :src="img.luz_verde"
              countain
              max-width="111"
            ></v-img>
          </v-col>
        </v-row>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer absolute app color="#fff">
      <v-row class="justify-center">
        <v-col
          class="d-flex justify-space-around align-baseline"
          cols="12"
          md="6"
        >
          <v-img :src="img.logo" countain max-width="111"></v-img>
          <span>&copy; {{ new Date().getFullYear() }} Holaluz</span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      img: {
        logo: require('@/assets/imgs/logos/holaluz-logo.png'),
        luz_verde: require('@/assets/imgs/logos/100-verde.png'),
      },
    }
  },
}
</script>
