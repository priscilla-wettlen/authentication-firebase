import './App.css';

function App() {
  return (
   <div className="App">
      <div className="main">
        <h1>Welcome to My Fake Website</h1>
        <div className="login">
          <h3>Login</h3>
          <input type="e-mail" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </div>
        <div className="signup">
          <h3>Don't have an account? Sign up!</h3>
          <input type="e-mail" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <button>Signup</button>
        </div>
        <div className="current-user">
          <h4>Current user:</h4>
          <button>Logout</button>
        </div>
    </div>
   </div>
  );
}

export default App;
