<template>
    <div>
        <footer class="text-center text-white" style="background-color: #f1f1f1;">
            <div class="container p-2">
                <div class="row gx-1 d-flex justify-content-center">
                    <div class="col-5 col-sm-3">
                        <section>
                            <h6 class="fw-bold text-black-50">
                                Philippine Main Office
                            </h6>
                            <p class="fw-normal text-black-50">
                                B56 L14 Villaggio Ignatius, Raphael St., Buenavista 1, General Trias, Cavite
                            </p>
                            <h6 class="fw-bold text-black-50">
                                Minnesota, USA Office
                            </h6>
                            <p class="fw-normal text-black-50">
                                10866 101st Place N, Maple Grove, Minnesota, USA.
                            </p>
                        </section>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-7 col-sm-3">
                        <router-link to="/" class="btn btn-transparent" tabindex="1" role="button" aria-disabled="false">
                            <font-awesome-icon :icon="['fab', 'facebook-f']" size="lg" />
                        </router-link>
                        <router-link to="/" class="btn btn-transparent" tabindex="1" role="button" aria-disabled="false">
                            <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
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