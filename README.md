# 🌱 EcoTrack - Smart Waste Management Platform

<div align="center">
  <h3><b>Team EcoForge | "Clean India, Green Future"</b></h3>
  <p>
    Bridging the gap between waste generators and collectors through gamified recycling.
  </p>
  
  <a href="https://ecotrack03.netlify.app/"><strong>🔴 LIVE DEMO</strong></a> | 
  <a href="#-tech-stack"><strong>🛠️ Tech Stack</strong></a> | 
  <a href="#-installation--setup"><strong>⚙️ Installation</strong></a>
</div>

---

## 📖 Overview

**EcoTrack** is a smart waste management platform designed to optimize waste collection logistics while incentivizing citizens to recycle. 

By digitizing the process, we bridge the gap between **Residents** (Waste Generators) and **Drivers** (Waste Collectors). Our platform reduces landfill overflow, tracks carbon offsets, and provides economic benefits through a "EcoPoints" reward system.

---

## 🧪 Try it Out (Demo Credentials)

**Judge's Note:** To fully test the interaction, we recommend opening the **Resident** account in one browser window and the **Driver** account in an **Incognito/Private** window.

| Role | Description | Email | Password |
| :--- | :--- | :--- | :--- |
| **🏡 Resident** | To schedule pickups & view rewards | `resident@gmail.com` | `123456` |
| **🚚 Driver** | To accept jobs & verify pickups | `drivers@gmail.com` | `123456` |

> **🔗 Live URL:** [https://ecotrack03.netlify.app/](https://ecotrack03.netlify.app/)

---

## 🧩 Usage Flow (How to Test)

1.  **Login as Resident:** Use the credentials above to log in. Go to the dashboard and **"Schedule a Pickup"** for Plastic waste.
2.  **Login as Driver:** Open a new Incognito window. Log in as a Driver. Go to **"Live Requests"**.
3.  **Accept Job:** You will see the request created by the resident. Click **Accept**.
4.  **Verification (OTP):** * On the **Resident** screen, a 4-digit OTP will appear.
    * On the **Driver** screen, enter this OTP to complete the pickup.
5.  **Rewards:** The Resident instantly receives EcoPoints, and the Driver's earnings are updated!

---

## 🚀 Key Features

### 🏡 For Residents
* **Smart Scheduling:** Book pickups for specific waste types (Plastic, E-Waste, Metal) with instant price estimation.
* **Live Status Tracking:** Real-time visual tracking (Pending ➝ Assigned ➝ Arrived ➝ Completed).
* **Rewards Hub:** Redeem earned EcoPoints for rewards like fuel cards, OTT subscriptions, and gift vouchers.
* **Impact Analytics:** Visualize data like CO2 avoided and water conserved.
* **Citizen Reporting:** Report illegal dump spots with geolocation.

### 🚚 For Drivers
* **Live Job Feed:** View available pickup requests nearby with weight and earning details.
* **Secure Handover:** OTP verification system ensures the driver is at the correct location.
* **Navigation Integration:** One-tap navigation to the user's location via Maps.
* **Earnings Dashboard:** Track daily income, trip history, and reliability scores.
* **Quick Updates:** Send status updates (e.g., "Arriving in 10m") with a single click.

---

## 🎮 Gamification & Level System

EcoTrack keeps users engaged through a progressive leveling system:

* **Resident Levels:** Users grow from a **Seed 🌱** to a **Forest 🏞️** based on the weight of waste recycled. Higher levels unlock better reward conversion rates.
* **Driver Ranks:** Badges based on completed trips:
    * 🥉 **Eco Starter** (Beginner)
    * 🥈 **Green Mover** (>10 Trips)
    * 🥇 **Sustainability Pro** (>50 Trips)
    * 🏆 **Planet Hero** (>100 Trips)

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6 Modules)
* **Styling:** Tailwind CSS (via CDN)
* **Backend (BaaS):** Firebase (Authentication, Firestore Database)
* **Maps:** OpenStreetMap (Nominatim API)
* **Visualization:** Chart.js (Analytics), Canvas Confetti
* **Deployment:** Netlify

---

## ⚙️ Installation & Setup

If you wish to run the project locally instead of using the live link:

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/your-username/ecotrack.git](https://github.com/your-username/ecotrack.git)
    cd ecotrack
    ```

2.  **Firebase Configuration**
    * The project is connected via `firebase-config.js`.
    * *Note: Ensure your local environment allows outgoing requests to Firestore.*

3.  **Run Locally**
    * **Using VS Code:** Install the "Live Server" extension, right-click `index.html`, and select "Open with Live Server".
    * **Using Python:**
        ```bash
        python -m http.server 8000
        ```

4.  **Access the App**
    * Open `http://127.0.0.1:5500/index.html` (or your specific port).

---

<div align="center">
  <p>Built with ❤️ by <b>Team EcoForge</b></p>
</div>
