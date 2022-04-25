import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import SearchSection from '@/components/SearchSection.vue'
Vue.use(Vuex)
Vue.use(Vuetify)
const setClientMock = jest.fn()
const store = new Vuex.Store({
  state: {
    client: 'client',
  },
  mutations: {
    SET_CLIENT: setClientMock,
  },
  getters: {
    clients: () => [],
  },
})
describe('SearchSection', () => {
  let wrapper
  const vuetify = new Vuetify()
  beforeEach(() => {
    wrapper = mount(SearchSection, {
      vuetify,
      store,
    })
  })
  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  it('change client', () => {
    wrapper.vm.changeClient()
    expect(store.state.client).toBe('client')
  })
})
