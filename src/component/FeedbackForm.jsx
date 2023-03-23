import React, { useState, useContext, useEffect, useRef } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

import emailjs from "@emailjs/browser";

function FeedbackForm() {
  const form = useRef();

  const { addFeedback, feedbackEdit, updateFeedback, reset, setReset } =
    useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState();

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  useEffect(() => {
    if (reset) {
      setText("");
      setBtnDisabled(true);
    }
  }, [reset]);

  const handleTextChange = (e) => {
    const trimmedText = text.trim();

    if (trimmedText === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (trimmedText.length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setReset(true);
    }
    sendEmail(e);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lvsj6re",
        "template_s4yk46c",
        form.current,
        "g47v98e3DFN2X_5hR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Card>
      <form ref={form} onSubmit={handleSubmit}>
        <h2>Please enter your valuable feedback and review</h2>
        <RatingSelect reset={reset} select={(rating) => setRating(rating)} />
        <div className="all-input"></div>
        <div className="input1">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
        </div>
        <div className="input2">
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="message"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
