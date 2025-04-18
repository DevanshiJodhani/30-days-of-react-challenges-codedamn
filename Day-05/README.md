# 🚀 React Counter App

Welcome to the **React Counter App**! This is a simple, beautifully styled counter built with React and styled-components. Click a button and watch the counter increase by **3 with every click** — perfect for learning functional state updates in React!

---

## ✨ Features

- 🔢 **Increments the counter by 3** with a single click  
- 🖥️ **Big, bold UI** with full-page centering  
- ⚡ **Smooth button interactions** (hover + active effects)

---

## 🧠 How It Works

The counter uses React's `useState` hook, and increments the value **three times in a loop** using the **functional updater form** to ensure state consistency:

```
for (let i = 0; i < 3; i++) {
  setNumber(prev => prev + 1);
}
```
---

## 🛠 Tech Stack

- **React** with the **Vite** framework
- **Styled-Components**