import React, {useState, useEffect} from "react";
import Loader from "../components/Loader";
import { Navigate, useNavigate } from "react-router-dom";
import App from "../App";

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000); // Simulate loading
  }, []);


  return loading ? <Loader /> : navigate("/home");
};

export default LoadingPage;
