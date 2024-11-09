


// component - App  - (JS, CSS, JSX)
// JSX elements
function App() {

  const number = 33

  const text = <h1>Hello  {number} </h1>

  return (
    <div style={{
      // backgroundColor: 'green'
    }}>
      {text} WORLD

      <Button text="OK" className="green-btn"/>
      <Button text="SEND" className="black-btn"/>

      <Button text="DELETE" className="red-btn"></Button>

    </div>
  )
}

export default App


// component - Button  - (JS, CSS, JSX)
// props
const Button = (props) => {
  return <button className={props.className}> {props.text}  </button>
}
