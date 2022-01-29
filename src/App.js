import { useState } from 'react';
import { createUserWithEmailAndPassword,  onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';
import './App.css';

function App() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const login = async () => {

    try {

    const user = await signInWithEmailAndPassword(
      auth, 
      loginEmail, 
      loginPassword
    );

    console.log(user);

    } catch (error) {

      console.log(error.message);

    }
    
  }

  const signup = async () => {

    try {

    const user = await createUserWithEmailAndPassword(
      auth, 
      signupEmail, 
      signupPassword
    );

    console.log(user);

    } catch (error) {

      console.log(error.message);

    }
  };

  const logout = async () => {

    await signOut(auth);
    
  }


  return (
   <div className="App">
      <div className="main">
        <h1>Welcome to My Fake Website</h1>
        <div className="login">
          <h3>Login</h3>
          <input type="e-mail" placeholder="E-mail" onChange={(event) => {setLoginEmail(event.target.value);}} />
          <input type="password" placeholder="Password" onChange={(event) => {setLoginPassword(event.target.value);}} />
          <button onClick={login}>Login</button>
        </div>
        <div className="signup">
          <h3>Don't have an account? Sign up!</h3>
          <input type="e-mail" placeholder="E-mail" onChange={(event) => {setSignupEmail(event.target.value);}} />
          <input type="password" placeholder="Password" onChange={(event) => {setSignupPassword(event.target.value);}} />
          <button onClick={signup}>Signup</button>
        </div>
        <div className="current-user">
          <h4>Current user: {user?.email} </h4>
          <button onClick={logout}>Logout</button>
        </div>
    </div>
   </div>
  );
}

export default App;
