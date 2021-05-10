<template>
  <div class="home">
    <img class="img-fluid img-thumbnail" alt="UDMS logo" src="@/assets/logo.png">
    <Overview msg="Welcome to Your Vue.js + TypeScript App"/>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Overview from '@/components/Overview.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue'; // @ is an alias to /src

@Component({
  components: {
    Overview,
    Footer,
  },
})
export default class Home extends Vue {}
</script>
