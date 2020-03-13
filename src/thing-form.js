import React from "react";
import ReactDOM from "react-dom";
const { useState, useEffect } = React;

const ThingForm = ({ createThing }) => {
  const [name, setName] = useState("");
  const onSubmit = ev => {
    ev.preventDefault();
    createThing({ name });
  };
  return (
    <section>
      <form onSubmit={onSubmit}>
        <h2>Create Thing</h2>
        <input value={name} onChange={ev => setName(ev.target.value)} />
        <button>Create</button>
      </form>
    </section>
  );
};

export default ThingForm;
