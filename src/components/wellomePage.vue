<template>
  <div class="chart-text mt-10">
    <h1 class="wellcome-header"
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        data-sal-easing="ease-out-bounce">Data analysis of top-rated and highest-grossing movies</h1>
      <p data-sal="slide-up"
         data-sal-delay="100"
         data-sal-duration="1000"
         data-sal-easing="ease-out-bounce">
        Films generate income from several revenue streams, including theatrical exhibition,
         home video, television broadcast rights, and merchandising. However, theatrical box office
         earnings are the primary metric for trade publications in assessing the success of a film,
         mostly because of the availability of the data compared to sales figures for home video and
         broadcast rights, but also because of historical practice.
      </p>
         <div class="movie-header bttf"
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
              data-sal-easing="ease-out-bounce">
             <div class="movie-header-gradient">
               <div class="movie-header-overlay">
               <v-btn class="movie-header-overlay-btn"  href='/allTime' small color="#F44336">Top Movies Of all time</v-btn>
             </div>
             </div>
         </div>
         <p data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            data-sal-easing="ease-out-bounce">
         Included on the list are charts of
         the top box office earners, a chart
         of high-grossing films by calendar year, a timeline showing the transition of the highest-grossing
         film record, and a chart of the highest-grossing film franchises and series. All charts are ranked
         by international theatrical box office performance where possible, excluding income derived from home
          video, broadcasting rights, and merchandise.
          </p>
          <div class="movie-header shawshank"
               data-sal="slide-up"
               data-sal-delay="100"
               data-sal-duration="1000"
               data-sal-easing="ease-out-bounce">
             <div class="movie-header-gradient"></div>
             <div class="movie-header-overlay">
               <v-btn class="movie-header-overlay-btn" small href='/actor/all' color="#F44336">Top Actors</v-btn>
             </div>
         </div>
         <p data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            data-sal-easing="ease-out-bounce">
          Traditionally, war films, musicals, and historical dramas have been the most popular genres,
          but franchise films have been among the best performers in the 21st century. There is strong
          interest in the superhero genre, with nine films in the Marvel Cinematic Universe featuring
          among the nominal top-earners. The most successful superhero film, Avengers: Endgame, is also
           the highest-grossing film overall on the nominal earnings chart, and there are four films in
            total based on the Avengers comic books charting in the top ten. Other Marvel Comics adaptations
             have also had success with the Spider-Man and X-Men properties, while films based on Batman and
             Superman from DC Comics have generally performed well.
         </p>
            <div class="movie-header lotr"
                 data-sal="slide-up"
                 data-sal-delay="100"
                 data-sal-duration="1000"
                 data-sal-easing="ease-out-bounce">
                <div class="movie-header-gradient">
                  <div class="movie-header-overlay">
               <v-btn class="movie-header-overlay-btn" small href='/director/all' color="#F44336">Top Directors</v-btn>
             </div>
                </div>
            </div>
            <p data-sal="slide-up"
               data-sal-delay="100"
               data-sal-duration="1000"
               data-sal-easing="ease-out-bounce">
             Star Wars is also represented in the
              nominal earnings chart with four films, while the Harry Potter, Jurassic Park and Pirates of
              the Caribbean franchises along with Peter Jackson's Middle-earth series feature prominently.
              Avatar, in second place on the nominal chart, is the highest-grossing film that is not a
              sequel or an adaptation of a pre-existing property. Animated family films have performed
              consistently well, with Disney films enjoying lucrative re-releases prior to the home-video
              era. Disney also enjoyed later success with films such as Frozen, Zootopia, and The Lion King
              (with its computer-animated remake as the highest-grossing animated film), as well as its Pixar
               brand, of which Incredibles 2, Toy Story 3 and 4, and Finding Dory have been the best performers.
                Beyond Disney and Pixar animation, the Despicable Me, Shrek, and Ice Age series have met with
                the most success.
            </p>
            <div class="movie-header resdogs"
                 data-sal="slide-up"
                 data-sal-delay="100"
                 data-sal-duration="1000"
                 data-sal-easing="ease-out-bounce">
                <div class="movie-header-gradient">
                    <div class="movie-header-overlay">
               <v-btn class="movie-header-overlay-btn" small href='/byYear' color="#F44336">Top Movies by year</v-btn>
             </div>
                </div>
            </div>
  </div>
</template>

<script>
import sal from 'sal.js'

export default {
  data () {
    return {
    }
  },
  mounted () {
    sal()
  }
}
</script>
<style >

.movie-header {
  margin: 6em 0 6em 0;
  width: 100%;
  height: 500px;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.movie-header-gradient {
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgb(32,32,32);
  background: linear-gradient(0deg, rgba(32,32,32,1) 0%, rgba(32,32,32,0) 25%, rgba(32,32,32,0) 75%, rgba(32,32,32,1) 100%);
}
.movie-header-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  transition: background 0.7s;
}
.movie-header-overlay-btn {
  border-radius: 0px;
  color: #F44336;
  width: 200px;
  height: 35px !important;
  opacity: 0;
  transition: opacity 1s;
}
.movie-header-overlay:hover .movie-header-overlay-btn {
  opacity: 1;
}
.movie-header-overlay:hover {
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgba(32, 32, 32, 0.5);
}

.lotr {
  background-image: url('../assets/lotr.jpg');
}
.shawshank {
  background-image: url('../assets/shawshank.jpg');
  background-position-y: 10%;
}

.resdogs {
  background-image: url('../assets/resdogs.jpg');
  height: 600px;
}

.bttf {
  background-image: url('../assets/bttf.jpg');
  height: 600px;
}
.wellcome-header {
  text-align: center;
  margin: 2em 0 2em 0;
  font-weight: 300;
  font-size: 50px;
}

</style>
