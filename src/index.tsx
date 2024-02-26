import React from "react";
import { createRoot } from "react-dom/client";

import styles from "./index.module.css";

const container = document.getElementById("app-root")!;
const root = createRoot(container);
root.render(<h1 className={styles.testName}>Hello React!</h1>);
