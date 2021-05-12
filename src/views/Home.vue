<template>
  <div class="home">
    <Overview msg="Welcome to Your Vue.js + TypeScript App"/>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Overview from '@/components/Overview.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Overview,
    Footer,
  },
})
export default class Home extends Vue {}
</script>
