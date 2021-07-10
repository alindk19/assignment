import React from "react";
import "./modal.css";
const Modal = ({ setOpen }) => {
  return (
    <React.Fragment>
      <div className="modal-box">
        <div className="modal-title">
          <p className="title">Applicants for this job </p>
          <span className="modal-close" onClick={() => setOpen(false)}></span>
        </div>
        <span className="line"></span>
        <p className="modal-body-title"> 0 applications</p>
        <div className="modal-body">
          <div className="modal-body-sub">
            <div className="modal-body-sub-content">
              {" "}
              <p> No applications available</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
