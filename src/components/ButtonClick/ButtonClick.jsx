import css from "./ButtonClick.module.css";
import { useState } from "react";
// function ButtonClick() {
//   // const handleClick = () => {
//   //   alert("I'm a button!");
//   // };
//   return (
//     <div className={css.container}>
//       <button onClick={() => alert("I'm a button!!!")} className={css.btn}>
//         First button
//       </button>
//       <button onClick={(evt) => console.log(evt)} className={css.btn}>
//         Second button
//       </button>
//     </div>
//   );
// }

// const CustomButton = ({ message, children }) => {
//   return (
//     <button className={css.btn} onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// };

// function ButtonClick() {
//   return (
//     <div className={css.container}>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </div>
//   );
// }

// function ButtonClick() {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <div className={css.container}>
//       <button className={css.btn} onClick={handleClick}>
//         Current: {clicks}
//       </button>
//     </div>
//   );
// }

// function ButtonClick() {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button className={css.btn} onClick={handleClick}>
//         Current: {clicks}
//       </button>
//       <button className={css.btn} onClick={handleToggle}>
//         {isOpen ? "Hide" : "Show"}
//       </button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// }
// ++++++++++++++++++++++++++
// function ButtonClick() {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <button className={css.btn} onClick={handleClick}>
//       Current: {clicks}
//     </button>
//   );
// }

// =----------------------
// const ClickCounter = ({ onUpdate, value, valueT }) => {
//   return (
//     <button className={css.btn} onClick={onUpdate}>
//       Current: {value} {valueT ? "true" : "false"}
//     </button>
//   );
// };
// function ButtonClick() {
//   const [clicks, setClicks] = useState(0);
//   const [toggle, setToggle] = useState(true);
//   const handleClick = () => {
//     setClicks(clicks + 1);
//     setToggle(!toggle);
//   };

//   return (
//     <>
//       <ClickCounter onUpdate={handleClick} value={clicks} valueT={toggle} />
//       <ClickCounter onUpdate={handleClick} value={clicks} valueT={toggle} />
//     </>
//   );
// }
// =----------------------update value

function ButtonClick() {
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>

      <button className={css.btn} onClick={updateX}>
        Update x
      </button>
      <button className={css.btn} onClick={updateY}>
        Update y
      </button>
    </div>
  );
}
export default ButtonClick;
