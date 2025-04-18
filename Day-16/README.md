# 🕒 Simple Clock

A sleek and simple React application that dynamically displays the **current day**, **date**, and **time** in real-time! ⏳✨

## ✅ Features

- 📆 **Current Day**  
  Displays the full name of today's day (e.g., `Monday`) in a `div` with ID `#day`.

- 🗓️ **Today's Date**  
  Shows the date in `"Month DD, YYYY"` format (e.g., `November 14, 2023`) inside a `div` with ID `#date`.

- ⏰ **Current Time**  
  Updates every second to reflect the current time in `"HH:MM:SS"` 24-hour format inside a `div` with ID `#time`.

## 🚀 How It Works

The app uses `setInterval` to update the time every second and leverages JavaScript's `Date` methods to extract and format:

- The **day** using `.toLocaleDateString()` with `{ weekday: 'long' }`
- The **date** with custom formatting
- The **time** with padded hours, minutes, and seconds

## 🛠️ Tech Stack

- ⚛️ **React** with the **Vite** framework
- 🎨 **styled-components**
