import React from "react";
import "./Link.css";

const Link = ({
  handleBtnSubmit,
  handleInputChange,
  submitted,
  submittedLink
 }) => {

  return (
    <div >
        <p className="f3" style={{color: 'blue'}}>lets see how many links / images you can submit</p>
        <div className='form w-70 f4 center pa4 br3 shadow-5'>
            <input className="w-70 f4 center pa2"
             type="text" 
             placeholder="enter your link.."
             onChange={handleInputChange}/>
            <button className='w-30 bg-light-purple link grow white pointer ph4 pv2 dib'
             onClick={handleBtnSubmit}>Submit</button>
        </div>
        {submitted && (
          <p className="f3 white">This is your link: {submittedLink}</p>
        )}
    </div>
  )
}

export default Link

