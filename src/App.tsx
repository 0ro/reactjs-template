import React, { useEffect } from "react";

import logo from "assets/logo.svg";
import { useAppDispatch } from "hooks/redux";
import { appReady } from "store/app/slice";

import styles from "./App.module.scss";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(appReady());
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
