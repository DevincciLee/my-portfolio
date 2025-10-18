import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import { Navigate } from "react-router-dom";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const t = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(t);
  }, []);

  return loading ? <Loader /> : <Navigate to="/vinnySushiPortfolio/info" replace />;
}

export default App