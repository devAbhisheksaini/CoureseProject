# React + Vite + TailwindCSS Template

This template provides a minimal setup for building a React application using Vite. 
## Features

* **Vite:** Ultra-fast development and build tooling.
* **React:** Latest version for building modern UI components.
* **Tailwind CSS:** Utility-first CSS framework for building custom designs without leaving your HTML.
* **Redux Toolkit:** (Optional) State management with slices and reducers.
* **React Hot Toast:** (Optional) For elegant notifications in your application.
* **React Router DOM:** (Optional) Declarative routing for React.

## Installation

**Step 1: Create a Vite Project**

1. Install Vite globally (if not already installed):

   ```bash
   npm install -g create-vite
   ```
   
2. Create a new Vite project:
   ```bash
   create-vite my-react-app -- --template react
   ```
   
3. Navigate into the project directory:
    ```bash
    cd my-react-app
    ```
    
**Step 2: Install Tailwind CSS**

1. Install Tailwind CSS and its dependencies:

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```

2. Initialize Tailwind configuration:
    ```bash
    npx tailwindcss init -p
    ```

3. Update the tailwind.config.js file with the following content to specify which files Tailwind should scan:
   ```javascript
   /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    };
   ```
   
4. Add the following lines to your src/index.css (or src/main.css if you're using that):
    ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
    ```

**Step 3: Start Development Server**
  ```bash
    npm run dev
  ```

<hr/>

