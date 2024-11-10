


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
      <Button text="Dark" className="black-btn"/>
      <Button text="Primary" className="blue-btn"></Button>
      <Button text="secondary" className="gray-btn"></Button>
      <Button text="Danger" className="red-btn"></Button>
      <Button text="Warning" className="yellow-btn"></Button>
      <Button text="Info" className="aqua-btn"></Button>
      <Button text="Light" className="white-btn"></Button>
      <Button text="Link" className="transparent-btn"></Button>

    </div>
  )
}

export default App


// component - Button  - (JS, CSS, JSX)
// props
const Button = (props) => {
  return <button className={props.className}> {props.text}  </button>
}
