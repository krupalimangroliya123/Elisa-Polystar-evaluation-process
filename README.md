# 🚋 Tram Schedule App

## 📌 Overview
This Angular web application displays **trams departing from Luma station towards Linde station**. The app fetches data from a mock JSON file and provides additional fun features such as:

✅ **Live Countdown Timer** – Real-time updates until the tram departs.   
✅ **Fun Tram Facts** – Shows random tram facts each time the app loads.  
✅ **Funny UI Design** – Animated tram list with emojis and colors.  

---

## 🎯 Features
### 🚀 Core Features
- Fetches **tram schedule** from `mock-data.json`.
- Filters **trams departing from Luma** heading towards Linde.
- Displays **real-time countdown** for the next tram.

### 🎨 Fun Features
- **Emoji-based status messages** (🚋 Ready, 🕒 On Time, ⚠️ Delayed).
- **Hover effects & colorful animated cards** for tram listings.
- **Tram facts** displayed randomly on page load.

---

## 🛠️ How to Run the Project
### **1️⃣ Install Dependencies**
Make sure you have **Angular CLI** installed:
```sh
npm install -g @angular/cli
```
Clone the repository and install dependencies:
```sh
git clone <repo-url>
npm install
```

### **2️⃣ Run the Application**
Start the development server:
```sh
ng serve
```
Visit **`http://localhost:4200`** in your browser.

---

## 📂 File Structure & Contributions
### **`src/app/`**
| File | Description |
|-------|-------------|
| **services/tram.service.ts** | Fetches tram data from `mock-data.json` and filters Luma → Linde trams. |
| **components/tram-list/** | Displays the tram schedule list with animations. |
| **components/tram-timer/** | Shows a countdown timer for tram departures. |
| **components/tram-fact/** | Displays random tram facts on load. |
| **app.module.ts** | Registers all Angular modules and components. |

