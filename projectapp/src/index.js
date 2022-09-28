import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";
import { createFirestoreInstance ,getFirestore} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebaseConfig from "./config/fbConfig";
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

console.log("isLoaded " ,isLoaded);
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument({ getFirebase,getFirestore })))
);
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableLogging: true,
  attachAuthIsReady: true,
}; 
// react-redux-firebase config
// userProfile: "users",
// useFirestoreForProfile: true,
// attachAuthIsReady: true,

const rrfProps = {
  firebase: firebaseConfig,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function AuthIsLoaded({ children }) {

  const auth = useSelector(state => state.firebase.auth)
  console.log("auth loaded..aaaaaaaaaaaaaaaaaaaaa ",auth);
  if (isLoaded(auth)) return children
  
}
//https://codesandbox.io/s/blissful-lehmann-r610w?file=/src/index.js:0-758

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
;
