import React, {useState} from "react";
import NavBar from "./Navbar";
import FormBook from "./FormBook";
import FormGenre from "./FormGenre";
import FormRack from "./FormRack";

const Dashboard = () => {
  const [state, setState] = useState("");

  const setStatusBook = () => {
    setState("book");
  };
  const setStatusRack = () => {
    setState("rack");
  };
  const setStatusGenre = () => {
    setState("genre");
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <button className="btn btn-primary" onClick={setStatusBook}>Add a book</button>
          </div>
          <div className="col-4">
            <button className="btn btn-primary" onClick={setStatusRack}>Add a Rack</button>
          </div>
          <div className="col-4">
            <button className="btn btn-primary" onClick={setStatusGenre}>Add a Genre</button>
          </div>
        </div>
      </div>
      {
        state==="book" && <FormBook/>
      }{
        state==="rack" && <FormRack/>
      }{
        state==="genre" && <FormGenre/>
      }
    </div>
  );
};

export default Dashboard;
