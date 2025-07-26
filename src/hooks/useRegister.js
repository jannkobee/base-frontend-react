// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import axios from "../plugins/axios";

export const useRegister = () => {
  const [display, setDisplay] = useState(false);
  const [data, setData] = useState([]);

  const registerAccount = (payload) => {
    setData([...data, payload]);

    if (payload.email || payload.email.trim() !== "") {
      setDisplay(true);
    }

    console.log(payload);
  };

  useEffect(() => {
    // This effect runs when the component mounts
  }, []);

  return { registerAccount, display };
};
