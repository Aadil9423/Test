import React, { Component } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../tast.css";
const FormOne = ({ setFname, setLname }) => {
  const [data, setdata] = useState();

  const handeling = () => {
    setdata();
  };
  const handleFname = (e) => {
    setFname(e.target.value);
  };
  const handleLname = (e) => {
    setLname(e.target.value);
  };
  //   const handleNextBtn = () => {
  //     // setIsLogin(true);
  //     isLogged.current = true;
  //     console.log(isLogged);
  //   };
  return (
    <div className="loginbox">
      <Form>
        <Form.Group className="log-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleFname}
            type="Text"
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group className="log-3" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            onChange={handleLname}
            type="text"
            placeholder="Enter Last Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      </Form>
    </div>
  );
};

export default FormOne;
