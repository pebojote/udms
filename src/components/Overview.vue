<template>
  <div class="p-2">
    <div class="mt-1 mb-1"></div>
    <img class="img-fluid img-thumbnail rounded mx-auto d-block" alt="UDMS logo" src="@/assets/images/logo.png">
    <h1 class="display-1 fw-bold">Upgrade Digital Marketing Services Inc.</h1>
    <div class="card border-0">
      <div class="card-body">
        <p class="lead">
          Upgrade Digital Marketing Services is a one-stop-shop marketing 
          and IT solutions company that was established through the humble 
          beginnings of 3 youngs entrepreneur during COVID-19 pandemic. 
          Our willingness to provide strong and reliable solutions for 
          Marketing and IT requirements of every business drives us to start the company.
        </p>
      </div>
    </div>
    <div class="mt-5 mb-5"></div>
    <h1 class="display-3">About Us</h1>
    <div class="card border-0">
      <div class="card-body">
        <p class="lead">
          Upgrade Digital Marketing Services is a one-stop-shop marketing 
          and IT solutions company that was established through the humble 
          beginnings of 3 youngs entrepreneur during COVID-19 pandemic. 
          Our willingness to provide strong and reliable solutions for 
          Marketing and IT requirements of every business drives us to start the company.
        </p>
      </div>
    </div>
    <div class="mt-5 mb-5"></div>
    <h1 class="display-3">History</h1>
    <div class="card border-0">
      <div class="card-body">
        <p class="lead">
          In October 19, 2020, C19 Creative Marketing Solutions was discovered. Then, in November 04, 2020,
          the business name started as Upgrade Creative Marketing Solutions. And in December 03, 2020,
          it startup business was registered to Upgrade Digital Marketing Services Inc.
        </p>
      </div>
    </div>
    <div class="mt-5 mb-5"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Overview extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
