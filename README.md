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

# Next Lecture

Understanding project structure and React basics
