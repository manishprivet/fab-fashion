import React, { useEffect } from 'react';
import Homepage from './pages/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndUp from './pages/SignInAndUp/SignInAndUp';
import { auth, createUserProfileDocument } from './utils/firebase';
import { setCurrentUser } from './redux/user/userActions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

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
        <Route path="/signin" component={SignInAndUp} />
      </Switch>
    </div>
  );
}

export default App;
