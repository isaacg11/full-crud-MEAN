namespace live_exam_practice.Services {

  export class MovieService {
    public MovieResource;

    public saveMovie(movie) {
      return this.MovieResource.save(movie).$promise;
    }

    constructor(
      private $resource
    ) {

      this.MovieResource = $resource('/api/movies/:id');

    }
  }

angular.module('live_exam_practice').service('movieService', MovieService);
}
