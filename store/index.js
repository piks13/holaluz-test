import axios from 'axios'

export const state = () => ({
  clients: [],
  supplyPoints: [],
})

export const mutations = {
  SET_CLIENTS(state, data) {
    state.clients = data
  },
  SET_SUPPLY_POINTS(state, data) {
    state.supplyPoints = data
  },
}

export const actions = {
  async fetchClients({ commit }) {
    try {
      const urlApi = `${this.$config.baseUrl}api/clients`
      const res = await axios.get(urlApi)
      if (res.status === 200) {
        commit('SET_CLIENTS', res.data)
        return res.data
      }
    } catch (e) {
      return e
    }
  },
  async fetchSupplyPoints({ commit }) {
    try {
      const urlApi = `${this.$config.baseUrl}api/supply-points`
      const res = await axios.get(urlApi)
      if (res.status === 200) {
        commit('SET_SUPPLY_POINTS', res.data)
        return res.data
      }
    } catch (e) {
      return e
    }
  },
}
export const getters = {
  clients: (state) => state.clients,
  supplyPoints: (state) => state.supplyPoints,
}
