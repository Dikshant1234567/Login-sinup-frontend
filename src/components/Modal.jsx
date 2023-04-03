import React, { useState } from "react";

function Modal({ openModal, backsinup }) {


  if (!openModal) {
    return (
      <div className="modal">
        <div className="modal-container">
          <i onClick={backsinup} class="fa-solid fa-x cross"></i>
          <p>Sucessfully done.</p>
          <p>Thank you.</p>
        </div>
      </div>
    );
  } else {
    null;
  }

  // if (modal) null;
}

export default Modal;
