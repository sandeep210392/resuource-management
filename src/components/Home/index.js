// import React from "react";
import { Component } from "react";

import ResourceItem from "../ResourceItem";
import "./index.css";

class Home extends Component {
  state = {
    resourcesList: [],
    typeId: "",
  };

  componentDidMount() {
    this.getResourcesData();
  }

  getResourcesData = async () => {
    const options = {
      method: "GET",
    };
    const url =
      "https://media-content.ccbp.in/website/react-assignment/resources.json";
    const response = await fetch(url, options);
    const data = await response.json();
    const formattedData = data.map((eachResource) => ({
      title: eachResource.title,
      iconUrl: eachResource.icon_url,
      link: eachResource.link,
      description: eachResource.description,
      category: eachResource.category,
      tag: eachResource.tag,
      id: eachResource.id,
    }));
    this.setState({ resourcesList: formattedData });
    // console.log(resourcesList);
  };

  onClickResources = () => {
    this.setState({ typeId: "" });
  };

  onClickRequest = () => {
    this.setState({ typeId: "request" });
    // console.log(typeId);
  };

  onClickUser = () => {
    this.setState({ typeId: "user" });
    // console.log(typeId);
  };

  render() {
    const { resourcesList, typeId } = this.state;
    const searchResults = resourcesList;
    const filteredRequestResourceList = resourcesList.filter((eachResource) => {
      return eachResource.tag === "request";
    });

    const filteredUserResourceList = resourcesList.filter((eachResource) => {
      return eachResource.tag === "user";
    });
    // searchResults.forEach((resource) => console.log(resource));
    console.log(filteredRequestResourceList);
    console.log(filteredUserResourceList);
    return (
      <div>
        <div className="tabs-card">
          <button className="tabBtn" onClick={this.onClickResources}>
            Resources
          </button>
          <button className="tabBtn" onClick={this.onClickRequest}>
            Requests
          </button>
          <button className="tabBtn" onClick={this.onClickUser}>
            Users
          </button>
        </div>
        <div>
          {typeId === "" ? (
            <ul className="resource-list-container">
              {searchResults.map((eachResource) => (
                <ResourceItem
                  resourceDetails={eachResource}
                  key={eachResource.id}
                />
              ))}
            </ul>
          ) : typeId === "request" ? (
            <ul className="resource-list-container">
              {filteredRequestResourceList.map((eachResource) => (
                <ResourceItem
                  resourceDetails={eachResource}
                  key={eachResource.id}
                />
              ))}
            </ul>
          ) : (
            <ul className="resource-list-container">
              {filteredUserResourceList.map((eachResource) => (
                <ResourceItem
                  resourceDetails={eachResource}
                  key={eachResource.id}
                />
              ))}
            </ul>
          )}
        </div>
        <input type="search" placeholder="Search" />
      </div>
    );
  }
}
export default Home;
