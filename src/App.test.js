import { render, screen } from '@testing-library/react';
import App from './App';
import Favorites from './Pages/Logged In/Favorites';
import LoggedIn from './Pages/Logged In/LoggedIn';
import Pokedex from './Pages/Logged In/Pokedex';
import LoggedOut from './Pages/Logged Out/LoggedOut';
import Login from './Pages/Logged Out/Login';

test('renders learn react link', () => {
  render(<App />);
});

test("renders login", () => {
  render (<Login/>);
})

test("renders logged in routes", () => {
  render(<LoggedIn/>);
})

test("renders logged out routes", () => {
  render(<LoggedOut/>);
})

test("renders pokedex page", () => {
  render(<Pokedex/>)
})

test("renders favorites page", () => {
  render(<Favorites/>);
})