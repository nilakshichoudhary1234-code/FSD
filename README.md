<!-- ======= PROFESSIONAL HEADER ======= -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:1E3A8A,100:0F172A&height=120&section=header&text=FSD%20-%20Full%20Stack%20Development&fontSize=36&fontColor=FFFFFF" />
</p>

<p align="center">
  <strong>Full Stack Development Learning Project</strong><br>
  Frontend • Backend • Database
</p>

---

## 📌 About the Project

**FSD (Full Stack Development)** is a structured learning project that demonstrates  
end-to-end web application development using frontend, backend, and database layers.

This project is designed for:
- Academic submissions
- Viva explanations
- Technical demonstrations
- Learning full-stack fundamentals

---

## 🛠️ Technology Stack

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-Professional-E34F26?style=flat-square&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-Professional-1572B6?style=flat-square&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-Professional-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=flat-square&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/MySQL-Database-4479A1?style=flat-square&logo=mysql&logoColor=white"/>
</p>

---

## 📁 Project Structure

---

## 🔄 Application Flow (Technical Diagram)

```mermaid
flowchart TD
    A[User Interface] --> B[Frontend Logic]
    B --> C[API Request]
    C --> D[Backend Routes]
    D --> E[Controller Logic]
    E --> F[Database]
    F --> E
    E --> D
    D --> B
    B --> A
sequenceDiagram
    participant Client
    participant API
    participant Controller
    participant Database

    Client->>API: HTTP Request
    API->>Controller: Route Handler
    Controller->>Database: Query Data
    Database-->>Controller: Result
    Controller-->>API: JSON Response
    API-->>Client: Final Output
graph LR
    Mobile --> ResponsiveLayout
    Tablet --> ResponsiveLayout
    Desktop --> ResponsiveLayout

