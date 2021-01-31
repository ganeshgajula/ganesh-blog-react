import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Ganesh");
  const [age, setAge] = useState(25);

  const clickHandler = () => {
    setName("Tarun");
    setAge(30);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>

      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
};

export default Home;
