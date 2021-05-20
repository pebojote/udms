<template>
  <div>
    <div class="mt-1 mb-1"></div>
    <h1 class="display-1 fw-bold">Founder</h1>
    <div class="mt-5 mb-5"></div>
    <Found />
    <div class="mt-1 mb-1"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/Footer.vue';
import Found from '@/components/Found.vue';

@Component({
  components: {
    Footer,
    Found
  },
})
export default class Home extends Vue {}
</script>
