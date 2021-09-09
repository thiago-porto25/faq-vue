<template>
  <div class="arrow-container">
    <img class="arrow" src="/images/arrow-left.svg" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.arrow-container {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -10px;
  cursor: pointer;
}
.arrow-container:hover {
  background-color: #3f4452;
}
.arrow {
  color: black;
  width: 20px;
  height: 20px;
}
</style>
