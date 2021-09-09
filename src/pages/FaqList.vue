<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn"
    appear
    mode="out-in"
  >
    <div class="faq-list">
      <header>
        <ArrowLeft pageToGo="Home" @click="$emit('changePage', 'Home')" />
        <div>
          <FaqHeader
            :title="$filteredDataSubject.title"
            subtitle="selecione uma pergunta"
          />
        </div>
        <img
          class="icon header-icon"
          src="/images/rocket.svg"
          alt="rocket icon"
        />
      </header>
      <ul>
        <FaqItem
          v-for="category in $filteredDataSubject.questions"
          @click="
            () => {
              $emit('changePage', 'FaqContent')
              updateSubject(category.id)
            }
          "
          :key="category.id"
          :title="category.title"
          :icon="category.icon"
        ></FaqItem>
      </ul>
    </div>
  </transition>
</template>

<script>
import FaqItem from '../components/FaqItem.vue'
import FaqHeader from '../components/FaqHeader.vue'
import ArrowLeft from '../components/ArrowLeft.vue'
import 'animate.css'

export default {
  components: { FaqItem, FaqHeader, ArrowLeft },

  props: {
    currentView: {
      type: String
    }
  },

  computed: {
    $filteredDataSubject() {
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

<style scoped>
header {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.header-icon {
  margin-top: 20px;
}
</style>
