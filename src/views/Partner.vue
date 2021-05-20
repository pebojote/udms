<template>
  <div>
    <div class="mt-1 mb-1"></div>
    <h1 class="display-1 fw-bold">Partner</h1>
    <div class="mt-5 mb-5"></div>
    <Part />
    <div class="mt-1 mb-1"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/Footer.vue';
import Part from '@/components/Part.vue';

@Component({
  components: {
    Footer,
    Part
  },
})
export default class Home extends Vue {}
</script>
