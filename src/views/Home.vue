<template>
  <div class="home">
    <img class="img-fluid img-thumbnail" alt="UDMS logo" src="@/assets/logo.png">
    <Overview msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Overview from '@/components/Overview.vue'; // @ is an alias to /src

@Component({
  components: {
    Overview,
  },
})
export default class Home extends Vue {}
</script>
