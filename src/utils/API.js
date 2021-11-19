// project images
import oneStopImage from '../assets/images/oneStop.png';
import pawTimeImage from '../assets/images/pawTime.png';
import reduxStoreImage from '../assets/images/reduxStore.png';
import bookSearchImage from '../assets/images/bookSearch.png';
import teamProfileImage from '../assets/images/teamProfile.png';
import budgetTrackerImage from '../assets/images/budgetTracker.png';
// import pawTimeImage from '../assets/images/pawTime.png';
// import pawTimeImage from '../assets/images/pawTime.png';

const projects = [
  {
    title: 'One-Stop',
    description:
      "A recipe website that allows user to quickly search for recipes. The website has 'add to cart' features with same day delivery of the ingredients for the recipes that users are desired to cook.",
    imageUrl: oneStopImage,
    githubUrl: 'https://github.com/CodingNav/One-Stop',
    deployedUrl: 'https://codingnav.github.io/One-Stop/',
  },
  {
    title: 'Paw-Time',
    description:
      'A profile webpage for multiple pets. For each pet profile, users can add pet vaccination information, notes, and schedule appointments for the pets.',
    imageUrl: pawTimeImage,
    githubUrl: 'https://github.com/MichaelAdamGroberman/PawTime',
    deployedUrl: 'https://mysterious-waters-58125.herokuapp.com/',
  },
  {
    title: 'Redux-Store',
    description:
      'This online app shopping store has function of picking the category to shop for, adding items to cart. The user will be able to go to the cart and view all items added. The payment page is developed using Stripe.',
    imageUrl: reduxStoreImage,
    githubUrl: 'https://github.com/yingliii/Redux-Store',
    deployedUrl: 'https://infinite-bastion-62056.herokuapp.com/',
  },
  {
    title: 'Book-Search-Engine',
    description:
      'This is a search book engine. The users have the ability to search for the books that they want to search for and 10 books will be returned per searching result. The users also are able to login/signup to create an account for saving their favorite book to their book list.',
    imageUrl: bookSearchImage,
    githubUrl: 'https://github.com/yingliii/Book-Search-Engine',
    deployedUrl: 'https://murmuring-atoll-59016.herokuapp.com/',
  },
  {
    title: 'Team-Profile-Generator',
    description:
      'The Team Profile Generator allows user to add one manager, multiple employees, such as engineer and intern. The app provides the functionality with using command line to generate multiple positions for a team. The website will be automaticall rendered once the user finishing up adding roles to the team.',
    imageUrl: teamProfileImage,
    githubUrl: 'https://github.com/yingliii/Team-Profile-Generator',
  },
  {
    title: 'Budget-Tracker',
    description:
      'The budget tracker allows users to record expenses/incomes whenever and wherever they go. The app is available offline which means the users are able to log information while offline and all the data will be populated to database once users are connected with internet.',
    imageUrl: budgetTrackerImage,
    githubUrl: 'https://github.com/yingliii/Budget-Tracker-OnlineAndOffline',
    deployedUrl: 'https://calm-cove-80693.herokuapp.com/',
  },
];

export default {
  getProjects: function () {
    return new Promise((resolve) => {
      resolve(projects);
    });
  },
};
