import React from "react";
import styles from "./index.module.css";
import Input from "../Input";
import Button from "../Button";

const Form = ({ handleSubmit, properties, setProperties }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.title}>Check string</p>
      <Input
        id="string"
        type="text"
        name="string"
        placeHolder="String"
        label="String"
        value={properties?.name}
        onChange={(e) =>
          setProperties({ ...properties, string: e.target.value })
        }
      />
      <Input
        id="length"
        type="number"
        name="plan"
        placeHolder="Set String Length"
        label="Length"
        min={0}
        value={properties?.plan}
        onChange={(e) =>
          setProperties({ ...properties, length: e.target.value })
        }
      />
      <Button title="Check" type="submit" />
    </form>
  );
};

export default Form;
