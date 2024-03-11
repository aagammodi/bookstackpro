import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "./Navbar";

const RackDetail = () => {
  const { rackId } = useParams();
  const [bookData, setBookData] = useState([]);
  const [dataloaded, setDataLoaded] = useState(false);

  const fetchData = async () => {
    try {
      let response = await axios.get(
        `http://localhost:8080/api/racks/${rackId}`
      );
      setBookData(response.data);
      setDataLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          {dataloaded &&
            bookData.map((book, index) => (
              <div key={index} className="col-lg-4 col-12 col-md-6 my-4 ">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={book.imageURL}
                    class="card-img-top"
                    alt="..."
                    height="300vh"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{book.bookName}</h5>
                    <h6 class="card-text">
                      Author: <span>{book.author}</span>
                    </h6>
                    <p class="card-text">{book.description}</p>
                    <p class="card-text">
                      Rack No: <span>{book.rack.rackId}</span>
                    </p>
                    <p class="card-text">
                      Copies: <span>{book.copiesCount}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RackDetail;
