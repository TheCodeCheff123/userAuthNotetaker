# learnableExpressJs
This file provides an overview of the project, instructions for setting it up.

---

# Note-Taking API with Categories and Type Safety

This is a simple note-taking API built with Express.js and TypeScript. It includes features like categories, type safety, validation, and logging middleware.

---

## Features
1. **Categories**: Each note is associated with a category.
2. **Type Safety**: Uses TypeScript for type checking and validation.
3. **Validation**: Custom middleware validates request bodies using `zod`.
4. **Logging**: A logging middleware tracks all API requests.
---

## Prerequisites
- Node.js (v16 or higher)
- npm (Node Package Manager)

---

## Installation

1. Clone the repository:
   ```bash
   git clone repo link
   cd learnableExpressJs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up TypeScript (if not already installed):
   ```bash
   npm install typescript ts-node @types/node @types/express --save-dev
   ```

4. Compile and run the server:
   ```bash
   npx ts-node index.ts
   ```

   Alternatively, use the start script:
   ```bash
   npm start
   ```
5. Endpoints
   A. Get test notes
   ```bash
   https://note-taker-anco.onrender.com/api/notes
   ```

   B. Test the code
   ```bash
   https://note-taker-anco.onrender.com/api/
   ```
---

## Technologies Used
- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building the API.
- **TypeScript**: Adds type safety to the project.
- **Zod**: Schema validation library.

---