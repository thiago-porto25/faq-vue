<template>
  <ul>
    <FaqItem
      @click="
        () => {
          $emit('changePage', ['FaqContent', category.id])
          updateSubject(category.id)
        }
      "
      v-for="category in $filteredDataSubject.questions"
      :key="category.id"
      :title="category.title"
      :icon="category.icon"
    ></FaqItem>
  </ul>
</template>

<script>
import FaqItem from '../components/FaqItem.vue'

export default {
  components: { FaqItem },

  props: {
    currentView: {
      type: String
    }
  },

  computed: {
    $filteredDataSubject() {
      console.log(this.$store.state)
      return this.$store.getters.$filteredDataSubject
    }
  },

  emits: ['changePage'],

  methods: {
    updateSubject(id) {
      this.$store.commit('SET_QUESTION', id)
    }
  }
}
</script>
