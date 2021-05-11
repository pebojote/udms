<template>
  <div class="p-2">
    <div class="mt-1 mb-1"></div>
    <h1 class="display-1 fw-bold">Chart</h1>
    <Org />
    <div class="mt-1 mb-1"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Org from '@/components/Org.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Org,
    Footer
  },
})
export default class Home extends Vue {}
</script>