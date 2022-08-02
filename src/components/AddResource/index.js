import React from "react";
import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./index.css";
class AddResource extends Component {
  state = {
    name: "",
    link: "",
    description: "",
    imageUrl: "",
  };

  onChangeDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  onChangeLink = (event) => {
    this.setState({
      link: event.target.value,
    });
  };

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        imageUrl: URL.createObjectURL(img),
      });
    }
  };

  notify = (event) => {
    return (
      event.preventDefault(),
      fetch(
        "https://media-content.ccbp.in/website/react-assignment/add_resource.json",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.state.name,
            link: this.state.link,
            description: this.state.description,
            imageUrl: this.state.imageUrl,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) =>
          toast.success(" success", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        )
        .catch((err) =>
          toast.error("Failed", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        )
    );
  };

  render() {
    return (
      <div className="add-resource-container">
        <div className="form-container">
          <h1>Add Resource</h1>
          <label>Name</label>
          <input type="text" onChange={this.onChangeName} />
          <label>Link</label>
          <input type="text" onChange={this.onChangeLink} />
          <label>Description</label>
          <input type="text" onChange={this.onChangeDescription} />
          <img src={this.state.imageUrl} alt="image_url" />
          <p>Select Image</p>
          <input type="file" name="myImage" onChange={this.onImageChange} />
          <div>
            <button onClick={this.notify}>Create</button>
            <ToastContainer
              //   position="bottom-center"
              //   height={20}
              //   autoClose={5000}
              //   hideProgressBar={false}
              //   newestOnTop={false}
              //   closeOnClick
              //   rtl={false}
              //   pauseOnFocusLoss
              //   draggable
              //   pauseOnHover
              style={{
                width: "500px",
                height: "20px",
                display: "flex",
                flexDirection: "row",
              }}
            />
          </div>
        </div>
        <img
          className="main-image"
          src="https://res.cloudinary.com/sandeep321/image/upload/v1659355185/image_9_g6jmu3.jpg"
          alt="wallpaper"
        />
      </div>
    );
  }
}

export default AddResource;
