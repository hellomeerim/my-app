import React from 'react';
import SideBar from '../SideBar/SideBar';
import styles from "../Content/Content.module.css"

const Content = () => {
    return (
        <>
        <h1>Список конференц залов</h1>
        <div className={styles.flexbox}>
           <div><SideBar/></div>
           <div>
               
           </div>
        </div>
        </>
    );
};

export default Content;