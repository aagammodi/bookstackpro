import React, { useState, useEffect } from "react";
import axios from "axios";
export default function FormBook() {
  const [author, setAuthor] = useState("");
  const [bookName, setBookName] = useState("");
  const [copiesCount, setCopiesCount] = useState(0);
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [genreId, setGenreId] = useState(0);
  const [rackId, setRackId] = useState(0);

  const submit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post(`http://localhost:8080/api/books?genreId=${genreId}&rackId=${rackId}`, {
          author,
          bookName,
          copiesCount,
          description,
          imageURL
        })
        .then((res)=>{
            if(res.data==0)
                alert('Data updated');
            else
                alert("Rack Id or Genre Id doesn't exist!");
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
              src="https://imgs.search.brave.com/PIM1Ho_0NJS99BMTm-2NeOxELw_C-Abt0_vI_v0DbaY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NTY1MTMwODA1MTAt/N2JmM2E4NGI4MmY4/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRSOGZH/SnZiMnR6ZkdWdWZE/QjhmREI4Zkh3dw.jpeg"
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
                <label for="author" className="form-label">
                  Book Author
                </label>
                <input
                  type="text"
                  className="form-control text-light bg-dark feedback-placeholder"
                  id="author"
                  name="author"
                  onChange={(event) => setAuthor(event.target.value)}
                />
              </div>

              <div className="mb-3" style={{ marginTop: "2%" }}>
                <label for="bookname" className="form-label">
                  Book Name
                </label>
                <input
                  type="text"
                  className="form-control text-light bg-dark feedback-placeholder"
                  id="bookname"
                  name="bookname"
                  onChange={(event) => setBookName(event.target.value)}
                />
              </div>

              <div className="mb-3" style={{ marginTop: "2%" }}>
                <label for="copiesCount" className="form-label">
                  Copies
                </label>
                <input
                  type="number"
                  className="form-control text-light bg-dark feedback-placeholder"
                  id="copiesCount"
                  name="copiesCount"
                  onChange={(event) => setCopiesCount(event.target.value)}
                />
              </div>

              <div className="mb-3" style={{ marginTop: "2%" }}>
                <label for="description" className="form-label">
                  Book Description
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

              <div className="mb-3" style={{ marginTop: "2%" }}>
                <label for="genreId" className="form-label">
                  Genre ID
                </label>
                <input
                  type="text"
                  className="form-control text-light bg-dark feedback-placeholder"
                  id="genreId"
                  name="genreId"
                  onChange={(event) => setGenreId(event.target.value)}
                />
              </div>

              <div className="mb-3" style={{ marginTop: "2%" }}>
                <label for="rackId" className="form-label">
                  Rack ID
                </label>
                <input
                  type="text"
                  className="form-control text-light bg-dark feedback-placeholder"
                  id="rackId"
                  name="rackId"
                  onChange={(event) => setRackId(event.target.value)}
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
