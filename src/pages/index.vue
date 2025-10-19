<script setup lang="ts">
import ScrollBar from '@/components/ScrollBar.vue'

definePage({
  meta: {
    title: 'Hello World, Vue!'
  }
})

</script>

<template>
  <main>
    <div style="width: 400px; height: 400px; border: 1px solid #eee">
      <ScrollBar :auto-hide="false" :delay="1">
        <p v-for="i in 50" :key="i">{{ `✔ Choose which packages to build (Press <space> to select, <a> to toggle all, <i> to invert selection)` }}</p>
      </ScrollBar>
    </div>
  </main>
</template>
