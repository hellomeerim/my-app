import React from 'react';
import SideBar from '../SideBar/SideBar';
import styles from "../Content/Content.module.css"

const Content = () => {
    return (
        <>
        <header>
            
            <nav>
                <ul>
                    <li> <h1>Список конференц залов</h1> </li>
                    <li><img src="" alt="" /> </li>
                </ul>
            </nav>
        </header>
       
        <div className={styles.flexbox}>
           <div><SideBar/></div>
           <div>

           </div>
        </div>
        </>
    );
};

export default Content;