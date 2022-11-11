import {useState} from 'react'
import "./Signup.css"

const Signup = ({onHome, onSignin, loadUser}) => {

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
   const [Password, setPassword] = useState("");
    


    const onNameChange = (e) => {
      setName(e.target.value);
      //console.log(Name)
     };

     const onEmailChange = (e) => {
      setEmail(e.target.value);
      //console.log(Email)
     };
  
     const onPasswordChange = (e) => {
      setPassword(e.target.value)
      //console.log(Password)
     }
  
     const onSubmitSignup = (e) => {
       e.preventDefault();
      fetch('http://localhost:3004/register',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
          name: Name,
          email: Email,
          password: Password,
        })
      })
      
      .then((res) => res.json())
      .then((user) => {
        if(user){
          loadUser(user)
           onHome();
        }
      });
     };
  

  return (
    <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"><main class="pa4 black-80">
    <form class="measure ">
      <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
        <legend class="f4 fw6 ph0 mh0">Sign up</legend>

        <div class="mt3">
          <label class="db fw6 lh-copy f6" htmlfor="email-address">User name</label>
          <input onChange={onNameChange}
           class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="user-name"
           name="user-name" 
            id="user-name"/>
        </div>

        <div class="mt3">
          <label class="db fw6 lh-copy f6" htmlfor="email-address">Email</label>
          <input onChange={onEmailChange}
           class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" 
          name="email-address"  
          id="email-address"/>
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
        <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
         type="submit" 
         value="Sign up"
          onClick={onSubmitSignup}/>
      </div>

      <div class="lh-copy mt3">
        <a href="#0" class="f6 link dim black db" onClick={onSignin}>Sign in</a>

      </div>
    </form>
  </main>
  </article>
  )
}

export default Signup