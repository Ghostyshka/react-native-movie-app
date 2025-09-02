export interface Movie {
  trailer_url: string;
  id: number;
  title: string;
  poster_url: string;
  year: number;
  genre: string;
  rating: number;
  description: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    poster_url: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2021/08/19090041/9gk7adHYeDvHkCSEqAvQNLV5Uge-768x1152.jpg",    
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O." ,
    trailer_url: "https://www.youtube.com/watch?v=YoHD9XEInc0"
  },
  {
    id: 2,
    title: "Interstellar",
    poster_url: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    year: 2014,
    genre: "Adventure",
    rating: 8.6,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    trailer_url: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  },
  {
    id: 3,
    title: "The Dark Knight",
    poster_url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    trailer_url: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  },
  {
    id: 4,
    title: "Avatar",
    poster_url: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
    year: 2009,
    genre: "Fantasy",
    rating: 7.8,
    description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    trailer_url: "https://www.youtube.com/watch?v=5PSNL1qE6VY"
  },
  {
    id: 5,
    title: "Pulp Fiction",
    poster_url: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    year: 1994,
    genre: "Crime",
    rating: 8.9,
    description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    trailer_url: "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    poster_url: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    description: "Two imprisoned people bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    trailer_url: "https://www.youtube.com/watch?v=6hB3S9bIaco"
  },
  {
    id: 7,
    title: "The Godfather",
    poster_url: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
    year: 1972,
    genre: "Crime",
    rating: 9.2,
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    trailer_url: "https://www.youtube.com/watch?v=sY1S34973zA"
  },
  {    
    id: 8,
    title: "The Matrix",
    poster_url: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    trailer_url: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
  },
  {
    id: 9,
    title: "Forrest Gump",
    poster_url: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    year: 1994,
    genre: "Drama",
    rating: 8.8,
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama",
    trailer_url: "https://www.youtube.com/watch?v=bLvqoHBptjg"
  },
];