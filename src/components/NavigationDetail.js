import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
 
function NavigationDetail() {
  return (
    <nav className="navigation">
      <ul>
      <li><Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}><FiHome /> Home</Link></li>
      </ul>
    </nav>
  );
}
 
export default NavigationDetail;