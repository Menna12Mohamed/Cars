import React from "react";
import noFound from '../../image/error.png'
export default function NotFound() {
    return(
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <img src={noFound} alt="" />
      </div>
    )
}