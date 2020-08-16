import React, { Component } from "react";

import "./App.css";

import Search from "./domain/Search/Search";
import UserInfo from "./domain/User/UserInfo/UserInfo";
import Action from "./domain/User/Action/Action";
import Repos from "./domain/User/Repos/Repos";
import Spinner from "./components/Spinner/Spinner";
import service from "./service/github-service";

class App extends Component {
  state = {
    userinfo: null,
    repos: [],
    starred: [],
    isFetching: false,
    error: null,
  };

  render() {
    return (
      <div>
        <Search
          disabled={this.state.isFetching}
          handleSearch={this.handleSearch}
        />

        {this.state.isFetching && <Spinner />}

        {!!this.state.userinfo && <UserInfo userinfo={this.state.userinfo} />}
        {!!this.state.userinfo && (
          <Action handleGetRepos={this.handleGetRepos} />
        )}

        {!!this.state.repos.length && (
          <Repos
            className="Repos"
            title="Repositórios"
            repos={this.state.repos}
          />
        )}

        {!!this.state.starred.length && (
          <Repos
            className="Starred"
            title="Favoritos"
            repos={this.state.starred}
          />
        )}
      </div>
    );
  }

  handleSearch = (e) => {
    const user = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      this.setState({ isFetching: true });

      service
        .get(`/users/${user}`)
        .then((response) => {
          this.setState({ userinfo: response.data });
        })
        .catch((error) => {
          this.setState({ error: error });
          console.log(error.response);
        });

      this.setState({ isFetching: false });
    }
  };

  handleGetRepos = (type) => {
    this.setState({ isFetching: true });

    service
      .get(`/users/${this.state.userinfo.login}/${type}`)
      .then((response) => {
        if (type === "repos") {
          this.setState({ repos: response.data });
        } else {
          this.setState({ starred: response.data });
        }
      })
      .catch((error) => {
        this.setState({ error: error });
        console.log(error.response);
      });

    this.setState({ isFetching: false });
  };
}

export default App;
