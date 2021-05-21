<template>
    <div class="container">
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
                <div class="row-3">
                    <h1 class="display-4">Graphics and Branding</h1>
                </div>
                <div class="row-9">
                    <div class="col">
                        <div class="row">
                            <div class="accordion accordion-flush" id="accordion-graphics-and-branding">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-accordion-graphics-and-branding" aria-expanded="false" aria-controls="flush-accordion-graphics-and-branding">
                                        Logo & Brand
                                    </button>
                                    </h2>
                                    <div id="flush-accordion-graphics-and-branding" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordion-graphics-and-branding">
                                        <div class="accordion-body">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Brand Identity</li>
                                                <li class="list-group-item">Stationery</li>
                                                <li class="list-group-item">Post Card</li>
                                                <li class="list-group-item">Promotion Ad</li>
                                                <li class="list-group-item">Social Media Posts</li>
                                                <li class="list-group-item">Email Signature</li>
                                            </ul>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Logo</li>
                                                <li class="list-group-item">Brochure</li>
                                                <li class="list-group-item">Posters</li>
                                                <li class="list-group-item">Business Cards</li>
                                                <li class="list-group-item">Web banners</li>
                                                <li class="list-group-item">Company Profile</li>
                                                <li class="list-group-item">Photo Advertisement</li>
                                                <li class="list-group-item">Brand Guide</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <img class="img-thumbnail img-fluid" src="https://user-images.githubusercontent.com/38276345/118911538-ebd81680-b958-11eb-9ee5-884067d56183.png" alt="Websites">
                                <img class="img-thumbnail img-fluid" src="https://user-images.githubusercontent.com/38276345/118911538-ebd81680-b958-11eb-9ee5-884067d56183.png" alt="Websites">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1"></div>
        </div>
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
                <div class="row-3">
                    <h1 class="display-4">Graphic Designs</h1>
                </div>
                <div class="row-9">
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item display-6 fw-bold">Logo</li>
                                    <li class="list-group-item display-6 fw-bold">Brochure</li>
                                </ul>
                            </div>
                            <div class="col-md-auto"></div>
                            <div class="col">
                                <div class="row">
                                    <img class="img-thumbnail img-fluid" src="https://user-images.githubusercontent.com/38276345/118911538-ebd81680-b958-11eb-9ee5-884067d56183.png" alt="Websites">
                                    <img class="img-thumbnail img-fluid" src="https://user-images.githubusercontent.com/38276345/118911538-ebd81680-b958-11eb-9ee5-884067d56183.png" alt="Websites">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1"></div>
        </div>
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
                <div class="row-3">
                    <h1 class="display-4">Design and Develop</h1>
                </div>
                <div class="row-9">
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item fw-bold">Mobile Application</li>
                                    <li class="list-group-item fw-bold">Desktop Application</li>
                                    <li class="list-group-item fw-bold">Websites | Web application</li>
                                </ul>
                            </div>
                            <div class="col-md-auto"></div>
                            <div class="col">
                                <div class="row">
                                    <img class="img-thumbnail img-fluid" src="https://user-images.githubusercontent.com/38276345/118911538-ebd81680-b958-11eb-9ee5-884067d56183.png" alt="Websites">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Serve extends Vue {}
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