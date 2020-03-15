<template>
  <div>
    <h1>Events Listing</h1>
    <!-- nested component -->
    <EventCard />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'Event-List',
  components: {
    EventCard
  }
}
</script>

<style></style>
