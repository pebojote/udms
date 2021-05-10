<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">UDMS</router-link>
        <span class="mobile__size">
          <span class="d-flex flex-grow-1"></span>
          <button class="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-expanded="false" aria-controls="offcanvasExample">
            More
          </button>
        </span>
        <span class="desktop__size">
          <span class="d-flex flex-grow-1"></span>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/chart" class="nav-link">
                Chart
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/founder" class="nav-link">
                Founder
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/partner" class="nav-link">
                Partner
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio" class="nav-link">
                Porfolio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/service" class="nav-link">
                Service
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">
                About
              </router-link>
            </li>
          </ul>
        </span>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              UDMS
            </h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <router-link to="/chart" class="list-group-item list-group-item-action" data-bs-dismiss="offcanvas" aria-label="Close">
                    Chart
                  </router-link>
                </li>
                <li class="list-group-item">
                  <router-link to="/founder" class="list-group-item list-group-item-action" data-bs-dismiss="offcanvas" aria-label="Close">
                    Founder
                  </router-link>
                </li>
                <li class="list-group-item">
                  <router-link to="/partner" class="list-group-item list-group-item-action" data-bs-dismiss="offcanvas" aria-label="Close">
                    Partner
                  </router-link>
                </li>
                <li class="list-group-item">
                  <router-link to="/portfolio" class="list-group-item list-group-item-action" data-bs-dismiss="offcanvas" aria-label="Close">
                    Porfolio
                  </router-link>
                </li>
                <li class="list-group-item">
                  <router-link to="/service" class="list-group-item list-group-item-action" data-bs-dismiss="offcanvas" aria-label="Close">
                    Service
                  </router-link>
                </li>
                <li class="list-group-item">
                  <router-link to="/about" class="list-group-item list-group-item-action" data-bs-dismiss="offcanvas" aria-label="Close">
                    About
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>


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
