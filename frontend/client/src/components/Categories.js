import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState([]);
  const [dataloaded, setDataLoaded] = useState(false);
  const fetchData = async () => {
    try {
      let response = await axios.get("http://localhost:8080/api/genres");
      setCategoryData(response.data);
      setDataLoaded(true);
    } catch (error) {
      console.log("Error while fetching genre data: ", error);
    }
  };
  useEffect(() => {
    fetchData();
  });

  const handleSeeBooks = (genreId) => {
    navigate(`/categories/${genreId}`);
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          {dataloaded &&
            categoryData.map((genre, index) => (
              <div key={index} className="col-lg-4 col-12 col-md-6 my-4 ">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={genre.imageURL}
                    class="card-img-top"
                    alt="..."
                    height="300vh"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{genre.genreName}</h5>
                    <p class="card-text">{genre.description}</p>
                    <a
                      class="btn btn-primary"
                      onClick={() => handleSeeBooks(genre.genreId)}
                    >
                      See Books
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
