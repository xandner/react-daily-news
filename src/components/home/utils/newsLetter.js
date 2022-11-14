import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";

import { addNewsletter } from "../../../store/actions"
import { showToast } from "./toast";

const NewsLatter = () => {
  const userData = useSelector(state => state.user);
  const dispatch = useDispatch();
  const textInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    dispatch(addNewsletter({ email: value }))
  }

  useEffect(() => {
    if (userData) {
      if (userData.newsletter) {
        if (userData.newsletter === "added") {
          showToast('SUCCESS', "Thank you for subscribing !!!");
          textInput.current.value = "";
          // dispatch(clearNewsletter())
        } else {
          showToast('ERROR', "You are already on the DB");
          textInput.current.value = "";
          // dispatch(clearNewsletter())
        }
      }
    }
  }, [userData]);


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
