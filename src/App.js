import "./App.css";

function App() {
  const title = "Welcome to my new blog";
  const likes = 50;
  const personInfo = ["Ganesh", "20"];
  // const person = { name: "Ganesh", age: "22" };
  const link = "https://google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{personInfo}</p>
        {/* <p>{person}</p> */}

        {/* We can also write any dynamic values inside the curly braces */}
        <p>{10}</p>
        <p>{"hello, ninjas"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        {/* Now another thing which we can do inside the JSX is use this dynamic values as attribute values in element text */}
        {/* For eg. we can have an anchor tag and this has href and normally it has a string value of any website, but in JSX this can be dynamic */}

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
