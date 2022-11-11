import {useState} from 'react'
import "./Signin.css"

const Signin = ({onHome, onSignup}) => {
  const [SigninEmail, setSigninEmail] = useState("")
  const [SigninPassword, setSigninPassword] = useState("");
 // const [errtxt, setterrText] = useState("");

   const onEmailChange = (e) => {
    setSigninEmail(e.target.value)
   };

  //  const onError  =() => {
  //   setterrText('Email or password not correct')
  //  };

   const onPasswordChange = (e) => {
    setSigninPassword(e.target.value)
   }

   const onSubmitSignin = (e) => {
     e.preventDefault();
    fetch('http://localhost:3004/signin',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
        email: SigninEmail,
        password:SigninPassword,
        
      })
    })
    .then((res) => res.json())
    .then((data) => {
      if(data === "success"){
         onHome();
      }
      // else{
      //   onError()
      // }
    })
   };


  return (
    <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"><main class="pa4 black-80">
    <form class="measure ">
      <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
        <legend class="f4 fw6 ph0 mh0">Sign In</legend>
        <div class="mt3">
          <label class="db fw6 lh-copy f6" htmlfor="email-address">Email</label>
          <input 
          onChange={onEmailChange}
          class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" 
          name="email-address"  id="email-address"/>
        </div>
        <div class="mv3">
          <label class="db fw6 lh-copy f6" htmlfor="password">Password</label>
          <input onChange={onPasswordChange} 
          class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
           type="password"
           name="password"  
          id="password"/>
        </div>
        <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
      </fieldset>
      <div class="">
        <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={onSubmitSignin}/>
      </div>
      <div class="lh-copy mt3">
        <a href="#0" class="f6 link dim black db" onClick={onSignup}>Sign up</a>
        <a href="#0" class="f6 link dim black db">Forgot your password?</a>
      </div>
    </form>
  </main>
  </article>
  )
}

export default Signin