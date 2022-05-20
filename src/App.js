// import logo from "./logo.svg";
import "./App.css";
import FormOne from "./Components/Form";
import Redio from "./Components/Redio";
import { useState, useRef } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [visited, setVisited] = useState(false);
  const isLogged = useRef(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const handleNextBtn = () => {
    if (fname !== "" && lname !== "") {
      setIsLogin(true);
      setVisited(true);
      // isLogged.current = true;
      // console.log(isLogged);
    }
  };
  console.log(isLogin);
  console.log(fname, lname);
  return (
    <div className="body">
      <div className="App">
       
        {visited === false && (
          <div className>
            <FormOne setFname={setFname} setLname={setLname} />
            <Button
              className="log"
              variant="primary"
              type="submit"
              onClick={handleNextBtn}
            >
              Next
            </Button>
          </div>
        )}
        {isLogin === true && <Redio isLogged={isLogged} />}
      </div>
    </div>
  );
}

export default App;
