<template>
  <h1>{{ title }}</h1>
  <small>{{ subtitle }}</small>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  }
}
</script>

<style scoped>
h1 {
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
small {
  font-size: 16px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
