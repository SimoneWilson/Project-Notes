import React from "react";

function Footer() {
  return (
    <div>
      <p style={{ bottom: "0" }} className="footer">
        Copyright &copy; {new Date().getFullYear()} Simone McKee
      </p>
    </div>
  );
}

export default Footer;
