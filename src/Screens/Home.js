import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <p>Go to DASHBOARD</p>
      <Button variant="contained" onClick={()=>navigate('/Dashboard')}>DASHBOARD</Button>
    </>
  );
};

export default Home;
