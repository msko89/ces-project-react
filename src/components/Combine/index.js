import React from 'react';
import { Link } from 'react-router-dom';
import './Combine.css';

export default function Combine() {
  return (
    <>
      <header>
        <h2>
          <span>MS Ko</span>
        </h2>
        <p>Seoul, Korea</p>
      </header>

      <section className="contentsWrap">
        <Link to="/detail">
          <button type="button" className="btn_detail">
            Detail view
          </button>
        </Link>
        <Link to="/water">
          <button type="button" className="water">
            <h3>Water Index</h3>
            <p className="stat">
              <strong>GOOD</strong>
            </p>
          </button>
        </Link>
        <Link to="/bidet">
          <button type="button" className="bidet">
            <h3>Health Index</h3>
            <p className="stat">
              <strong>Bad</strong>
            </p>
          </button>
        </Link>
        <Link to="/matrix">
          <button type="button" className="matrix">
            <h3>Sleep Index</h3>
            <p className="stat">
              <strong>Normal</strong>
            </p>
          </button>
        </Link>
      </section>

      <footer>
        <button type="button" className="fa on"></button>
        <button type="button" className="grandma"></button>
        <button type="button" className="mom"></button>
        <button type="button" className="baby"></button>
      </footer>
    </>
  );
}
