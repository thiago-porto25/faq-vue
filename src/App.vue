<template>
  <div>
    <div>{{ currentView }}</div>
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
      this.currentView = event[0]
    }
  },

  components: { Home, FaqContent, FaqList },

  created() {
    this.$store.dispatch('fetchData')
  }
}
</script>
