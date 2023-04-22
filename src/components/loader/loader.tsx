import React from 'react';
import styles from './loader.module.css';

function Loader() {

    const {
        loaderBox,
        loadingWrapper,
        loader,
        loaderInner,
    } = styles;

  return (
    <div className={loaderBox}>
        <div className={loadingWrapper}>
            <div className={loader}>
                <div className={loaderInner}>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loader