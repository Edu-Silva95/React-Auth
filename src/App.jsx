import Header from './components/Header.jsx';
import Auth from './components/Auth.jsx';
import Counter from './components/Counter.jsx';
import { Fragment } from 'react/jsx-runtime';
import UserProfile from './components/UserProfile.jsx';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
