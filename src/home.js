import React from 'react';

const Home = () => {
  return (
    <div className="background">
      <div className="row">
        <div className="col-md-6 mx-auto mt-5 text-center" style={{color: "white"}}>
          <h1 className="mb-3">LUXUS | ELEGANCIA | ÉLETÉRZÉS</h1>
          <p className="mb-5">4 kerék szerelmeseitől, 4 kerék szerelmeseinek</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card">
            <img
              src=""
              alt="Feature 1"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Funkció 1</h5>
              <p className="card-text">Leírás a funkcióról vagy szolgáltatásról.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Feature 2"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Funkció 2</h5>
              <p className="card-text">Leírás a funkcióról vagy szolgáltatásról.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Feature 3"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Funkció 3</h5>
              <p className="card-text">Leírás a funkcióról vagy szolgáltatásról.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
