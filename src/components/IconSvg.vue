<template>
  <svg class="icon-svg" aria-hidden="true">
    <use :xlink:href="`#icon-${props?.name}`" />
  </svg>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<style lang="css" scoped>
.icon-svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>
