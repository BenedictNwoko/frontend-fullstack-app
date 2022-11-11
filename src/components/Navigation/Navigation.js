
const Navigation = ({onSignin}) => {
  return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className="f3 pa3 dim black pointer link underline"onClick={onSignin}>Sign out</p>
    </nav>
  )
}

export default Navigation