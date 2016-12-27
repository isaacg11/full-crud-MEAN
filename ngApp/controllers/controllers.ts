namespace live_exam_practice.Controllers {

    export class HomeController {
      public movies;

      constructor(
        private movieService: live_exam_practice.Services.MovieService
      ) {
        this.movies = movieService.getMovies();
      }
    }


    export class AddMovieController {
      public movie;

      public addMovie() {
        this.movieService.saveMovie(this.movie).then(() => {
          this.$state.go('Home');
        })
      }

      constructor(
        private movieService: live_exam_practice.Services.MovieService,
        public $state
      ) {

      }
    }


    export class EditMovieController {
      public movie;
      public id;

      public editMovie() {
        this.movie._id = this.id;
        this.movieService.saveMovie(this.movie).then(() => {
          this.$state.go('Home');
        })
      }

      constructor(
        private movieService: live_exam_practice.Services.MovieService,
        public $state,
        public $stateParams
      ) {
        if($stateParams) {
          this.id = $stateParams['id'];
        }
      }
    }


}
