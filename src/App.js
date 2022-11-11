import { useState } from 'react';
import './App.css';
import Signin from './components/Sign-in/Signin';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Navigation/Logo/Logo';
import Rank from './components/Rank/Rank';
import Link from './components/Link/Link';
import Signup from './components/Singup/Signup';


function App() {
  const [route, setRoute] = useState({
    signin:true,
    home:false,
    Signup:false
  });

  
  const [submittedLink, setSubmittedLink] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState("");

   const [User, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password:"",
    entries: 0,
    joined: ""
   });


   

   
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleBtnSubmits = () => {
     //console.log("click");
    setSubmittedLink(input);
    setSubmitted(true);
    if (input.length !== 0) {
      fetch("http://localhost:3004/link", {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: User.id,
        }),
      })
        .then((res) => res.json())
        .then((count) => {
          setUser(
            Object.assign(User, {
              entries: count,
            })
          );
        });
    }
  };

   const loadUser = (User) => {
    setUser({
      id: User.id,
      name: User.name,
      email: User.email,
      entries: User.entries,
      joined: User.joined
    })
   }




   //connecting to sever

   // useEffect(() => {
   //   fetch('http://localhost:3004/')
   //.then((res) => res.json())
   //. then(console.log)
   // });

  const handleSignin = () =>{
    setRoute({home:false, signin: true, Signup:false})
  };
  
  const handleHome = () =>{
    setRoute({home:true, signin: false, Signup:false})
  };

  const handleSignup = () =>{
    setRoute({home:false, signin: false, Signup:true})
  };

  return (
    <div className="App">
      {
        route.signin && (<Signin
           onHome={handleHome}
          loadUser={loadUser}
           onSignup={handleSignup}/>)
      }

      {
        route.Signup && (<Signup loadUser={loadUser} 
          onHome={handleHome} 
          onSignin={handleSignin}/>

        )
      }
      

      {
        route.home && <> 
        
        <Navigation onSignin={handleSignin}/>
        <Logo/>
        <Rank username={User.name} 
        entries={User.entries} />
        <Link
          handleBtnSubmit={handleBtnSubmits}
          handleInputChange={handleInputChange}
          submitted={submitted}
          submittedLink={submittedLink}/>
        </>
      }
     
     
      
    </div>
  );
}

export default App;
