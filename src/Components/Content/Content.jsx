import React, { useEffect, useState }  from "react";
import SideBar from "../SideBar/SideBar";
import styles from "../Content/Content.module.css";
import search from "../../Media/Group.svg";
import check from "../..//Media/check-circle.svg";
import bootstrap from "bootstrap";

const Content = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        const url = "";
    
        fetch(url)
          .then((response) => response.json())
          .then((data) => setData(data));
      };
    
      useEffect(() => {
        getData();
      }, []);

  return (
    <>
      <div className={styles.navigation}>
        <h1>Список конференц залов</h1>
        <img src={search} />
        
      </div>

      <div className={styles.flexbox}>
        <div>
          <SideBar />
        </div>
        <div className={styles.content}>
          <div>
            <div>
              <div>
                {/* Button trigger modal */}
                <button
                  type="button"
                  className="btn btn-primary right"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Забронировать
                </button>
                {/* Modal */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Забронировать
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <p>ФИО</p>
                        <input type="text" />
                        <p>Отдел</p>
                        <input type="text" />
                        <div className="display">
                            <div>
                                <p>день</p>
                           <input type="date" className="date"/>  
                           <p>c</p>
                           <input type="text" placeholder="9:00" className="date"/> 
                           <p>до</p>
                           <input type="text" placeholder="9:00" className="date"/>  
                            </div>
                            
                                
                            
                           
                        </div>
                        
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Закрыть
                        </button>
                        <button type="button" className="btn btn-primary">
                          Подтвердить
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* dfd */}
            </div>
          </div>
          <h2>Описание</h2>
          <h3>Зарезервированное время</h3>
          {/* {data.map((item) => {
            return (
                
            ) */}
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
          <div className={styles.imgDisplay}>
            <img className={styles.img} src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
            <img className={styles.img} src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
            <img className={styles.img} src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
            <img className={styles.img} src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
          </div>
              </div>
              </div>
    </>
  );
};

export default Content;
