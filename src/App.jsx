import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const t = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(t);
  }, []);

  return loading ? <LoadingScreen /> : <Navigate to="/vinnySushiPortfolio/info" replace />;
}

export default App