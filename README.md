# Wierd legal requirements

This is a frontend project created as a recruitment task, developed using Vite, Tailwind CSS for styling, and Vitest for unit testing.

### Task Overview

**Algorithm Choice**: For assigning samples to a rack, my solution is based on a **bubble sort algorithm**, chosen for its simplicity and suitability for this assignment. This algorithm processes elements in pairs, comparing them and assigning them to different racks in case samples have the same data, such as age, company (workplace), district, and vision defects. I've also aimed to enhance the solution's flexibility by incorporating some abstraction; the list of properties that cannot be duplicated is customizable (see the `CONSTRAINS` constant).

**User Interface and Styling**: Basic styling has been implemented with responsive web design (RWD) in mind. I aimed to create a user interface that is as simple and understandable as possible. Additionally, I incorporated basic HTML input validation to enhance user experience and ensure data integrity.

**Data Storage**: The samples added by users are saved in session storage. I chose session storage over local storage because I haven’t added a way to remove samples yet. This means users can refresh the page without losing their data. The session storage logic is handled in a separate custom hook for better organization.

**Future Improvements**

While the current setup works, there are some improvements I could make in the future:

    •	Better Validation: improve the input validation to cover more cases and provide clearer error messages to help users fix their mistakes.
    •	Result memoization: prevent assigning from running if samples were not chanted after last assining to racks.
    •	User Testing: create tests that focus on user interactions (using testing library), ensuring the application behaves as expected and improving user confidence.

## Project Setup

This project was bootstrapped with [Vite](https://vitejs.dev/), offering a fast development environment, along with [Tailwind CSS](https://tailwindcss.com/) for utility-first styling and [Vitest](https://vitest.dev/) for efficient unit testing.

## Getting Started

To get the project up and running, follow these steps:

```
npm install
npm run dev
```

To run tests:

```
npm run test
```

### Prerequisites

Ensure that you have Node.js installed (preferably the latest LTS version). You can check if Node is installed by running:

```bash
node -v
```
