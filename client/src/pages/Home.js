import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../redux/features/tourSlice";

const Home = () => {
  const { tours, loading } = useSelector((state) => ({
    ...state.tour,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTours());
  }, []);
  console.log(tours);

  if (loading) {
    return <h5>Loading...</h5>;
  }
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "1000px",
        alignContent: "center",
      }}
    >
      <MDBRow className="mt-5">
        {tours.length === 0 && (
          <MDBTypography className="text-center mb-0" tag="h2">
            No Tours Found
          </MDBTypography>
        )}

        <MDBCol>
          <MDBContainer>
            <MDBRow className="row-cols-1 row-cols-md-3 g-2">
              {tours && tours.map((item, index) => <h4>Items</h4>)}
            </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Home;
