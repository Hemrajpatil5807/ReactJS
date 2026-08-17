import './App.css'

function App() {
 
  return (
    // <>  </> this is a fragment, it is used to group multiple elements without adding extra nodes to the DOM
    <>  
      <section id="center">
        <div className="hero">
          <h1>Welcome to React Learning Journey</h1>
        </div>
        <div>
          <h1>Get started</h1>
          <p>
           Lear with ReactJS and ViteJS to build amazing web applications. 
          </p>
        </div>
      </section>

      <section id="bottom">
        <div className="bottom">
          <h1>About ReactJS</h1>
          <p>
            React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
          </p>
        </div>
      </section>
     
    </>
  )
}

export default App
