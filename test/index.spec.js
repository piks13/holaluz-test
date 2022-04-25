import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import index from '@/pages/index.vue'
Vue.use(Vuex)
Vue.use(Vuetify)
const store = new Vuex.Store({
  actions: {
    fetchClients: () => [],
    fetchSupplyPoints: () => [],
  },
})
describe('index', () => {
  let wrapper
  const vuetify = new Vuetify()
  beforeEach(() => {
    wrapper = mount(index, {
      vuetify,
      store,
      stubs: [
        'SearchSection',
        'ClientSection',
        'SupplyPointSection',
        'OfferSection',
      ],
    })
  })
  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  it('change client', async () => {
    await index.fetch.call(wrapper.vm)
    expect(wrapper.vm).toBeTruthy()
  })
})
