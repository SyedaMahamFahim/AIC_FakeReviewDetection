import React,{useState} from "react";
import DoughnutChart from "../../components/Charts/DoughnutChart";

const ReviewDetection = () => {
    const [getLink,setGetLink]=useState("")
    const [toggleChart,setToggleChart]=useState(false)
  const formHandler = (e) => {
      e.preventDefault()
      alert(`Submitting Name ${getLink}`)
      setToggleChart(true)
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h1 className="text-center">Enter the Product Link</h1>
          <div className="mb-3 mt-5">
            <form action="" onSubmit={formHandler}>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Search"
                value={getLink}
                onChange={(e)=>setGetLink(e.target.value)}
                required

              />
              

              <input type="submit" value="Submit" className="btn btn-primary mt-4"/>

            </form>
          </div>
        </div>
      </div>
      <div className="container mt-5">
          <div className="row mt-5">
              {
                  toggleChart&&(
<>
<DoughnutChart/>
</>
                  )
              }
          </div>
      </div>
    </>
  );
};

export default ReviewDetection;
