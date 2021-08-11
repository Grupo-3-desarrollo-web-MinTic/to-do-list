import React, { Component } from "react";
import "../assent/style/item.css";
import Api from "../api/index";

export default class History extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    Api.get("/test/historic")
      .then((res) => {
        this.setState({
          list: res.data.list,
        });
      })
      .catch((err) => {
        console.log("Algo salio mal, el error es: " + err);
      });
  }

  render() {
    const tasks = [];

    for (let task of this.state.list) {
      tasks.push(
        <li className="item" key={task}>
          <i className="fas fa-tasks"></i> {task}
        </li>
      );
    }

    return (
      <article className="dashboard">
        <h2>History</h2>
        <hr />
        <ul>{tasks}</ul>
      </article>
    );
  }
}
