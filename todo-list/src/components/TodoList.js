import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, editItem } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-center">Todo List</h3>
        {items.map((item) => {
          return (
            <TodoItem
              key={item}
              obj={item.title}
              handleDelete={() => {
                handleDelete(item.id);
              }}
              editItem={() => {
                editItem(item.id);
              }}
            />
          );
        })}
        <button
          type="button"
          className="btn btn-danger col-12 text-capitalize mt-5"
          onClick={clearList}
        >
          clear List
        </button>
      </ul>
    );
  }
}
