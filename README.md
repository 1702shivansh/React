# React JS Revision – Lecture 1

## Creating React App using CRA and Vite

This lecture covers the basics of setting up a React project and understanding the difference between **Create React App (CRA)** and **Vite**.

---

# What is React?

React is a **JavaScript library for building User Interfaces**, especially Single Page Applications (SPA).

It is used to build:

* Fast web apps
* Component-based architecture
* Reusable UI

---

# Method 1: Create React App (CRA)

## What is CRA?

Create React App is the **official traditional way** to create React projects.

It provides:

* Preconfigured setup
* No need to configure webpack, babel manually

---

## Command to create CRA project

```bash
npx create-react-app my-app
```

Enter project folder:

```bash
cd my-app
```

Start project:

```bash
npm start
```

---

## Folder Structure (CRA)

Important files:

```
node_modules/
public/
src/
package.json
```

Main file:

```
src/index.js
```

---

## Disadvantages of CRA

* Slow startup
* Slow build time
* Heavy
* Outdated compared to modern tools

---

# Method 2: Using Vite

## What is Vite?

Vite is a **modern frontend build tool**.

It is:

* Faster
* Lightweight
* Modern
* Recommended way today

---

## Command to create Vite project

```bash
npm create vite@latest
```

Enter project name

Select:

```
React
```

Then:

```bash
cd project-name
npm install
npm run dev
```

---

## Folder Structure (Vite)

Important files:

```
node_modules/
public/
src/
index.html
vite.config.js
```

Main file:

```
src/main.jsx
```

---

# Key Differences between CRA and Vite

| Feature     | CRA     | Vite      |
| ----------- | ------- | --------- |
| Speed       | Slow    | Very Fast |
| Build Time  | Slow    | Fast      |
| Modern      | No      | Yes       |
| Bundle Tool | Webpack | ESBuild   |
| Startup     | Slow    | Instant   |
| Recommended | No      | Yes       |

---

# Important Difference in Main File

CRA:

```js
index.js
```

Vite:

```js
main.jsx
```

---

# Why Vite is Faster?

Because Vite uses:

* ESBuild
* Native ES Modules

Instead of:

* Webpack bundling everything first

---

# Which one should we use?

Recommended:

Use **Vite**

Because:

* Faster
* Modern
* Used in industry now

---

# What we learned in this lecture

* What is React
* How to create React project using CRA
* How to create React project using Vite
* Difference between CRA and Vite
* Why Vite is better

---

# Summary

Vite is the modern and recommended way to create React applications.

CRA is older and slower.

---

# React JS Revision – Lecture 2

## React Structure, Flow and Best Practices

This lecture explains the **internal structure of a React project**, **how React works**, and **important best practices**.

---

# React Project Structure

## In CRA

Important files:

```
public/index.html
src/index.js
src/App.js
```

Flow:

```
index.html → index.js → App.js → Components
```

---

## In Vite

Important files:

```
index.html
src/main.jsx
src/App.jsx
```

Flow:

```
index.html → main.jsx → App.jsx → Components
```

---

# How React Actually Loads

React does not directly control HTML.

Instead:

React injects content inside:

```
<div id="root"></div>
```

This div is present inside **index.html**

React connects to this div and renders the entire application inside it.

---

# Script Loading Difference

## CRA

Script is automatically handled and injected by React scripts.

You don't see direct script tag for main React file.

React internally connects:

```
index.js → index.html
```

---

## Vite

Script is explicitly written in **index.html**

Example:

```html
<script type="module" src="/src/main.jsx"></script>
```

Vite directly loads main.jsx using ES Modules.

---

# Entry Point Difference

| CRA      | Vite     |
| -------- | -------- |
| index.js | main.jsx |

Both connect React with HTML root div.

---

# React Flow Diagram

```
index.html
   ↓
main.jsx / index.js
   ↓
App.jsx / App.js
   ↓
Components
   ↓
UI Rendered
```

---

# Best Practices Learned

## 1. Component Name should start with Capital Letter

Correct:

```jsx
function App() {}
```

Wrong:

```jsx
function app() {}
```

Reason:

React treats lowercase as normal HTML tags.

---

## 2. Use JSX for Components

JSX allows writing HTML inside JavaScript.

Example:

```jsx
function App() {
  return <h1>Hello World</h1>
}
```

---

## 3. Component Based Structure

React apps are built using small reusable components.

Example:

```
App
 ├ Navbar
 ├ Hero
 ├ Footer
```

---

