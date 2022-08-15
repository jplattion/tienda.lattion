import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Spinner = () => {
  return (
    <>
      <PacmanLoader color="#008000" size={50} style={styles.spinner} />
    </>
  );
};

export default Spinner;

const styles = {
  h2: {
    padding: "2rem 0 1rem 0",
    textTransform: "uppercase",
    justifyContent: "center",
  },
  spinner: {
    position: "fixed",
    top: "50%",
    left: "50%",
  },
};
