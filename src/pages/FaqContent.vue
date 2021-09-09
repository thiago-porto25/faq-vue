<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn"
    appear
    mode="out-in"
  >
    <div class="faq-content">
      <header class="content-header">
        <ArrowLeft pageToGo="FaqList" @click="$emit('changePage', 'FaqList')" />
        <h4 class="content-title">{{ $filteredDataQuestion.title }}</h4>
      </header>
      <p v-html="$filteredDataQuestion.content" />
    </div>
  </transition>
</template>

<script>
import ArrowLeft from '../components/ArrowLeft.vue'
import 'animate.css'

export default {
  components: { ArrowLeft },

  props: {
    currentView: {
      type: String
    }
  },

  computed: {
    $filteredDataQuestion() {
      return this.$store.getters.$filteredDataQuestion
    }
  },

  emits: ['changePage']
}
</script>

<style scoped>
.content-header {
  display: flex;
  align-items: center;
}
.content-title {
  margin-left: 30px;
}
h4 {
  font-size: 16px;
  font-weight: normal;
}
p {
  padding: 40px 20px;
  text-align: justify;
  font-size: 13px;
}
</style>
