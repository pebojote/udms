<template>
  <div>
    <div class="mt-1 mb-1"></div>
    <h1 class="display-1 fw-bold">Services</h1>
    <div class="mt-5 mb-5"></div>
    <Serve />
    <div class="mt-5 mb-5"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/Footer.vue';
import Serve from '@/components/Serve.vue';

@Component({
  components: {
    Footer,
    Serve
  },
})
export default class Home extends Vue {}
</script>