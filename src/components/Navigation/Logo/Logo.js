
import reactimg from '../../../reactimg.jpeg';


const Logo = () => {
  return (
    <div  style={{display: 'flex', justifyContent: 'flex-start'}}>
        <img className="Logo-div ma3 mt0 " style={{width: '80px', height:'80px'}} src={reactimg} alt="logo"></img>
    </div>

  )
}

export default Logo