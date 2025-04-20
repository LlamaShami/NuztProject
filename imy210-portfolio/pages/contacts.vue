<template>
  <section class="p-6 max-w-md mx-auto">
    <h1 class="text-3xl font-bold mb-4">Contact Me</h1>
    <form class="space-y-4">
      <div>
        <label class="block">Name:</label>
        <input type="text" class="w-full border p-2 rounded" />
      </div>
      <div>
        <label class="block">Email:</label>
        <input type="email" class="w-full border p-2 rounded" />
      </div>
      <div>
        <label class="block">Message:</label>
        <textarea rows="4" class="w-full border p-2 rounded"></textarea>
      </div>
      <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">
        Send
      </button>
    </form>
  </section>
</template>

<script setup>
// no functionality yet—just layout
</script>
