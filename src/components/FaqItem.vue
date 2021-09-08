<template>
  <li>
    <img v-if="icon" class="icon" :src="`/images/${icon}`" />
    {{ title }}
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.icon {
  height: 30px;
  width: 30px;
}
</style>
