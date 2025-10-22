2-Jenkins-Docker

##Automated CI/CD Pipeline for a Node.js Application using Jenkins and Docker 

This project demonstrates a complete DevOps workflow by building, testing, and deploying a Node.js application using Jenkins pipelines and Docker containers. The pipeline ensures automated, consistent, and repeatable deployments with minimal manual intervention.

##Key Features:

1.CI/CD Automation: Build → Test → Deploy using Jenkins Pipeline

2.Dockerized Application: Node.js app runs inside a Docker container

3.Automatic Container Cleanup: Removes old containers before deploying new ones

4.Easy Integration: Push code to GitHub → Jenkins automatically triggers the pipeline

##How It Works:

1.Jenkins pipeline pulls the latest code from GitHub.

2.Builds a Docker image of the application.

3.Runs tests (placeholder stage included).

4.Stops and removes any old container.

5.Deploys a fresh container mapped to port 3000.

##Usage

!Access your running application at: http://<JENKINS_SERVER_IP>:3000

!Update code → push to GitHub → Jenkins automatically rebuilds and redeploys

Tech Stack

1.Jenkins: Automates the pipeline

2.Docker: Containerizes the application

3.Node.js: Sample web application

4.GitHub: Source code management

Outcome:
Understanding the  hands-on CI/CD automation with Jenkins and Docker, and see how continuous integration and deployment streamline software delivery!
