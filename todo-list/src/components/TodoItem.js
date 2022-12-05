import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default class TodoItem extends Component {
  render() {
    const { obj, handleDelete, handleEdit, editItem } = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between my-2">
        <h6 className="mt-2">{obj}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success btn" onClick={editItem}>
            <FontAwesomeIcon icon={solid("pen")} />
          </span>
          <span className="mx-2 text-danger btn" onClick={handleDelete}>
            <FontAwesomeIcon icon={solid("trash")} />
          </span>
        </div>
      </li>
    );
  }
}
