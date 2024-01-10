import React from "react";
import "./home.css";
import app1 from "../../assets/app-1.jpg";
import app2 from "../../assets/app-2.jpg";
import app3 from "../../assets/app-3.jpg";
import app4 from "../../assets/app-4.jpg";
import app5 from "../../assets/app-5.jpg";
import Navbar from "../../components/navbar/navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="card-container">
        <div className="card">
          <img src={app1} alt="" />
          <div className="card-content">
            <h3>App 1</h3>
            <p>This is the content of App 1. You can add more details here.</p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div className="card">
          <img src={app2} alt="" />
          <div className="card-content">
            <h3>App 2</h3>
            <p>This is the content of App 2. You can add more details here.</p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div className="card">
          <img src={app3} alt="" />
          <div className="card-content">
            <h3>App 3</h3>
            <p>This is the content of App 3. You can add more details here.</p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div className="card">
          <img src={app4} alt="" />
          <div className="card-content">
            <h3>App 4</h3>
            <p>This is the content of App 4. You can add more details here.</p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div className="card">
          <img src={app5} alt="" />
          <div className="card-content">
            <h3>App 5</h3>
            <p>This is the content of App 5. You can add more details here.</p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
    </div>

    //   <>
    // <div className="header">
    //   <h1>Welcome to Your Dashboard</h1>
    //   <hr />
    // </div>

    // <div className="card-container">
    //   <div className="card">
    //     <img src={app1} alt="" />
    //     <div className="card-content">
    //       <h3>App 1</h3>
    //       <p>This is the content of App 1. You can add more details here.</p>
    //       <a href="#">Read more</a>
    //     </div>
    //   </div>
    //   <div className="card">
    //     <img src={app2} alt="" />
    //     <div className="card-content">
    //       <h3>App 2</h3>
    //       <p>This is the content of App 2. You can add more details here.</p>
    //       <a href="#">Read more</a>
    //     </div>
    //   </div>
    //   <div className="card">
    //     <img src={app3} alt="" />
    //     <div className="card-content">
    //       <h3>App 3</h3>
    //       <p>This is the content of App 3. You can add more details here.</p>
    //       <a href="#">Read more</a>
    //     </div>
    //   </div>
    //   <div className="card">
    //     <img src={app4} alt="" />
    //     <div className="card-content">
    //       <h3>App 4</h3>
    //       <p>This is the content of App 4. You can add more details here.</p>
    //       <a href="#">Read more</a>
    //     </div>
    //   </div>
    //   <div className="card">
    //     <img src={app5} alt="" />
    //     <div className="card-content">
    //       <h3>App 5</h3>
    //       <p>This is the content of App 5. You can add more details here.</p>
    //       <a href="#">Read more</a>
    //     </div>
    //   </div>
    // </div>
    // <div className="sign-out">
    //   <button id="sign-out" onclick={redirectToIndex}>
    //     Sign out
    //   </button>
    // </div>
    // </>
  );
};

export default Home;
