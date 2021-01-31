const Home = () => {
  const clickHandler = (e) => {
    console.log("clicked", e.target);
  };

  const clickAgainHandler = (name, e) => {
    console.log(name, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={clickHandler}>Click Me</button>
      <button
        onClick={(e) => {
          clickAgainHandler("Ganesh", e);
        }}
      >
        Click me again
      </button>
    </div>
  );
};

export default Home;