# What we learned in this lecture

* React project structure
* Flow of React application
* How React connects to HTML
* Difference between CRA and Vite script loading
* JSX basics
* Best practices for components

---

# Summary

React renders UI inside root div.

Flow starts from:

```
index.html → main.jsx → App.jsx
```

Always:

* Use Capital letter for components
* Use JSX
* Follow component based structure

---

# React JS Revision – Lecture 3

## Creating Custom React Library, React Tree, JSX and Babel

This lecture focuses on understanding **how React works internally**, **how JSX is converted**, and **creating our own custom React render function**.

We also learned about **React.createElement**, **React Tree**, and **Babel**.

---

# Part 1: Creating Our Own React Render Function

We created a custom render function to understand how React renders elements to the DOM.

## Custom Render Function

```js
function customRender(reactElement, mainContainer) {

    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    mainContainer.appendChild(domElement);
}
```

---

## Custom React Element Object

```js
const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "click me to visit google",
};
```

---

## Rendering to DOM

```js
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
```

---

# What we learned from this

This is how React internally works:

React Element (Object) → Create DOM Element → Add Props → Add Children → Render to DOM

This helped us understand that:

React is just **JavaScript objects converted into DOM elements**

---

# Part 2: Understanding JSX

Example JSX:

```jsx
<a href="https://google.com" target="_blank">
  Visit Google
</a>
```

JSX looks like HTML but it is **not HTML**

It is converted into JavaScript.

---

# Part 3: React.createElement

React actually creates elements using:

```js
const reactElement = React.createElement(
  'a',
  { href: "https://google.com", target: "_blank" },
  'click me to visit google'
)
```

This is the real way React creates elements.

---

# Rendering using React

```js
createRoot(document.getElementById('root')).render(
  reactElement
)
```

---

# Part 4: React Tree

React follows a tree structure.

Example:

```text
Root
 └── App
      └── a
```

This is called **React Tree**

React updates only changed parts using this tree.

This makes React fast.

---

# Part 5: Role of Babel

Babel is a **JavaScript compiler**

It converts JSX into JavaScript.

Example:

JSX:

```jsx
const element = <h1>Hello</h1>
```

Converted by Babel into:

```js
const element = React.createElement("h1", null, "Hello")
```

---

# Important Learning

JSX → Babel → React.createElement → React Element Object → DOM

---

# Why plain object didn't work directly

Example:

```js
const reactElement = {
 type: "a",
 props: {},
 children: ""
}
```

Because React expects elements in specific format created by:

React.createElement

Not normal object.

---

# Key Concepts Learned

• How React works internally
• Creating custom React renderer
• React Element structure
• React Tree
• JSX
• React.createElement
• Babel role

---

# Flow Summary

```text
JSX
 ↓
Babel converts
 ↓
React.createElement
 ↓
React Element Object
 ↓
Render using ReactDOM
 ↓
DOM Updated
```

---

# Summary

React is not magic.

It:

• Creates object
• Converts to DOM
• Updates efficiently using tree

Babel helps convert JSX into JavaScript.

---




# React JS Revision – Lecture 4

## Why We Need Hooks in React

This lecture explains the **problem with normal variables in React** and **why Hooks were introduced**.

---

# Problem Without Hooks

Example:

```jsx
let counter = 0;

function increment() {
  counter++;
  console.log(counter);
}
```

Issue:

Even if the value changes, **UI does not update automatically**

Because React **does not track normal variables**

React only updates UI when **state changes**

---

# What is a Hook?

Hooks are **special functions in React** that let you use:

• State
• Lifecycle features
• Other React features

in **functional components**

---

# Most Important Hook: useState

useState allows React to:

• Track variable
• Update UI automatically

Example:

```jsx
const [counter, setCounter] = useState(0);
```

---

# Why Hooks are Needed

Hooks solve these problems:

• Normal variables do not trigger re-render
• UI does not update automatically
• No state management in functional components earlier

Hooks provide:

• State management
• Automatic UI update
• Better control

---

# Before Hooks

Only class components had state:

```jsx
class App extends React.Component {
}
```

Functional components could not use state.

---

# After Hooks

Functional components can use state:

```jsx
function App() {
}
```

No need for class components.

---

# Benefits of Hooks

• Makes code simpler
• Removes need for class components
• Easier to manage state
• Cleaner code
• Better readability

---

# Flow Without Hook

```text
Variable change
 ↓
React does NOT detect
 ↓
UI NOT updated
```

---

