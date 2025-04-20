<script setup>
import { ref, onMounted } from 'vue'
const config = useRuntimeConfig()

const weatherUrl = 'https://api.open-meteo.com/v1/forecast' +
                   '?latitude=-25.7479&longitude=28.2293&current_weather=true'

const weather = ref(null)
const weatherError = ref(null)
const weatherLoading = ref(true)

onMounted(async () => {
  try {
    weather.value = await $fetch(weatherUrl)
  } catch (e) {
    weatherError.value = e
  } finally {
    weatherLoading.value = false
  }
})

//–– ANIMAL FACT ––//
const factUrl = 'https://catfact.ninja/fact'
const animalFact = ref(null)
const factError  = ref(null)
const factLoading = ref(true)

onMounted(async () => {
  try {
    animalFact.value = await $fetch(factUrl)
  } catch (e) {
    factError.value = e
  } finally {
    factLoading.value = false
  }
})
</script>

<template>
  <!-- Hero / Homepage -->
  <section>
    <h1>Shamiso Mpofu</h1>
    <p>Hello! I’m Shamiso, a second‑year Multimedia student at the UP. I love playing valorant and making games. I wish doing this degree made me as happy as playing videogames.</p>
    <img src="/avatar.jpg" alt="Your Photo" style="width:150px; margin-top:1rem;" />
  </section>

  <!-- Projects Section -->
  <section>
    <h2>Projects</h2>
    <ul>
      <li><strong>Fissure</strong> – A psychological horror game built with Godot, featuring tilemaps and puzzles.</li>
      <li><strong>XML File Manager</strong> – A RESTful front-end using Vue and a back-end that handles XML, XSLT, and schemas.</li>
      <li><strong>Keyboard 3D Model</strong> – A blender 3d project modeling a room.</li>
    </ul>
  </section>

  <!-- Contact Section -->
  <section>
    <h2>Contact</h2>
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div class="form-group">
        <label>Name</label>
        <input type="text" name="name" required />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" name="email" required />
      </div>
      <div class="form-group">
        <label>Message</label>
        <textarea name="message" rows="4" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </section>

  <!-- Existing API Sections -->
  <section>
    <h2>Current Weather</h2>
    <div v-if="weatherLoading">Loading…</div>
    <div v-else-if="weatherError">Error loading weather</div>
    <div v-else>
      <p>Temp: {{ weather.current_weather.temperature }}°C</p>

    </div>
  </section>

  <section>
    <h2>Random Animal Fact</h2>
    <div v-if="factLoading">Loading…</div>
    <div v-else-if="factError">Error loading fact</div>
    <div v-else>
      <p>{{ animalFact.fact }}</p>
    </div>
  </section>
</template>
