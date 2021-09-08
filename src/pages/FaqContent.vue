<template>
  <FaqText :text="$filteredDataQuestion.content" />
</template>

<script>
import FaqText from '../components/FaqText.vue'

export default {
  components: { FaqText },

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
