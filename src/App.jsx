import { useState } from "react";
import axios from "axios";
import Modal from "./components/Modal";
import Sinup from "./components/Sinup";
import LogIn from "./components/LogIn";
import { Routes, Route, json } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [openModal, setopenModal] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  // SINUP
  const Url = "https://login-sinup.onrender.com";
  const sinupHandler = async () => {
    try {
      if (email && password && name) {
        let result = await axios.post(`${Url}/sinup`, {
          email,
          name,
          password,
        });

        // result = await result.json();
        console.log(result);
        localStorage.setItem("User", JSON.stringify(result));

        if (!result.name || !result.email || !result.password) {
          setemail("");
          setpassword("");
          setname("");
          setopenModal(false);
        } else {
          alert("Please fill your data");
          setopenModal(true);
        }
      } else {
        alert("please fill the information...");
      }
      // }
    } catch (error) {
      console.log(error);
    }
  };

  // LOGIN
  const loginHandler = async () => {
    try {
      if (email && password) {
        let result = await axios.post(`${Url}/login`, {
          email,
          password,
        });
        if (result) {
          localStorage.setItem("User", JSON.stringify(result));
          setopenModal(false);
          setemail("");
          setpassword("");
        } else {
          setopenModal(true);
        }
      } else {
        alert("please fill the input..");
      }
    } catch (error) {
      alert("Invalid Data! Please your information again...");
      console.log(error);
    }
  };

  // backup
  const backsinup = () => {
    navigate("/");
    setopenModal(true);
  };
  return (
    <>
      <Modal
        openModal={openModal}
        backsinup={backsinup}
        setopenModal={setopenModal}
      />
      <Routes>
        <Route
          path="/*"
          element={
            <Sinup
              sinupHandler={sinupHandler}
              email={email}
              password={password}
              name={name}
              setemail={setemail}
              setpassword={setpassword}
              setname={setname}
            />
          }
        />
        <Route
          path="/login/*"
          element={
            <LogIn
              loginHandler={loginHandler}
              setemail={setemail}
              setpassword={setpassword}
            />
          }
        />
        <Route path="/forgetpassword/*" element={<Modal />} />
      </Routes>
    </>
  );
}

export default App;
