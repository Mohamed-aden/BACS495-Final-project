import React from "react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <Footer>
      <p>Copyright &copy; {currentYear} </p>
    </Footer>
  );
}
