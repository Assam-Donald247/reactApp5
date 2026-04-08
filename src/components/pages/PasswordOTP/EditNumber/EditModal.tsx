import "./editmodal.css";

import X from "./../../../img/X.svg";
import React from "react";

type propTypes = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const EditModal: React.FC<propTypes> = ({ open, onClose, children }) => {
  return (
    <div className={`${open ? "modalOpen" : "modalClose"}`}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <button className="closeButton" onClick={onClose}>
          <img src={X} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default EditModal;
