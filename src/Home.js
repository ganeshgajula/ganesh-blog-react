import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome Party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

// const Home = () => {
//   const [name, setName] = useState("Ganesh");
//   const [age, setAge] = useState(25);

//   const clickHandler = () => {
//     setName("Tarun");
//     setAge(30);
//   };

//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <p>
//         {name} is {age} years old
//       </p>

//       <button onClick={clickHandler}>Click Me</button>
//     </div>
//   );
// };
