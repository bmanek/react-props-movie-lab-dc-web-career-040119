// // original
// import React, { Component } from 'react';
// import MovieCard from './card-components/MovieCard.js'
// import movieData from './data.js'
//
// export default class MovieShowcase extends Component {
//
//   generateMovieCards = () => {
//     movieData.map(movie => {
//       console.log(<p>{this.props.title}</p>)
//     })
//   }
//   // map over your movieData array and return the correct
//
//   render() {
//     return (
//       <div id="movie-showcase">
//         {this.generateMovieCards()}
//       </div>
//     )
//   }
// }

// from solution
import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js';
import movieData from './data.js';

export default class MovieShowcase extends Component {
  // use an arrow function (below) to invoke the method
generateMovieCards = () => {
  // return (b/c we want to access the data) and call .map on the data (the object/data itself) and idx(the index of the data)
  // the arrow then calls the MovieCard component with the values of the index
  // (since its order won't change) and the data with the spread operator.
  // Component is invoked with data that is passed to it.
return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);
};
// below: the program does the work of rendering the data to the page.
// render calls the HTML w/ the invocation of generateMovieCards
// (which we defined on the lines above. Component is in method definition,)
// and the method is invoked below, basically
render() {
return <div id="movie-showcase">{this.generateMovieCards()}</div>;
}
}
