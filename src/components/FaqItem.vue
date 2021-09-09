<template>
  <li class="list-item">
    <img v-if="icon" class="icon" :src="`/images/${icon}`" />
    <p>{{ title }}</p>
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
.list-item {
  width: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 3rem;
}

.list-item:hover {
  background-color: #3f4452;
}

.list-item img {
  margin-left: 20px;
}

.list-item p {
  margin-left: 30px;
  width: fit-content;
}
</style>
