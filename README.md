# 🌱 EcoTrack - Smart Waste Management Platform

### Team EcoForge
> 🇮🇳 **"Clean India, Green Future"** 🌿

EcoTrack is a smart waste management platform that connects Residents (waste generators) with Drivers (waste collectors). We gamify recycling to reduce landfill overflow and optimize logistics.

---

## 🔴 Live Demo & Testing Credentials

**Project Link:** [https://ecotrack03.netlify.app/](https://ecotrack03.netlify.app/)

To test the full flow (Scheduling -> Pickup), please use the credentials below. 

💡 **Tip:** Open the **Resident** account in one browser window and the **Driver** account in an **Incognito/Private** window to simulate real-time interaction.

| Role | Email | Password | Purpose |
| :--- | :--- | :--- | :--- |
| **🏡 Resident** | `resident@gmail.com` | `123456` | To schedule pickups & view rewards. |
| **🚚 Driver** | `drivers@gmail.com` | `123456` | To accept jobs & verify pickups. |

---

## 🧩 How to Test the App (Step-by-Step)

1.  **Login as Resident:** Log in using the resident credentials. Click **"Schedule a Pickup"**, select a waste type (e.g., Plastic), and book a slot.
2.  **Login as Driver:** In a separate window (Incognito), log in as a Driver. Go to the **"Live Requests"** tab.
3.  **Accept Job:** You will see the request created by the resident. Click **Accept**.
4.  **Verify Pickup:** * Go back to the **Resident Dashboard** to see the unique 4-digit OTP.
    * Enter this OTP in the **Driver Dashboard** to complete the job.
5.  **Check Rewards:** The Resident instantly receives EcoPoints, and the Driver gets paid!

---

## 🚀 Key Features

### For Residents 🏡
* **Smart Scheduling:** Book pickups for Plastic, E-Waste, or Metal with instant price estimates.
* **Live Tracking:** Visual status updates (Pending -> Assigned -> Arrived -> Completed).
* **Rewards Hub:** Redeem EcoPoints for gift cards and coupons.
* **Impact Analytics:** See your contribution to CO2 reduction.
* **Citizen Reporting:** Report illegal dump spots with geolocation.

### For Drivers 🚚
* **Live Job Feed:** Real-time list of nearby pickup requests with earnings data.
* **Secure Handover:** OTP verification ensures the driver is at the right location.
* **Navigation:** One-tap integration with Maps.
* **Earnings Dashboard:** Track daily income and trip history.

---

## 🎮 Gamification

* **Resident Levels:** Users grow from a **Seed 🌱** to a **Forest 🏞️** based on recycling habits.
* **Driver Ranks:** Badges like **Eco Starter** and **Planet Hero** based on trip count.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6 Modules)
* **Styling:** Tailwind CSS
* **Backend:** Firebase (Authentication & Firestore)
* **Maps:** OpenStreetMap API
* **Deployment:** Netlify

---

## ⚙️ Installation (Local Setup)

If you want to run this locally instead of using the live link:

1.  **Clone the Repo:**
    ```bash
    git clone [https://github.com/your-username/ecotrack.git](https://github.com/your-username/ecotrack.git)
    cd ecotrack
    ```

2.  **Run with Live Server:**
    Since this project uses ES6 modules, you need a local server.
    * **VS Code:** Right-click `index.html` and select "Open with Live Server".
    * **Terminal:** Run `python -m http.server 8000`

3.  **Open in Browser:**
    Go to `http://127.0.0.1:5500`

---

Built with ❤️ by **Team EcoForge**
