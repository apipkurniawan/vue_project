import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: '123abc',
      name: 'apip'
    },
    count: 0,
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [
      {
        id: 1,
        title: '...',
        organizer: '...'
      },
      {
        id: 2,
        title: '...',
        organizer: '...'
      },
      {
        id: 3,
        title: '...',
        organizer: '...'
      },
      {
        id: 4,
        title: '...',
        organizer: '...'
      }
    ]
  },
  mutations: {
    // dynamic mutations
    // INCREMENT_COUNT(state, value) {
    //   state.count += value
    // },

    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {
    // action for mutations
    // updateCount({
    //   state,
    //   commit
    // }, incrementBy) {
    //   if (state.user) {
    //     commit('INCREMENT_COUNT', incrementBy)
    //   }
    // },

    createEvent({ commit }, event) {
      EventService.postEvent(event)
      commit('ADD_EVENT', event)
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
