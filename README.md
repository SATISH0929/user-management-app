# User Management App

A simple React-based web application for managing users. The app allows users to view, add, edit, and delete user information while interacting with the JSONPlaceholder API.

## Features

### Core Functionality
1. **View Users**: Display a list of users fetched from the JSONPlaceholder API, including the following details:
   - ID
   - First Name
   - Last Name
   - Email
   - Department

2. **Add Users**:
   - Use a form to add a new user with fields for First Name, Last Name, Email, and Department.
   - Simulates adding a user by appending the new user to the local state.

3. **Edit Users**:
   - Select a user to edit their details.
   - Simulates updating user details in the local state after interacting with the JSONPlaceholder API.

4. **Delete Users**:
   - Remove a user from the list.
   - Simulates deletion by filtering the local state after sending a request to the JSONPlaceholder API.

5. **Error Handling**:
   - Graceful error messages for failed API requests.

### Bonus Features
- **Responsive Design**: The app is fully responsive and mobile-friendly.
- **Beautiful UI**: Uses modern CSS styling for a clean and professional look.
- **Reusable Components**:
  - `UserList` for displaying user data.
  - `UserForm` for handling add/edit actions.
  - `ErrorBoundary` for capturing and displaying errors.

---

## Technologies Used
- **React**: Frontend library for building user interfaces.
- **Axios**: For handling HTTP requests.
- **CSS**: Custom styling for a clean and responsive design.
- **JSONPlaceholder**: A free online REST API used to mock backend interactions.

---

## Getting Started

### Prerequisites
- Node.js and npm installed on your system.

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/SATISH0929/user-management-app.git
   cd user-management-app