# Flow With Hook

```text
State change using Hook
 ↓
React detects change
 ↓
Component re-renders
 ↓
UI updated
```

---

# Summary

Hooks are needed because React:

Only updates UI when state changes

Hooks allow functional components to use state and update UI.

---

# Most Common Hooks

• useState
• useEffect
• useRef

---

# React JS Revision – Lecture 5

## Virtual DOM, Reconciliation, Fiber Architecture and Keys

This lecture explains **how React updates the UI efficiently** and the role of **Reconciliation, Fiber, and Keys**.

---

# Virtual DOM (Concept)

Virtual DOM is a **JavaScript representation of the Real DOM**

Example:

Real DOM:

```html
<div>
  <h1>Hello</h1>
</div>
```

Virtual DOM:

```js
{
  type: "div",
  children: [
    { type: "h1", children: "Hello" }
  ]
}
```

---

# Why Virtual DOM was needed

Direct DOM updates are:

• Slow
• Expensive

Virtual DOM improves performance by:

• Comparing old and new version
• Updating only changed parts

---

# Important Note

Virtual DOM is just a **concept**

The real algorithm behind it is called:

# Reconciliation

---

# Reconciliation

Reconciliation is the **algorithm React uses to update the UI**

It:

• Compares old tree and new tree
• Finds differences
• Updates only required elements

This process is called:

Diffing Algorithm

---

# Example

Old:

```text
<h1>Hello</h1>
```

New:

```text
<h1>Hello Shivansh</h1>
```

React updates only text

Not entire element

---

# Problem with Old System

Reconciliation earlier was:

• Synchronous
• Blocking
• Slow for large apps

To solve this React introduced:

# Fiber Architecture

---

# Fiber Architecture

Fiber is the **new reconciliation engine**

It makes React:

• Faster
• Smarter
• Non-blocking

---

# Why Fiber is better

Fiber allows React to:

• Break work into small tasks
• Pause work
• Resume work
• Prioritize important updates

This improves performance.

---

# React Tree using Fiber

Example:

```text
App
 ├ Navbar
 ├ Sidebar
 └ Content
```

React updates only changed component

Not entire app

---

# Keys in React (Very Important)

Keys help React identify elements uniquely in lists.

---

# Example Without Key

```jsx
{items.map(item =>
  <li>{item}</li>
)}
```

Problem:

React gets confused when list changes

Performance becomes slow

---

# Example With Key

```jsx
{items.map(item =>
  <li key={item.id}>{item}</li>
)}
```

Now React can:

• Identify element
• Update efficiently

---

# Why Keys are Needed

Keys help in:

• Faster reconciliation
• Better performance
• Correct UI updates

---

# Real Example Problem Without Key

Old:

```text
A B C
```

New:

```text
B C D
```

Without key:

React re-renders all

With key:

React updates only changed item

---

# Summary Flow

```text
State change
 ↓
Reconciliation
 ↓
Fiber processes update
 ↓
Diff calculated
 ↓
DOM updated efficiently
```

---

# Key Concepts Learned

• Virtual DOM is a concept
• Reconciliation is the real algorithm
• Fiber is the modern engine
• Keys improve performance
• React updates only required elements

---

# Best Practice

Always use unique key in lists:

```jsx
key={item.id}
```

Never use:

```jsx
key={index}
```

(if list changes dynamically)

---

# Final Summary

React is fast because of:

• Reconciliation
• Fiber Architecture
• Efficient DOM updates
• Proper use of Keys

---

# React JS Revision – Lecture 6

## Props in React and Basics of Tailwind CSS

This lecture covers **Props**, **reusable components**, and **basic usage of Tailwind CSS in React**.

---

# What are Props?

Props (Properties) are used to **pass data from parent component to child component**

They make components **dynamic and reusable**

---

# Example of Props

Parent Component:

```jsx
<Card username="Shivansh" />
```

Child Component:

```jsx
function Card(props) {
  return <h1>Hello {props.username}</h1>
}
```

Output:

```text
Hello Shivansh
```

---

# Why Props are Needed

Props help to:

• Pass data
• Reuse components
• Make dynamic UI

Without props, components would be static.

---

# Reusable Component Example

```jsx
function Card(props) {
  return (
    <div>
      <h2>{props.username}</h2>
      <p>{props.post}</p>
    </div>
  )
}
```

Using reusable component:

```jsx
<Card username="Shivansh" post="Frontend Developer" />
<Card username="Rahul" post="Backend Developer" />
```

