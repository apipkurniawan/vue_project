<template>
  <div>
    <!-- <h1>Create Event, {{ user.name }}</h1>
    <p>This event is created by {{ user.name }}</p>
    <p>{{ getEventById(2) }}</p>
    <button @click="incrementCount">Increment</button>
    <input type="number" v-model.number="incrementBy" /> -->

    <form @submit.prevent="createEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input
          type="text"
          v-model="event.title"
          placeholder="Add an event title"
        />
      </div>
      <div class="field">
        <label>Description</label>
        <input
          type="text"
          v-model="event.description"
          placeholder="Add a description"
        />
      </div>
      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input
          type="text"
          v-model="event.location"
          placeholder="Add a location"
        />
      </div>
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date" />
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex'

import Datepicker from 'vuejs-datepicker'

export default {
  // cara 1
  // computed: mapState({
  //   userName: state => state.user.name,
  //   categories: 'categories' // simply syntax for top-level State
  // })
  // cara 2
  // computed: mapState(['categories', 'user'])
  // cara 3
  // computed: {
  // localComputed() {
  //   return ''
  // },
  // ...mapGetters(['getEventById']),
  // ...mapState(['categories', 'user']) //using object spread opertor
  // },
  // incrementCount() {
  //   this.$store.dispatch('updateCount', this.incrementBy)
  // }

  components: {
    Datepicker
  },
  data() {
    const times = []
    for (let i = 0; i < 24; i++) {
      times.push(i + ':00')
    }
    return {
      // incrementBy: 1
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    }
  },
  methods: {
    createEvent() {
      this.$store
        .dispatch('createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          })
          this.event = this.createFreshEventObject()
        })
        .catch(() => {
          console.log('There was a problem creating your event')
        })
    },
    createFreshEventObject() {
      const user = this.$store.state.user
      const id = Math.floor(Math.random() * 10000000)
      return {
        id:id,
        user:user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    },
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
