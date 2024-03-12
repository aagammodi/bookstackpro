import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "./Navbar";

const CategoryDetail = () => {
  const { genreId } = useParams();
  const [bookData, setBookData] = useState([]);
  const [dataloaded, setDataLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [totalData, setTotalData] = useState([]);

  const fetchData = async () => {
    try {
      let response = await axios.get(
        `http://localhost:8080/api/genres/${genreId}`
      );
      setBookData(response.data);
      setTotalData(response.data);
      setDataLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const searchChanged = (event) => {
    setSearch(event.target.value);
  };

  useEffect(()=>{
    setBookData(totalData.filter((category) => (category.bookName.toLowerCase().includes(search) || category.author.toLowerCase().includes(search))));
  }, [search]);

  return (
    <div>
      <NavBar />
      <div className="container">
      <div className="row">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon2" onChange={searchChanged}/>
    </div>
      </div>
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

export default CategoryDetail;
