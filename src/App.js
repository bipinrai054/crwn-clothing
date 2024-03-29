import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/sign-in-sign-up/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase';
import './App.css';
import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelector';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
