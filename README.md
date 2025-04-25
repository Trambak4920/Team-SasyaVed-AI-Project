# 🌾 KrishkAI – AI-Powered Agricultural Assistant

KrishkAI is an end-to-end, AI-driven agri-tech platform designed to empower farmers with smart crop suggestions, disease identification, financial inclusion, and an interactive multilingual knowledge hub.

---

## 🚀 Features

### 🧠 Knowledge Hub
- Ask questions in natural language related to agriculture
- Driven by open-source LLMs (LLaMA 3 / DeepSeek)
- Multilingual support for regional users

### 🌱 Crop Recommendation
- Recommends the most appropriate crops based on:
- Soil fertility
- Environmental data
- Market demand
- Classification based on ML with environmental inputs

### 🐛 Crop Disease Detection
- Supports **image** as well as **video** inputs
- Identifies disease type based on CNN model trained on the **PlantDoc dataset**
- Real-time video frame analysis (maximum of 10 frames)

### 👤 User Management
- Farmer login and registration system
- Safely stores user data in MySQL

---

## 🛠 Tech Stack

| Layer         | Technology                     |
|---------------|---------------------------------|
| Frontend      | React.js                        |
| Backend       | FastAPI, python                |
| ML Models     | TensorFlow, PyTorch, Scikit-learn, Deepseek R1|
| Database      | MySQL                           |
| Cloud/Infra   | Docker-ready, API-first design  |
| Integration   | RESTful APIs + CORS             |

---

## 📁 Project Structure

project-root/ 
├── frontend/ # React App (UI) 
│   ├── public/
│   │   ├── collage.jpg
│   │   ├── logo.jpg
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.css
│   │   │   ├── Header.js
│   │   │   └── ProjectedRoute.js
│   │   ├── pages/
│   │   │   ├── CropRecommendationPage.js
│   │   │   ├── DashboardPage.js
│   │   │   ├── DiseaseDetectionPage.js
│   │   │   ├── KnowledgeHubPage.js
│   │   │   ├── LoginPage.js
│   │   │   └── RegisterPage.js
│   │   ├── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   ├── package.json
│   └── package-lock.json
├── backend/ # FastAPI App (APIs) 
│   ├── main.py # API entry point 
│   ├── Registration.py 
│   ├── Login_page.py 
│   ├── CropRecommendation.py 
│   ├── Knowledge_Hub.py 
│   ├── Disease_Detection.py 
│   └── DD_from_pic.py 
└── README.md
