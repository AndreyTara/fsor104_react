// import Message from "./Message/Message";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// import Product from "./Product/Product";
// import { Alert } from "./Alert/Alert";
import { Button } from "./Button/Button";
// import "./index.css";
const App = () => {
  // const isOnline = true;
  // const age = 19;
  // const fruits = ["banana", "apple", "lemon", "mango"];
  // const people = [
  //   {
  //     id: 0,
  //     name: "Creola Katherine Johnson",
  //     profession: "mathematician",
  //   },
  //   {
  //     id: 1,
  //     name: "Mario José Molina-Pasquel Henríquez",
  //     profession: "chemist",
  //   },
  //   {
  //     id: 2,
  //     name: "Mohammad Abdus Salam",
  //     profession: "physicist",
  //   },
  //   {
  //     id: 3,
  //     name: "Percy Lavon Julian",
  //     profession: "chemist",
  //   },
  //   {
  //     id: 4,
  //     name: "Subrahmanyan Chandrasekhar",
  //     profession: "astrophysicist",
  //   },
  // ];
  // const chemists = people.filter((person) => person.profession === "chemist");

  return (
    <>
      <Header />
      {/* <Message className="title" author="tron" message="Go, go!" /> */}
      {/* <Message author="kate" message="No, no!" /> */}
      {/* <Message message="Привіт!" /> */}
      {/* <Message author="Petro" /> */}
      {/* { isOnline && <h1>Welcome back</h1>} */}
      {/* {isOnline && <h1>Please login</h1>} */}
      {/* {age > 18 ? <h2>So old!!!</h2> : <h2> You can to do!!</h2>} */}
      {/* <ul>
        {fruits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul> */}
      {/* <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      /> */}
      {/* <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product /> */}
      {/* <ul>
        {chemists.map(({ id, name, profession }) => (
          <li key={id}>
            name:{name} - profession:{profession}
          </li>
        ))}
      </ul> */}
      {/* <p
        style={{
          margin: "8px",
          padding: "12px 16px",
          borderRadius: 4,
          backgroundColor: "gray",
          color: "white",
        }}
      >
        Please update your email!
      </p> */}
      {/* <>
        <Alert variant="info" elevated="true">
          Would you like to browse our recommended products?
        </Alert>
        <Alert variant="error">
          There was an error during your last transaction
        </Alert>
        <Alert variant="success">
          Payment received, thank you for your purchase
        </Alert>
        <Alert variant="warning">
          Please update your profile contact information
        </Alert>
      </> */}
      {/* <>
        <Button variant="info" outlined="true">
          Would you like to browse our recommended products?
        </Button>
        <Button variant="error" elevated="true">
          There was an error during your last transaction
        </Button>
        <Button variant="success">
          Payment received, thank you for your purchase
        </Button>
        <Button variant="warning" outlined="true">
          Please update your profile contact information
        </Button>
      </> */}
      <Footer />
    </>
  );
};

export default App;
