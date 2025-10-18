import { FunctionComponent } from "react";
import React from "react";
import * as Register from "../components/Register";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  // Example user object; replace with actual user data as needed
  const user = { fullName: "User" };

  return (
    <div className="container-fluid">
      {/* Header Section */}
      <div className="row bg-primary text-white py-5">
        <div className="col-12 text-center">
          <h1 className="display-3 fw-bold mb-3">📚 Book Collection</h1>
          <p className="lead fs-4">Welcome to your personal digital library</p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="alert alert-success" role="alert">
              <h2 className="alert-heading">🎉 Welcome!</h2>
              <p className="mb-0"> {user.fullName}</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="bi bi-book display-4 text-primary"></i>
                </div>
                <h5 className="card-title">Browse Books</h5>
                <p className="card-text">
                  Discover and explore your extensive collection of books.
                </p>
                <button className="btn btn-primary">View Books</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="bi bi-plus-circle display-4 text-success"></i>
                </div>
                <h5 className="card-title">Add New Book</h5>
                <p className="card-text">
                  Add new books to expand your personal library.
                </p>
                <button className="btn btn-success">Add Book</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="bi bi-search display-4 text-info"></i>
                </div>
                <h5 className="card-title">Search Books</h5>
                <p className="card-text">
                  Find specific books quickly with our search feature.
                </p>
                <button className="btn btn-info">Search</button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="text-center mb-4">📊 Your Library Stats</h3>
          </div>
          <div className="col-md-3 text-center mb-3">
            <div className="card bg-light">
              <div className="card-body">
                <h2 className="text-primary fw-bold">150</h2>
                <p className="card-text">Total Books</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center mb-3">
            <div className="card bg-light">
              <div className="card-body">
                <h2 className="text-success fw-bold">12</h2>
                <p className="card-text">Reading Now</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center mb-3">
            <div className="card bg-light">
              <div className="card-body">
                <h2 className="text-info fw-bold">45</h2>
                <p className="card-text">Completed</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center mb-3">
            <div className="card bg-light">
              <div className="card-body">
                <h2 className="text-warning fw-bold">25</h2>
                <p className="card-text">Wishlist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h4 className="mb-4">Quick Actions</h4>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-outline-primary me-2">
                📖 My Books
              </button>
              <button type="button" className="btn btn-outline-success me-2">
                ➕ Add Book
              </button>
              <button type="button" className="btn btn-outline-info me-2">
                🔍 Search
              </button>
              <button type="button" className="btn btn-outline-secondary">
                ⚙️ Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          <p className="mb-0">
            &copy; 2025 Guy Evenchen - Your Personal Digital Library
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
