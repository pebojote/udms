<template>
  <div>
    <div class="mt-1 mb-1"></div>
    <h1 class="display-1 fw-bold">Founder</h1>
    <div class="row p-5">
      <div class="col">
        <img src="https://user-images.githubusercontent.com/38276345/117926120-d9435900-b32a-11eb-8963-95221e0385b1.png" class="img-thumbnail rounded-circle mx-auto d-block" alt="...">
      </div>
      <div class="col-md-auto"></div>
      <div class="col">
        <img src="https://user-images.githubusercontent.com/38276345/117926134-dcd6e000-b32a-11eb-8aad-1443f5ea138c.png" class="img-thumbnail rounded-circle mx-auto d-block" alt="...">
      </div>
      <div class="col-md-auto"></div>
      <div class="col">
        <img src="https://user-images.githubusercontent.com/38276345/117926141-df393a00-b32a-11eb-8ff2-fb63f0f473fb.png" class="img-thumbnail rounded-circle mx-auto d-block" alt="...">
      </div>
    </div>
    <div class="mt-1 mb-1"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Footer
  },
})
export default class Home extends Vue {}
</script>
