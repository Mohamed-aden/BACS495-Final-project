import React from "react";

export default function Header() {
  return (
    <header className="header">
      <a href="#">
        <h1>LOGO</h1>
      </a>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li className="main-nav-link">
            <a href="#">
              <h1>Section 1</h1>
            </a>
          </li>
          <li className="main-nav-link">
            <a href="#">
              <h1>Section 1</h1>
            </a>
          </li>
          <li className="main-nav-link">
            <a href="#">
              <h1>Section 1</h1>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
