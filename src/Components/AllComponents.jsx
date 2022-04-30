import React from "react";
import styles from "../Components/Content/Content.module.css";
import bootstrap from "bootstrap";
import Content from "./Content/Content";
import search from "../Media/Group.svg";

const AllComponents = () => {
  return (
    <div>
      <div className={styles.navigation}>
        <h1>Список конференц залов</h1>
        <div>
          <button
            type="button"
            className="btn btn-primary transparent"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            <img src={search} />
          </button>
        
          <div
            className="modal fade"
            id="exampleModal1"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header people">
                    <div className="people">
<h5 className="modal-title" id="exampleModalLabel">
                  Кол-во людей
                  </h5>
                  <input type="text" placeholder="10"/>
                    </div>
                  
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body checkbox">
                    <div className="filter">
                       <input type="checkbox" />
                    <p>Проектор</p> 
                    </div>
                    <div className="filter">
                  <input type="checkbox" />
                  <p>Доска маркерная</p>
                  </div>
                  <div className="filter">
                  <input type="checkbox" />
                   <p>Кондиционер</p>
                  </div>
                
                
                 
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
};

export default AllComponents;
