<template>
    <div>
        <footer class="text-center text-white" style="background-color: #f1f1f1;">
            <div class="container p-2">
                <span class="desktop__size">
                    <div class="row row-cols-3">
                        <div class="col">
                            <h6 class="fw-bold text-black-50">
                                Philippine Main Office
                            </h6>
                            <p class="fw-normal text-black-50">
                                B56 L14 Villaggio Ignatius, Raphael St., Buenavista 1, General Trias, Cavite
                            </p>
                        </div>
                        <div class="col">
                            <h6 class="fw-bold text-black-50">
                                Minnesota, USA, Office
                            </h6>
                            <p class="fw-normal text-black-50">
                                10866 101st Place N, Maple Grove, Minnesota, USA
                            </p>
                        </div>
                        <div class="col">
                            <h6 class="fw-bold text-black-50">
                                Ohio, USA Office
                            </h6>
                            <p class="fw-normal text-black-50">
                                4953 Kilconnel Dr, Columbus, OH. 43221
                            </p>
                        </div>
                    </div>
                </span>
                <span class="mobile__size">
                    <div class="col">
                        <div class="row">
                            <h6 class="fw-bold text-black-50">
                                Philippine Main Office
                            </h6>
                            <p class="fw-normal text-black-50">
                                B56 L14 Villaggio Ignatius, Raphael St., Buenavista 1, General Trias, Cavite
                            </p>
                        </div>
                        <div class="row">
                            <h6 class="fw-bold text-black-50">
                                Minnesota, USA, Office
                            </h6>
                            <p class="fw-normal text-black-50">
                                10866 101st Place N, Maple Grove, Minnesota, USA
                            </p>
                        </div>
                        <div class="row">
                            <h6 class="fw-bold text-black-50">
                                Ohio, USA Office
                            </h6>
                            <p class="fw-normal text-black-50">
                                4953 Kilconnel Dr, Columbus, OH. 43221
                            </p>
                        </div>
                    </div>
                </span>
            </div>
            <div class="container p-2">
                <span class="desktop__size">
                    <div class="row row-cols-3">
                        <div class="col">
                            <h6 class="fw-bold text-black-50">
                                Contact numbers: 
                            </h6>
                            <p class="fw-normal text-black-50">
                                +63 917 308 0134
                                <br />
                                +63 995 974 4734
                            </p>
                        </div>
                        <div class="col">
                            <h6 class="fw-bold text-black-50">
                                Landline number:
                            </h6>
                            <p class="fw-normal text-black-50">
                                (046) 538 2723
                            </p>
                        </div>
                        <div class="col">
                            <h6 class="fw-bold text-black-50">
                               Email address:
                            </h6>
                            <p class="fw-normal text-black-50">
                                upgrade_cms@outlook.com
                                upgrade.dms20@gmail.com
                            </p>
                        </div>
                    </div>
                </span>
                <span class="mobile__size">
                    <div class="col">
                        <div class="row">
                            <h6 class="fw-bold text-black-50">
                                Contact numbers: 
                            </h6>
                            <p class="fw-normal text-black-50">
                                +63 917 308 0134
                                +63 995 974 4734
                            </p>
                        </div>
                        <div class="row">
                            <h6 class="fw-bold text-black-50">
                                Landline number:
                            </h6>
                            <p class="fw-normal text-black-50">
                                (046) 538 2723
                            </p>
                        </div>
                        <div class="row">
                            <h6 class="fw-bold text-black-50">
                               Email address:
                            </h6>
                            <p class="fw-normal text-black-50">
                                upgrade_cms@outlook.com
                                upgrade.dms20@gmail.com
                            </p>
                        </div>
                    </div>
                </span>
            </div>
            <div class="container p-2">
                <div class="row">
                    <div class="col">
                        <router-link to="/" class="btn btn-transparent" tabindex="1" role="button" aria-disabled="false">
                            <font-awesome-icon :icon="['fab', 'facebook-f']" size="lg" />
                        </router-link>
                        <router-link to="/" class="btn btn-transparent" tabindex="1" role="button" aria-disabled="false">
                            <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
                        </router-link>
                        <router-link to="/" class="btn btn-transparent" tabindex="1" role="button" aria-disabled="false">
                            <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                <font-awesome-icon :icon="['far', 'copyright']" /> 2021 Copyright:
                <router-link to="/chart">
                    www.udms.com
                </router-link>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss">

  .mobile__size {
  display: none;
  }
  
  .desktop__size {
  display: inline;
  }
  
  @media only screen and (max-width: 600px) {
  
    .mobile__size {
      display: inline;
    }
  
    .desktop__size {
      display: none;
    }
  
  }
</style>