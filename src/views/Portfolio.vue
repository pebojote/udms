<template>
  <div>
    <div class="mt-1 mb-1"></div>
    <h1 class="display-1 fw-bold">Portfolio</h1>
    <div class="mt-5 mb-5"></div>
    <Port />
    <div class="mt-5 mb-5"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/Footer.vue';
import Port from '@/components/Port.vue';

@Component({
  components: {
    Footer,
    Port
  },
})
export default class Home extends Vue {}
</script>