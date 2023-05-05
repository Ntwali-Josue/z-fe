/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import key from 'uniqid';

function Path({ path }) {
  return (
    <div className="path-container text-blue-500 w-100 py-3">
      <div className="container text-blue-500">
        <div className="d-flex text-blue-500">
          {path.map(({ name, path }, i) => (
            <div key={key()}>
              <Link to={path} className="px-2 ml-2 text-blue-500">{name}</Link>
              {i === path.length - 1 && (
                <span><i className="bi bi-chevron-compact-right" /></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
Path.defaultProps = {
  path: [
    {
      name: 'Home',
      path: '/',
    },
  ],
};

export default Path;
