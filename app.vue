<script setup>
const triggerError = () => {
  throw new Error('Nuxt Button Error')
}
</script>

<template>
  <div>
    <button
      id="errorBtn"
      @click="triggerError"
    >
      Trigger Error
    </button>
  </div>
</template>
