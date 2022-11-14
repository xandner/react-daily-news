import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";

import {addNewsletter} from "../../../store/actions"

const NewsLatter = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const textInput = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    dispatch(addNewsletter({email:value})) 
  };

  return (
    <>
      <div className="newsletter_container">
        <h1> Join News</h1>
        <div className="form">
          <Form onSubmit={handleSubmit} className="mt-4">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                ref={textInput}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add me
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default NewsLatter;
