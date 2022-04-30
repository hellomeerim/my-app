import React from "react";
import SideBar from "../SideBar/SideBar";
import styles from "../Content/Content.module.css";
import search from "../../Media/Group.svg";
import check from "../..//Media/check-circle.svg"
import bootstrap from "bootstrap";

const Content = () => {
 const order = () =>{
        <div className={styles.order}>
           <p>fddfvsdf</p>
        </div>

    } 
    
    return (

    
    <>
      <div className={styles.navigation}>
        <h1>Список конференц залов</h1>
        <img src={search} alt="" />
      </div>

      <div className={styles.flexbox}>
        <div>
          <SideBar />
        </div>
        <div className={styles.content}>
          <button onClick={order}>Забронировать</button>
          <h2>Описание</h2>
          <h3>Зарезервированное время</h3>
{/* shedule */}
          <div className={styles.shedule}>
            <p>29 апр 16:00-18:00</p>
            <h4>Отдел разработок</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. 
       </p>
{/* check */}
            <div className={styles.check}>
                <img src={check} alt="" />
                <h4>Lorem ipsum dolor sit amet</h4>
            </div>
             
             <div>
                 <img src="" alt="" />
             </div>
            
           
        
        </div>
      </div>
    </>
  );
};

export default Content;
