import React from 'react'
import axios from "axios";
export default function FormRack() {

    const submit = async(event) => {
        event.preventDefault();
        try{
            axios.post("http://localhost:8080/api/racks").then((res)=>{
                if(res.data==0)
                    alert("New rack added!");
                else
                    alert("Error creating new rack");
            })
        }catch(error){
            console.log("Error: ", error);
        }
    }

  return (
    <div>
        <div className="container bg-light" style={{ marginTop: "5%" }}>
        <div className="row text-dark p-3">
          <div className="col-lg-6 col-12">
            <img
              src="https://imgs.search.brave.com/2_m0HxpHE23JhAljUX-dZdJTTpHqly4HmUITtZvNvYY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzQ0LzkzLzQ1/LzM2MF9GXzI0NDkz/NDUyMl9KMzFRTFQ3/cWY1Ynp5dHZaN3pR/NHdSUGV2RDRIQ2hW/TC5qcGc"
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
            <p>Click on the button to add a new rack</p>

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
                  Add a new Rack
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
