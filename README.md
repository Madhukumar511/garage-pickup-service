# 🌱 EcoTrack - Smart Waste Management Platform

> **Team EcoForge** | Hackathon Project
> *"Clean India, Green Future."*

## 📖 Overview

**EcoTrack** is a smart waste management platform designed to bridge the gap between waste generators (Residents) and waste collectors (Drivers). It incentivizes recycling through a gamified reward system while optimizing logistics for pickup drivers.

By digitizing waste collection, we aim to reduce landfill overflow, track carbon offsets, and provide economic benefits to users through "EcoPoints."

---

## 🚀 Key Features

### 🏡 For Residents
* **Smart Scheduling:** Book pickups for specific waste types (Plastic, E-Waste, Metal) with instant price estimation.
* **Live Status Tracking:** Real-time visual tracking of the pickup request (Pending -> Assigned -> Arrived -> Completed).
* **Rewards Hub:** Redeem earned EcoPoints for rewards like fuel cards, OTT subscriptions, and gift vouchers.
* **Impact Analytics:** Visualize specific environmental impact data, such as CO2 avoided and water conserved.
* **Citizen Reporting:** Report illegal dump spots with geolocation to alert community cleanup crews.

### 🚚 For Drivers
* **Live Job Feed:** View available pickup requests nearby with weight and earning details.
* **Secure Handover:** OTP verification system ensures the driver is at the correct location before marking a job complete.
* **Navigation Integration:** One-tap navigation to the user's location via Maps.
* **Earnings Dashboard:** Track daily income, trip history, and reliability scores.
* **Trip Updates:** Send quick status updates (e.g., "Arriving in 10m") to the resident with a single click.

---

## 🎮 Gamification & Level System

EcoTrack keeps users engaged through a progressive leveling system hardcoded into the platform:

**Resident Levels:**
Users grow from a **Seed 🌱** to a **Forest 🏞️** based on the weight of waste recycled. Higher levels unlock better conversion rates for rewards.

**Driver Ranks:**
Drivers earn badges based on completed trips:
1.  **Eco Starter** (Beginner)
2.  **Green Mover** (>10 Trips)
3.  **Sustainability Pro** (>50 Trips)
4.  **Planet Hero** (>100 Trips)

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3
* **Styling:** Tailwind CSS (via CDN).
* **Scripting:** Vanilla JavaScript (ES6 Modules).
* **Backend:** Firebase (Authentication, Firestore Database).
* **Maps/Geocoding:** OpenStreetMap (Nominatim API).
* **Visualization:** Chart.js (Analytics), Canvas Confetti (Gamification effects).
* **Icons:** FontAwesome.

---

## ⚙️ Installation & Setup

Since this project uses ES6 Modules (`type="module"`), it requires a local server to run to avoid CORS issues.

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/your-username/ecotrack.git](https://github.com/your-username/ecotrack.git)
    cd ecotrack
    ```

2.  **Firebase Configuration**
    * The project is connected via `firebase-config.js` using the provided API keys.
    * Ensure your Firestore database rules allow read/write access for testing.

3.  **Run Locally**
    * **Using VS Code:** Install the **Live Server** extension, right-click `index.html`, and select "Open with Live Server".
    * **Using Python:** Run `python -m http.server 8000` in the terminal.

4.  **Access the App**
    * Open `http://127.0.0.1:5500/index.html` (or your local port) in the browser.

---

## 🧩 Usage Flow

1.  **Sign Up:** Users select their role (Resident or Driver) on the Auth page.
2.  **Schedule (Resident):** Select waste type, estimate weight, and book a slot.
3.  **Accept (Driver):** The driver sees the request in the "Live Requests" tab and accepts it.
4.  **Verify:** Upon arrival, the resident provides a 4-digit OTP displayed on their dashboard.
5.  **Reward:** The driver enters the OTP to complete the job. The resident receives EcoPoints instantly.

---

Built with ❤️ by **Team EcoForge**
