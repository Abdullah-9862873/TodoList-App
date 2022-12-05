import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.css";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.item !== "") {
      const newItem = {
        id: this.state.id,
        title: this.state.item,
      };

      const updateItems = [...this.state.items, newItem];

      this.setState({
        items: updateItems,
        item: "",
        id: uuidv4(),
        editItem: false,
      });
    }
  };
  clearList = () => {
    this.setState({
      items: [],
      item: "",
    });
  };
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      items: filteredItems,
    });
  };
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => {
      return item.id !== id;
    });

    const itemToEdit = this.state.items.find((item) => {
      return item.id == id;
    });

    this.setState({
      items: filteredItems,
      item: itemToEdit.title,
      editItem: true,
      id: id,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto mt-4">
            <h3 className="text-capitalize text-center">todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              editItem={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
