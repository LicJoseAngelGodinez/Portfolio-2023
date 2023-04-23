import React from 'react';
import styles from './loader.module.css';
import { FaClock } from 'react-icons/fa';

function Loader() {

    const { fade } = styles;

  return (
    <>
        <FaClock className={fade}/>
        <span>Loading</span>
    </>
  )
}

export default Loader