// EventCard.vue is a child.
<template>
  <div class="events">
  		<h1>Chipie Events</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>

</template>

<script>

import EventCard from "@/components/EventCard.vue" // @ is an alias to /src
import EventService from "@/services/EventService.js" // @ is an alias to /src

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data () {
  	return {
  		events: null
  	}
  },
  created () {
 	EventService.getEvents()
 	// axios.get(
 	// 	"http://my-json-server.typicode.com/bribricot/real-world-vue/events"
 	// )
 	.then(response => {
 		// To know if we receive the data : console.log("events:", response.data)
 		this.events = response.data
 	})
 }
}
</script>

<style scoped>
	.events {
		display: flex;
		flex-direction: column;
		align-items: center;

	}
	.events:visited {
		color: black;
	}
</style>
