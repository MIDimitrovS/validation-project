import React, { useState } from "react";
import Form from "./components/Form";
import checkString from "./checkString";

function App() {
  const [properties, setProperties] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = checkString(Number(properties.length), properties.string);

    result ? alert("Correct") : alert("Incorrect");
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      properties={properties}
      setProperties={setProperties}
    />
  );
}

export default App;
