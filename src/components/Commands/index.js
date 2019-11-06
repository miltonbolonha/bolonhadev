import React from 'react'
import { Link } from "gatsby"

const Commands = () => (
  <ul className="commands-wrapper">
    <li className="item">
      <Link to="/" activeClassName="active">master</Link>
    </li>
    <li className="item">
      <Link to="/info" activeClassName="active">info</Link>
    </li>
    <li className="item">
      <Link to="/contact" activeClassName="active">contact</Link>
    </li>
    <li className="item">
      <Link to="/portfolio" activeClassName="active">portfolio</Link>
    </li>
    <li className="item">
      <Link to="/clean" activeClassName="active">clean</Link>
    </li>
    <li className="item">
      <Link to="/list" activeClassName="active">list</Link>
    </li>
    <li className="item">
      <Link to="/blog" activeClassName="active">blog</Link>
    </li>
    <li className="item">
      <Link to="/last-post" activeClassName="active">last</Link>
    </li>
    <li className="item">
      <Link to="/best" activeClassName="active">best</Link>
    </li>
    <li className="item">
      <Link to="/twitter" activeClassName="active">twitter</Link>
    </li>
  </ul>
)

export default Commands