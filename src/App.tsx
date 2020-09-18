import React, { useEffect } from 'react';
import Homepage from './pages/Homepage/Homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndUp from './pages/SignInAndUp/SignInAndUp';
import { auth, createUserProfileDocument } from './utils/firebase';
import { setCurrentUser } from './redux/user/userActions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './redux/rootReducer';

function App() {
  const dispatch = useDispatch();
  const currentUser = useTypedSelector((state) => state.user.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      // setCurrentUser(user);
      // console.log(user);
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef?.onSnapshot((snapshot) => {
          dispatch(setCurrentUser({ id: snapshot.id, ...snapshot.data() }));
        });
      } else dispatch(setCurrentUser(null));
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInAndUp />)}
        />
      </Switch>
    </div>
  );
}

export default App;
