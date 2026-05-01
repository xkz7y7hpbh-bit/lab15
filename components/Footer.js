import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} Иванов Иван Иванович</p>
    </footer>
);
}
export default Footer;