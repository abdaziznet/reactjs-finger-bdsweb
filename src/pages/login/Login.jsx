import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function init() {
  console.log("start init");
  const info = document.getElementById("info");
  const url_init = "http://localhost:8000/api/init"; // Replace with your URL

  fetch(url_init)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      //console.log('Response:', data);
      if (data.respCode == 0) {
        info.textContent = "Init success.";
        console.log("Init success.");
      } else {
        info.textContent = "Init failed.";
        console.log("Init failed.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log("end init");
}

function receive() {
  const info = document.getElementById("info");
  const url_receive = "http://localhost:8000/api/receive"; // Replace with your URL

  fetch(url_receive)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (data.respCode == 0) {
        window.location.href = "../home/Home.js";
      } else {
        info.textContent = data.respMessage;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

const Login = () => {
  const navigate = useNavigate();
  const send = (e) => {
    e.preventDefault();

    init();

    //Get the username and password from the form
    console.log("Start send");
    const info = document.getElementById("info");
    const bdsId = document.getElementById("bdsId").value.toLowerCase();

    var checkbox = document.getElementById("myCheckbox");
    let mode = 0;
    // Check if the checkbox is checked
    if (checkbox.checked) {
      // If checked, log the value
      mode = 1;
    } else {
      mode = 0;
    }

    // Perform simple validation (you should implement stronger validation)
    if (bdsId === "") {
      alert("Please enter BDS ID.");
      return;
    }

    const url_send =
      "http://localhost:8000/api/send?bdsid=" + bdsId + "&mode=" + mode; // Replace with your URL

    fetch(url_send)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        //console.log('Response:', data);
        if (data.respCode == 0) {
          console.log("Send success");
          console.log("End send");
          setTimeout(() => {
            info.textContent = "Place your finger";
          }, 10);

          setTimeout(() => {
            const url_receive = "http://localhost:8000/api/receive"; // Replace with your URL

            fetch(url_receive)
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                return response.json();
              })
              .then((data) => {
                if (data.respCode == 0) {
                  navigate("/home");
                } else {
                  info.textContent = data.respMessage;
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }, 20);
        } else {
          console.log("Send failed");
          console.log("End send");
          info.textContent = "Send failed.";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="login-container">
      <div className="form-group">
        <h2>Branch Delivery System</h2>
        <br/>        
      </div>
      <form id="loginForm" onSubmit={send}>
        <div className="form-group">
          <input type="text" id="bdsId" placeholder="USER ID" required />
        </div>
        <div className="form-group my-checkbox">
          <input type="checkbox" id="myCheckbox" name="myCheckbox" />
          <label>Matched</label>
        </div>
        <button type="submit" className="my-login">
          Login
        </button>
        <div className="form-group my-info">
          <label id="info"></label>
        </div>
      </form>
    </div>
  );
};

export default Login;
