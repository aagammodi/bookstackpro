import React, { useState } from "react";
import axios from "axios";

export default function FormGenre() {
  const [genreName, setGenreName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post(`http://localhost:8080/api/genres`, {
          genreName,
          description,
          imageURL
        })
        .then((res)=>{
            if(res.data==0)
                alert('Data updated');
            else
                alert("Error creating new Genre!");
        });
    } catch (error) {
      console.log("Error occured: ", error);
    }
  };

  return (
    <div>
      <div className="container bg-light" style={{ marginTop: "5%" }}>
        <div className="row text-dark p-3">
          <div className="col-lg-6 col-12">
            <img
              src="https://imgs.search.brave.com/DAA1Tq9BsJ6tbWiCfh1bgpb_6bj8OtA6LIzi0JFuQ2g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzkxLzY0Lzc5/LzM2MF9GXzU5MTY0/Nzk0MF95ZTliYVFV/TTF4QUpRaHdDOHoy/MU14OEFJZXgzb0wy/Wi5qcGc"
              alt="Feedback"
              className="img-fluid"
            ></img>
          </div>
          <div className="col-lg-6 col-12">
            <form
              action="POST"
              style={{ borderRadius: "8px" }}
              className="px-3 py-3 bg-color-feedbackform"
            >
              <div className="mb-3" style={{ marginTop: "2%" }}>
                <label for="genrename" className="form-label">
                  Genre Name
                </label>
                <input
                  type="text"
                  className="form-control text-light bg-dark feedback-placeholder"
                  id="genrename"
                  name="genrename"
                  onChange={(event) => setGenreName(event.target.value)}
                />
              </div>

              <div className="mb-3" style={{ marginTop: "2%" }}>
                <label for="description" className="form-label">
                  Genre Description
                </label>
                <textarea
                  type="text"
                  className="form-control text-light bg-dark feedback-placeholder"
                  id="description"
                  name="description"
                  onChange={(event) => setDescription(event.target.value)}
                  rows={4}
                  cols={10}
                />
              </div>

              <div className="mb-3" style={{ marginTop: "2%" }}>
                <label for="imageurl" className="form-label">
                  Image
                </label>
                <input
                  type="text"
                  className="form-control text-light bg-dark feedback-placeholder"
                  id="imageurl"
                  name="imageurl"
                  onChange={(event) => setImageURL(event.target.value)}
                />
              </div>

              <div style={{ marginTop: "5%", marginBottom: "5%" }}>
                <button
                  type="submit"
                  onClick={submit}
                  className="btn-feedback-form bg-success"
                  style={{
                    borderRadius: "5px",
                    paddingLeft: "3%",
                    paddingRight: "3%",
                    paddingTop: "2%",
                    paddingBottom: "2%",
                    color: "white",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