---

# Props Flow

```text
Parent Component
      ↓
Pass Props
      ↓
Child Component
      ↓
UI Render
```

---

# Props are Read-Only

Props cannot be modified inside child component.

Props are immutable.

---

# Tailwind CSS in React

Tailwind is a **utility-first CSS framework**

It is used to style components quickly.

---

# Example Tailwind Styling

```jsx
<h1 className="text-3xl font-bold text-blue-500">
  Hello Shivansh
</h1>
```

---

# Why className not class?

React uses:

```jsx
className
```

because:

```jsx
class
```

is reserved keyword in JavaScript.

---

# Example Reusable Card with Tailwind

```jsx
function Card(props) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <h2 className="text-xl font-bold">{props.username}</h2>
      <p>{props.post}</p>
    </div>
  )
}
```

---

# Benefits of Tailwind

• Fast styling
• No separate CSS file needed
• Clean code
• Highly customizable

---

# What we learned in this lecture

• What are Props
• How to pass Props
• Reusable components
• Props are read-only
• Basics of Tailwind CSS
• Styling React components

---

# Summary

Props allow components to become reusable.

Tailwind helps in fast and easy styling.

Reusable components improve code quality.

---

# Example Final Flow

```text
App Component
   ↓
Pass Props
   ↓
Reusable Card Component
   ↓
Styled using Tailwind
   ↓
UI Rendered
```

---

# React JS Revision – Lecture 7

## useState Interview Question – Why setCounter(count + 1) 5 Times Doesn't Work Properly

This lecture covers a **very important interview question** related to **useState and state updates** using a counter example.

---

# Basic Counter Example

```jsx
const [count, setCounter] = useState(0);
```

---

# Problem Case

If we write:

```jsx
setCounter(count + 1);
setCounter(count + 1);
setCounter(count + 1);
setCounter(count + 1);
setCounter(count + 1);
```

Expected Output:

```text
Count = 5
```

Actual Output:

```text
Count = 1
```

---

# Why This Happens

Because:

React **does not update state immediately**

React **batches (groups) state updates**

All 5 setCounter calls use the **same old value of count**

Example:

```text
count = 0

setCounter(0 + 1)
setCounter(0 + 1)
setCounter(0 + 1)
setCounter(0 + 1)
setCounter(0 + 1)
```

Final result:

```text
count = 1
```

---

# Correct Solution: Using Callback Function

```jsx
setCounter(prev => prev + 1);
setCounter(prev => prev + 1);
setCounter(prev => prev + 1);
setCounter(prev => prev + 1);
setCounter(prev => prev + 1);
```

Output:

```text
count = 5
```

---

# Why Callback Works

Because each callback gets the **latest updated value**

Flow:

```text
prev = 0 → 1
prev = 1 → 2
prev = 2 → 3
prev = 3 → 4
prev = 4 → 5
```

---

# Visual Difference

Wrong Way:

```text
0 → 1
0 → 1
0 → 1
0 → 1
0 → 1
Final = 1
```

Correct Way:

```text
0 → 1 → 2 → 3 → 4 → 5
Final = 5
```

---

# Reason: React State Updates are Asynchronous

React:

• Batches updates
• Updates later
• Does not update instantly

---

# Interview Rule (Very Important)

If new state depends on previous state

Always use:

```jsx
setState(prev => prev + 1)
```

Never use:

```jsx
setState(state + 1)
```

---

# Real Counter Example

```jsx
function Counter() {

  const [count, setCounter] = useState(0);

  function increase() {
    setCounter(prev => prev + 1);
    setCounter(prev => prev + 1);
    setCounter(prev => prev + 1);
    setCounter(prev => prev + 1);
    setCounter(prev => prev + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Increase by 5</button>
    </>
  );
}
```

---

# Key Interview Concepts Learned

• useState is asynchronous
• React batches updates
• setState does not update immediately
• Callback function gives latest value

---

# Summary

Wrong:

```jsx
setCounter(count + 1)
```

Correct:

```jsx
setCounter(prev => prev + 1)
```

Use callback when state depends on previous value.

---

# Interview One Line Answer

React batches state updates, so multiple setState(count+1) use same old value. Using functional callback ensures latest state is used.

---

# React JS Revision – Lecture 8

## Background Color Changer Project

This lecture focuses on building a **basic background color changer application** using React and applying concepts learned so far.

---

# Project Objective

To create an application where the **background color of the page changes dynamically when user interacts with buttons**.

This project helps in understanding:

