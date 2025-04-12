# Tech.Care Patient Dashboard

A responsive and interactive medical dashboard designed to visualize patient diagnostics, vitals, and lab results. Built using **React**, **TypeScript**, and **Tailwind CSS**, the application features dynamic charts, modular components, and mobile-first design to ensure accessibility across all screen sizes.

![App Preview 1](./assets/screenshot-1.png)
![App Preview 2](./assets/screenshot-2.png)

## 🧠 Features

- 🔎 **Patient Search & Selection**  
  View a scrollable list of patients with demographics and profile pictures.

- 📊 **Diagnosis & Vitals Visualization**  
  Displays blood pressure trends (systolic and diastolic), respiratory rate, heart rate, and temperature with corresponding health status.

- 🩺 **Patient Profile Information**  
  View personal details including date of birth, gender, contact info, and insurance provider.

- 📁 **Lab Results Summary**  
  Lists downloadable lab reports (Blood Test, CT Scans, X-Rays, etc.) with a clean UI and hover interactions.

- 📱 **Responsive Layout**  
  Optimized for desktops, tablets (like iPad 1024px), and smaller mobile screens with adaptive views and mobile menus.

- 🎨 **Modern UI/UX**  
  Fully styled with Tailwind CSS and icons via Lucide React for clean, modern aesthetics.

---

## 🚀 Technologies Used

- **React + TypeScript**
- **Tailwind CSS**
- **Chart.js / react-chartjs-2**
- **Lucide Icons**
- **Axios** for HTTP requests
- **Vite** for fast development and builds

---

## 📂 Folder Structure

```bash
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── PatientsList.tsx
│   ├── PatientInformation.tsx
│   ├── BloodPressureChart.tsx
│   ├── VitalsCard.tsx
│   ├── DiagnosticTable.tsx
│   └── LabResults.tsx
├── types/
│   └── Patient.ts
└── App.tsx

```
