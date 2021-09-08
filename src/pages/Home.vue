<template>
  <ul>
    <FaqItem
      @click="
        () => {
          $emit('changePage', ['FaqList', category.id])
          updateSubject(category.id)
        }
      "
      v-for="category in $allData"
      :key="category.id"
      :title="category.title"
      :icon="category.icon"
    />
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
    $allData() {
      return this.$store.getters.$allData
    }
  },

  emits: ['changePage'],

  methods: {
    updateSubject(id) {
      this.$store.commit('SET_SUBJECT', id)
    }
  }
}
</script>
