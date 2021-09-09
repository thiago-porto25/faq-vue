<template>
  <div class="app-comp">
    <component
      @changePage="handleChangePage($event)"
      :currentView="currentView"
      :is="currentView"
    ></component>
  </div>
</template>

<script>
import FaqContent from './pages/FaqContent.vue'
import FaqList from './pages/FaqList.vue'
import Home from './pages/Home.vue'

export default {
  data() {
    return {
      currentView: 'Home'
    }
  },

  methods: {
    handleChangePage(event) {
      this.currentView = event
    }
  },

  components: { Home, FaqContent, FaqList },

  created() {
    this.$store.dispatch('fetchData')
  }
}
</script>

<style scoped>
.app-comp {
  width: 310px;
  border: 2px solid #26282c66;
  box-shadow: 2px 2px 10px #00000066;
  height: 450px;
  padding: 10px 10px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