• useState Hook
• Event handling
• Dynamic UI updates
• Inline styling in React

---

# Core Concept Used

The main concept behind this project is:

React **state controls the UI**

When state changes → UI updates automatically

In this project:

State stores the **current background color**

When user selects a color → state updates → background changes

---

# How the Flow Works

```text
User clicks button
      ↓
Event triggers
      ↓
State updates
      ↓
Component re-renders
      ↓
Background color changes
```

---

# Concepts Applied

## 1. useState Hook

Used to store and manage the current background color.

---

## 2. Event Handling

User interaction like button click triggers state change.

---

## 3. Dynamic Styling

Background color is controlled dynamically using state.

---

## 4. Component Re-rendering

Whenever state changes, React automatically updates the UI.

---

# What This Project Teaches

• Practical use of useState
• How React updates UI
• How state controls styling
• How event handling works
• Basics of interactive React apps

---

# Why This Project is Important

This is the **first step in understanding real React applications**

It teaches the core principle:

State → Controls → UI

Every major React app uses this concept.

---

# Real World Use Cases

This concept is used in:

• Theme switchers (Dark/Light mode)
• UI customization
• Dashboards
• Interactive apps

---

# Key Learning Summary

React makes UI dynamic using state.

User actions update state.

State updates UI automatically.

---

# React JS Revision – Lecture 9

## Advanced Password Generator Project using React Hooks

This lecture focuses on building a **modern, fully dynamic, and optimized Password Generator** using React. This project combines multiple hooks and demonstrates real-world React development practices.

This is one of the **most important beginner-to-intermediate React projects** because it integrates **state, side effects, performance optimization, and direct DOM manipulation**.

---

# Project Objective

To build a **secure password generator** that allows users to:

• Generate random passwords
• Control password length dynamically
• Include or exclude numbers
• Include or exclude special characters
• Copy password to clipboard
• Automatically highlight password when copying

---

# Core React Hooks Used

This project uses four major React Hooks:

---

## 1. useState – State Management

useState is used to manage:

• Password value
• Password length
• Number inclusion option
• Symbol inclusion option

This allows the UI to update dynamically whenever user changes options.

---

## 2. useCallback – Performance Optimization

useCallback is used to:

• Optimize the password generator function
• Prevent unnecessary function recreation on every render
• Improve performance

This ensures the function only recreates when dependencies change.

This is an **important interview concept**.

---

## 3. useEffect – Handling Side Effects

useEffect is used to:

• Automatically generate new password when options change

Whenever:

• Length changes
• Number option changes
• Symbol option changes

Password regenerates automatically.

This makes the application fully dynamic.

---

## 4. useRef – Direct DOM Access

useRef is used to:

• Access the password input field directly
• Highlight the password when copying

This improves user experience.

useRef allows DOM manipulation **without re-rendering**.

---

# Application Flow

```text
User changes options
      ↓
State updates
      ↓
useEffect triggers
      ↓
Password regenerated
      ↓
UI updates automatically
      ↓
User clicks Copy
      ↓
Password highlighted and copied
```

---

# Features Implemented

## Dynamic Password Generation

Password changes automatically based on selected options.

---

## Length Control

User can select password length dynamically.

---

## Numbers Toggle

User can enable or disable numbers in password.

---

## Symbols Toggle

User can enable or disable special characters.

---

## Copy to Clipboard

Password can be copied instantly.

---

## Auto Highlight on Copy

Password input gets highlighted automatically when copying.

This improves usability and user experience.

---

# Concepts Learned from This Project

This project teaches real-world React concepts:

• State-driven UI
• Side effects handling
• Function optimization
• DOM access using useRef
• Controlled inputs
• Event handling
• Dynamic rendering

---

# Performance Optimization Concept

useCallback prevents unnecessary function recreation.

This improves performance in larger applications.

This is frequently asked in React interviews.

---

# Real-World Applications of This Concept

These concepts are used in:

• Authentication systems
• Form handling
• Dashboard applications
• Settings panels
• Developer tools

---

# Key Interview Concepts Covered

This project covers important interview topics:

• Difference between useState and useRef
• useEffect usage
• useCallback optimization
• Controlled components
• Clipboard handling

---



# Final Summary

This project demonstrates how React builds **interactive, dynamic, and optimized applications** using Hooks.

It combines:

• State management
• Side effects
• Optimization
• DOM manipulation

This represents real React development workflow.

---

# Next Learning Step

Advanced Hooks and building larger real-world React applications




