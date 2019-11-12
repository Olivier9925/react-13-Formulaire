import React, { Component } from "react";

class FormMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };

    const url = "https://post-a-form.herokuapp.com/api/movies/";

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Film ajouté avec l'ID ${res}!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("Erreur");
      });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    //console.log(JSON.stringify(this.state));
  }

  render() {
    const styleForm = {
      position: "absolute",
      border: "solid 2px #ABABAB",
      borderRadius: "10px",
      padding: "15px",
      width: "500px",
      margin: "20px"
    };
    const styleInput = {
      width: "300px",
      border: "1px dotted #ABABAB",
      borderRadius: "5px"
    };
    return (
      <div>
        <div style={styleForm}>
          <form onSubmit={this.submitForm}>
            <legend>Informations</legend>
            <br />
            <div>
              <label htmlFor="title">Title</label>
              <br />
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
                style={styleInput}
              />
            </div>

            <div>
              <label htmlFor="poster">Poster</label>
              <br />
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
                style={styleInput}
              />
            </div>
            <div>
              <label htmlFor="url">Comment</label>
              <br />
              <textarea
                rows="5"
                cols="20"
                type="text"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
                placeholder="Comment"
                style={styleInput}
              ></textarea>
            </div>

            <hr />
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    );
  }
}
export default FormMovies;
