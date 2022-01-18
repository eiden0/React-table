import data from "./data.json"
import React from "react";
import styles from "./App.module.css";
import Table from "./components/Table";

const App = () => {
  return (
    <main className={styles.container}>
      <header>
        <p>React Table Component</p>
      </header>
      <div className={styles.wrapper}>
        <Table data={data} rowsPerPage={5} />
      </div>
    </main>
  );
};

export default App;
