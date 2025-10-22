pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t 2-jenkins-docker .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'echo "No tests yet, skipping."'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Docker container...'
                sh '''
                  # Stop old container if exists
                     if [ $(docker ps -a -q -f name=jenkins-docker-container) ]; then
                          docker stop jenkins-docker-container
                          docker rm jenkins-docker-container
                     fi

                     # Run new container
                     docker run -d -p 3000:3000 --name jenkins-docker-container 2-jenkins-docker
                     '''
    }
}
        
        
