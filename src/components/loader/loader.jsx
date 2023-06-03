import React from 'react';
import css from './loader.module.css';

export const Loader = () => {
  return (
    <div className={css.wrap}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
