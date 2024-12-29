# Text Summarizer Web Application

A powerful and efficient web application for summarizing text using the **Ollama Llama 3.2 model**. This project combines a modern, responsive **Vite-powered frontend** with a robust **Spring Boot backend** to deliver fast and accurate text summarization.

## Features

- **Frontend:** Built with **React** and **Vite**, offering a fast and responsive user interface.
- **Backend:** Developed using **Spring Boot** to handle requests, process text using the Ollama Llama model, and serve the summary.
- **Summarization:** Utilizes the **Ollama Llama 3.2 model** for fast and accurate text summarization.
- **Customization:** Users can specify the desired length of the summary.
- **Real-time Typing Effect:** Displays a typing animation while generating the summary.

## Technologies Used

- **Frontend:**
  - **React** (v18.3.1)
  - **Vite** (v6.0.5)
  - **TailwindCSS** for styling
- **Backend:**
  - **Spring Boot** (v3.4.1)
  - **Spring AI** (for Ollama integration)
  - **MySQL** (for data storage)
  - **Ollama** (to integrate and utilize the Ollama Llama 3.2 model)

## Getting Started

Follow the instructions below to set up both the frontend and backend locally.

### Prerequisites

- **Node.js** (v16 or higher)
- **Maven** (for Spring Boot backend)
- **MySQL** (or any other compatible database)
- **Ollama:** Install the **Ollama CLI** and ensure the **Ollama Llama 3.2 model** is downloaded and running.

 ### Installation

- First, clone the repository to your local system using the following command:

```
git clone https://github.com/rohitroy-github/ollama-vite-springboot-text-summarizer.git
```

- Navigate into the project directory using the cd command:

```
cd ollama-vite-springboot-text-summarizer
```

- Navigate into frontend directory & install the required depeendencies by running:

```
cd frontend-vite
npm install
```

- Create a new database named `text_summarizer_db` by running the following SQL command:

```
CREATE DATABASE text_summarizer_db;
```

- Configure the `application.properties` file with your database credentials and Ollama settings. Replace placeholders with actual values:

```
spring.datasource.url=jdbc:mysql://localhost:3306/text_summarizer_db
spring.datasource.username=<YOUR_USERNAME>
spring.datasource.password=<YOUR_PASSWORD>
ollama.api.base-url=http://localhost:11434
```

- **[Terminal 1]** Run the Ollama Server by running:

```
ollama run llama3.2
```

- **[Terminal 2]** Run the frontend application by running:

```
npm run dev
```

- **[Terminal 3]** Run the Spring Boot application. Start the project using Maven by running:

```
./mvnw spring-boot:run
```

- Frontend application will be running:

```
http://localhost:5173/
```

- Backend application will be running:

```
http://localhost:8081
```