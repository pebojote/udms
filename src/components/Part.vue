<template>
    <div class="row p-5">
      <div class="col">
        <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
              <img src="https://user-images.githubusercontent.com/38276345/118633995-a60a3980-b804-11eb-83bc-3a3a29c3c888.png" class="mx-auto d-block img-fluid" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5 class="text-dark">Manuka.AI</h5>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="https://user-images.githubusercontent.com/38276345/122318427-98ee8080-cf51-11eb-8c08-b1db7895ba19.png" class="mx-auto d-block img-fluid" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5 class="text-dark">ProSpark</h5>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="https://user-images.githubusercontent.com/38276345/118634036-b0c4ce80-b804-11eb-9339-91d72f0da527.png" class="mx-auto d-block img-fluid" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5 class="text-dark">Neur Media</h5>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Part extends Vue {}
</script>
