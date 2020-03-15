<template>
  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: '1' } }"
  >
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <span>{{ event.ettendees.length }} attending</span>
    </div>
  </router-link>
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
