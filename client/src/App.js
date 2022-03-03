import logo from './logo.svg';
import './App.css';
import { SignUp } from './SignUp';
import { useState } from 'react';
import { SignIn } from './SignIn';
import { Contact } from './Contacts';

function App() {
  const [cur, setCurr] = useState("signIn");

  if (cur === "signIn") return <div>
    Don't have an account? <button onClick={() => setCurr("signUp")}>Sign Up</button>
    <SignIn setCurr={setCurr} />
    </div>

  if (cur === "signUp") return <div>
    Already have an account? <button onClick={() => setCurr("signIn")}>Sign In</button>
    <SignUp setCurr={setCurr}/>
    </div>

  if (cur === "contacts") return <Contact/>
  // return (
  //   <div></div>
  // );
}

export default App;
