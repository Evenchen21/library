import axios from "axios";
import Customer from "../Inferfaces/User";

const API_URL: string = "http://localhost:8000/users";

export function getAllUsers() {
  return axios.get(API_URL);
}

export function addNewCustomer(newcustomer: Customer) {
  return axios.post(API_URL, newcustomer);
}

// Login function - authenticate user with email and password //
export function loginUser(email: string, password: string) {
  return getAllUsers().then((response) => {
    const users = response.data;

    // Check if user with matching email and password exists
    const user = users.find(
      (u: Customer) => u.email === email && u.password === password
    );

    if (user) {
      // User found - return success response
      return {
        success: true,
        message: "Login successful",
        user: user,
        data: response.data,
      };
    } else {
      // User not found - throw error
      throw new Error("Invalid email or password");
    }
  });
}

// Get user by ID //
export function getUserById(id: number) {
  return axios.get(`${API_URL}/${id}`);
}

// Get user by email //
export function getUserByEmail(email: string) {
  return axios.get(`${API_URL}?email=${email}`);
}

// Register new user with email validation //
export function registerUser(newUser: Customer) {
  // First check if email already exists
  return axios.get(`${API_URL}?email=${newUser.email}`).then((response) => {
    if (response.data.length > 0) {
      throw new Error(
        "Email already exists. Please use a different email address."
      );
    }

    // If email doesn't exist, create new user
    return axios.post(API_URL, newUser);
  });
}
