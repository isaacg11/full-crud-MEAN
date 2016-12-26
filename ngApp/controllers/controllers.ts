namespace live_exam_practice.Controllers {

    export class HomeController {

      constructor() {

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
    }


}
