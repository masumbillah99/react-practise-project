const moviesData = [
  {
    id: crypto.randomUUID(),
    cover: "dark-knight.jpg",
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    rating: 5,
    price: "$7.99",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    type: ["trending", "top_rated"],
  },
  {
    id: crypto.randomUUID(),
    cover: "the-father-2.jpg",
    title: "The Godfather: Part II",
    genre: "Crime, Drama",
    rating: 3,
    price: "$8.99",
    description:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    type: ["top-rated", "upcoming"],
  },
  {
    id: crypto.randomUUID(),
    cover: "12-angry-man.jpg",
    title: "12 Angry Men",
    genre: "Drama",
    rating: 4,
    price: "$6.99",
    description:
      "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    type: ["upcoming"],
  },
  {
    id: crypto.randomUUID(),
    cover: "inception.jpg",
    title: "Inception",
    genre: "Action, Adventure, Sci-Fi",
    rating: 5,
    price: "$7.99",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    type: ["top-rated", "trending"],
  },
  {
    id: crypto.randomUUID(),
    cover: "schindler-list.jpg",
    title: "Schindler's List",
    genre: "Biography, Drama, History",
    rating: 4,
    price: "$8.99",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    type: ["new_release"],
  },
  {
    id: crypto.randomUUID(),
    cover: "interstellar.jpg",
    title: "Interstellar",
    genre: "Adventure, Drama, Sci-Fi",
    rating: 5,
    price: "$7.99",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    type: ["trending"],
  },
  {
    id: crypto.randomUUID(),
    cover: "end-game.jpg",
    title: "Avengers: Endgame",
    genre: "Action, Adventure, Drama",
    rating: 4,
    price: "$9.99",
    description:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    type: ["upcoming"],
  },
  {
    id: crypto.randomUUID(),
    cover: "matrix.jpg",
    title: "The Matrix",
    genre: "Action, Sci-Fi",
    rating: 3,
    price: "$6.99",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    type: ["upcomingm", "new_release"],
  },
  {
    id: crypto.randomUUID(),
    cover: "soorarai-pottru.jpg",
    title: "Soorarai Pottru",
    genre: "Life Story, Educational, Motivational",
    rating: 3,
    price: "$8.99",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    type: ["top_rated", "trending"],
  },
  {
    id: crypto.randomUUID(),
    cover: "sherlock-holmes.jpg",
    title: "Sherlock Holmes",
    genre: "Crime/Thriller/Advanture/Drama",
    rating: 2,
    price: "$7.99",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    type: ["top_rated"],
  },
  {
    id: crypto.randomUUID(),
    cover: "once-in-ho.jpg",
    title: "Once Upon a Time... in Hollywood",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Comedy/Drama",
    rating: 5,
    price: 140,
    type: ["trending", "top-rated"],
  },
  {
    id: crypto.randomUUID(),
    cover: "marriage-strory.jpg",
    title: "Marriage Story",
    description:
      "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
    genre: "Comedy/Drama",
    rating: 3,
    price: 90,
    type: ["new_release"],
  },
  {
    id: crypto.randomUUID(),
    cover: "pain-and-gain.jpg",
    title: "Pain & Gain",
    description:
      "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
    genre: "Action/Comedy/Crime/Drama",
    rating: 4,
    price: 100,
    type: ["trending", "top_rated"],
  },
  {
    id: crypto.randomUUID(),
    cover: "parasite.jpg",
    title: "Parasite",
    description:
      "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
    genre: "Comedy, Drama, Thriller",
    rating: 4,
    price: 250,
    type: ["upcoming"],
  },
  {
    id: crypto.randomUUID(),
    cover: "12th-fail.jpg",
    title: "12th Fail",
    description:
      "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    genre: "Education/Biography/Motivational",
    rating: 5,
    price: 100,
    type: ["top_rated", "trending"],
  },
  {
    id: crypto.randomUUID(),
    cover: "shaw-shank.jpg",
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 3,
    price: "$9.99",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    type: ["upcoming"],
  },
  {
    id: crypto.randomUUID(),
    cover: "the-father.jpg",
    title: "The Godfather",
    genre: "Crime, Drama",
    rating: 2,
    price: "$8.99",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    type: ["new_release"],
  },
];

/** get all movies data after function call */
export const getAllMovies = () => {
  return moviesData;
};
