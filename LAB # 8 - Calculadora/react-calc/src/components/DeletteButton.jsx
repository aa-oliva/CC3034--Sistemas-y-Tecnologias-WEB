import React from "react";
import "./DeletteButton.css";

export const DeleteButton = props => (
  <div className="delete-button" onClick={props.handleDelete}>
    {props.children}
  </div>
);
