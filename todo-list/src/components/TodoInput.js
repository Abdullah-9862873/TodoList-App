import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white w-100 h-100 mx-2">
                <FontAwesomeIcon icon={solid("book")} />
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Add a Todo Item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            className={
              editItem
                ? "btn col-12 btn-success mt-3"
                : "btn col-12 btn-primary mt-3"
            }
          >
            {editItem ? "Edit Item" : "Add Item"}
            <span class="glyphicon glyphicon-pencil"></span>
          </button>
        </form>
      </div>
    );
  }
}
