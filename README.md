# React + Vite: The Plant Shop Project

This template sets up React with Vite, enabling Hot Module Replacement (HMR) and incorporating essential ESLint rules for code quality. Two official plugins are supported:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utilizes [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) leverages [SWC](https://swc.rs/) for Fast Refresh.

## Running the Project

To ensure smooth development, it's highly recommended to use VS Code:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Project Overview

**The Plant Shop Project** is a web application designed for users to explore, search, and purchase a variety of indoor plants. The application offers a sleek and user-friendly interface, complete with detailed plant information and an integrated shopping cart functionality.

### Key Features

- **Dynamic Product Cards:** Users can add or remove items directly from the product card. When the quantity is more than one, the "Buy on Rent" button dynamically transforms into an "Add to Cart" button for seamless interactions.

- **State Management with Context API:** Initially developed without a global state, the application evolved to incorporate Context API, allowing consistent data management across components. This change was crucial for features like the Thank You page, ensuring data accessibility throughout the application.

### Development Challenges

- **Handling Dynamic Product Quantities:** The project required careful consideration to manage multiple item selections within the product card itself. Ensuring the interface remained intuitive while handling various item quantities posed a significant challenge.

- **State Sharing Across Components:** Initially, the application lacked a central state management solution. However, the need to share data across different parts of the project, particularly for features like the Thank You page, led to the integration of Context API, which streamlined data flow and state consistency throughout the application.
