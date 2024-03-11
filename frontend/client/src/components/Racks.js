import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Racks = () => {
  const navigate = useNavigate();
  const [rackData, setRackData] = useState([]);
  const [dataloaded, setDataLoaded] = useState(false);
  const fetchData = async () => {
    try {
      let response = await axios.get("http://localhost:8080/api/racks");
      setRackData(response.data);
      setDataLoaded(true);
    } catch (error) {
      console.log("Error while fetching genre data: ", error);
    }
  };
  useEffect(() => {
    fetchData();
  },[]);

  const handleSeeRacks = (rackId) => {
    navigate(`/racks/${rackId}`);
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          {dataloaded &&
            rackData.map((rack, index) => (
              <div key={index} className="col-lg-4 col-12 col-md-6 my-4 ">
                <div class="card bg-dark text-white" style={{ width: "18rem" }}>
                    <img src="https://img.freepik.com/free-photo/gray-textured-wall_53876-88964.jpg?w=1060&t=st=1710177705~exp=1710178305~hmac=39e57d534e3cda3b9c725a7b6a9c3f5d1138133bdc9e6598dd6869a6d53b3feb" class="card-img" alt="Rack Image" />
                    <div class="card-img-overlay">
                      <h5 class="card-title">Rack {rack.rackId}</h5>
                      <p class="card-text">
                        Total books: {rack.totalBooks}
                      </p>
                      <a
                      class="btn btn-primary"
                      onClick={() => handleSeeRacks(rack.rackId)}
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

export default Racks;
