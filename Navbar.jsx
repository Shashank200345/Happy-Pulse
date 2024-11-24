import React from "react";
import styles from "./Navbar.module.css"; // Correct relative path

const Navbar = () => {
  return (
    <nav>
      <li className={styles.div}>
        <ul>Disease Prevention</ul>
        <ul>Symptum detection</ul>
        <ul>Consult Doctors</ul>
        <ul>Personalized Treatment</ul>
        <div className={styles.navpart2}>
          <button>
            Sign In
            <div class="arrow-wrapper">
              <div class="arrow"></div>
            </div>
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="none"
          >
            <path
              d="M17.5 17.5L22 22"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </li>
    </nav>
  );
};

export default Navbar;
