import React, { useState } from "react";
import { addRestaurant } from "./restaurantsSlice";
import { useDispatch } from "react-redux";

function RestaurantInput() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    location: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addRestaurant(formData));
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          onChange={handleChange}
          id="name"
          placeholder="restaurant name"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={handleChange}
          id="location"
          placeholder="location"
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RestaurantInput;
