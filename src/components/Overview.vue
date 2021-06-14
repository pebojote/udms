<template>
  <div class="container">
        <div class="row">
          <div class="mt-5 mb-5"></div>
          <img class="img-fluid img-thumbnail rounded mx-auto d-block border-0" alt="UDMS logo" src="https://user-images.githubusercontent.com/38276345/121454437-5cf96f80-c9d5-11eb-8596-18aa4b699178.png">
          <h1 class="font-weight-bold text-center" style="font-size: 4vw">"Your Path To Success Stories!"</h1>
        </div>
        <div class="row">
          <div class="mt-5 mb-5"></div>
          <h1 class="display-3">About Us</h1>
          <div class="card border-0">
            <div class="card-body">
              <p class="lead">
                Upgrade Digital Marketing Services is a one-stop-shop marketing 
                and IT solutions company that was established through the humble 
                beginnings of 2 young entrepreneur during COVID-19 pandemic. 
                Our willingness to provide strong and reliable solutions for 
                Marketing and IT requirements of every business drives us to start the company.
              </p>
            </div>
          </div>
        </div>
      <div class="row">
        <div class="mt-5 mb-5"></div>
        <h1 class="display-3">History</h1>
        <div class="card border-0">
          <div class="card-body">
            <p class="lead">
              Upgrade started on October 29, 2020, as C19 Creative Marketing Solutions offering only three types of services which are Graphic Designs, Printing Services, and Video Editing. On December 03, 2020, we registered and decided to change our name to Upgrade Digital Marketing Services and became a one-stop-shop marketing and IT solutions company. In March 2021, as a global strategy of the company, we expand the business in the USA.
            </p>
          </div>
        </div>
        <div class="mt-5 mb-5"></div>
      </div>
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
