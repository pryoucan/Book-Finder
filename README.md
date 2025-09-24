## Book Finder React Application
### Deployed Link:
- This project is hosted on Vercel, you can click on the link below:
- - https://book-finder-puce-eight.vercel.app/

A simple web application built with React to search for books using the Open Library API.

### Features
- Search for books by title, author, or subject.

- View a list of search results in a responsive grid.

- See a loading indicator while data is being fetched.

- View an error message if the API call fails.

- Click on a book to see a more detailed view.

- Navigate back from the detailed view to the search results.

### Technology Stack
- React 
- Open Library API: it is used as the external data soruce for the books.

### How It Works
This project is a single-page application (SPA) centered around the HomePage component. This component manages all the application's state, including the search query, API results, loading status, and error handling.

When a user types in the SearchBar and clicks search, an API call is made to the Open Library. The results are stored in the state, and the UI is conditionally rendered to show either a loading spinner, an error message, or the list of books. Clicking on a book card updates the state to show the BookDetails component.

Component Structure
App.jsx: The root component that renders the main layout and the HomePage.

pages/HomePage.jsx: The main component that manages state and data fetching logic.

components/SearchBar.jsx: A controlled form component for user input.

components/BookList.jsx: Renders the grid of book results by mapping over the data.

components/BookCard.jsx: A presentational component for a single book in the list.

components/BookDetails.jsx: A presentational component for the detailed view of a selected book.