<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn"
    appear
    mode="out-in"
  >
    <div class="home">
      <img
        src="/images/astronaut.svg"
        class="astronaut-img"
        alt="astronaut drawing"
      />
      <FaqHeader
        class="faq-header-home"
        title="Perguntas frequentes"
        subtitle="Escolha a categoria desejada"
      />
      <ul class="home-list">
        <FaqItem
          v-for="category in $allData"
          @click="
            () => {
              $emit('changePage', 'FaqList')
              updateSubject(category.id)
            }
          "
          :key="category.id"
          :title="category.title"
          :icon="category.icon"
        />
      </ul>
    </div>
  </transition>
</template>

<script>
import FaqItem from '../components/FaqItem.vue'
import FaqHeader from '../components/FaqHeader.vue'
import 'animate.css'

export default {
  components: { FaqItem, FaqHeader },
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

<style scoped>
.astronaut-img {
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.home-list {
  margin-top: 20px;
  list-style-type: none;
}
</style>
