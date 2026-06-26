# 🚀 CI/CD Pipeline for Dockerized Todo Application

## Overview

This project demonstrates the implementation of a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline for a Dockerized web application using **Jenkins**, **Docker**, **Docker Compose**, **GitHub**, **Nginx**, and **Linux (Ubuntu WSL)**.

The application is a responsive Todo List built using HTML, CSS, and JavaScript and deployed inside an Nginx container.

The primary objective of this project is to demonstrate real-world DevOps practices including containerization, automated builds, deployment pipelines, and Linux-based development workflows.

---

# Features

* Responsive Todo Application
* Local Storage Support
* Dockerized Deployment
* Nginx Web Server
* Docker Compose Support
* Jenkins Pipeline
* GitHub Integration
* Linux Development Environment
* Automated Build & Deployment

---

# Architecture

```
                Developer

                    │

               Git Push

                    │

               GitHub Repo

                    │

                Jenkins

                    │

         CI/CD Pipeline Execution

                    │

           Docker Image Build

                    │

          Docker Container Run

                    │

                Nginx Server

                    │

             Todo Application
```

---

# Technologies Used

| Technology     | Purpose                    |
| -------------- | -------------------------- |
| HTML           | Frontend                   |
| CSS            | Styling                    |
| JavaScript     | Application Logic          |
| Git            | Version Control            |
| GitHub         | Source Code Repository     |
| Docker         | Containerization           |
| Docker Compose | Multi-container Management |
| Jenkins        | Continuous Integration     |
| Nginx          | Web Server                 |
| Ubuntu WSL     | Linux Environment          |

---

# Project Structure

```
todo-devops/

├── index.html

├── style.css

├── app.js

├── Dockerfile

├── docker-compose.yml

├── Jenkinsfile

├── README.md

└── screenshots/
```

---

# Docker Commands

Build Image

```bash
docker build -t todo-devops:v1 .
```

Run Container

```bash
docker run -d \
--name todo-app \
-p 8080:80 \
todo-devops:v1
```

Using Docker Compose

```bash
docker compose up -d
```

Stop Containers

```bash
docker compose down
```

---

# Jenkins Pipeline

The Jenkins pipeline performs the following tasks:

* Retrieves the latest source code from GitHub
* Executes the Jenkins Pipeline
* Builds the Docker image
* Deploys the Docker container
* Provides build status

---

# Screenshots

## Todo Application

Add image here

```
screenshots/todo-app.png
```

---

## Jenkins Dashboard

Add image here

```
screenshots/jenkins-dashboard.png
```

---

## Successful Pipeline

Add image here

```
screenshots/pipeline-success.png
```

---

## Docker Containers

Add image here

```
screenshots/docker-ps.png
```

---

# Skills Demonstrated

* Linux Administration
* Git & GitHub
* Docker
* Docker Compose
* Jenkins
* CI/CD
* Nginx
* Bash
* Container Management
* DevOps Workflow

---

# Future Improvements

* Kubernetes Deployment
* AWS Deployment
* Terraform Infrastructure
* Ansible Automation
* Prometheus Monitoring
* Grafana Dashboards

---

# Author

**Harsh Kadam**

Aspiring DevOps Engineer | Linux | Docker | Jenkins | Cloud Computing
