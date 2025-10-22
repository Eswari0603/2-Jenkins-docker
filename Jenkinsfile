pipeline {
    agent any

    environment {
        IMAGE_NAME = 'jenkins-demo-app'
    }

    stage('Build') {
    steps {
        echo 'Building Docker image...'
        sh 'ls -l'               // show files to confirm package.json is there
        sh 'docker build -t jenkins-demo-app .'
    }
}

        stage('Test') {
            steps {
                echo 'Running basic tests...'
                sh 'echo "Tests passed!"'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying container...'
                sh 'docker run -d -p 3000:3000 --name demo-app $IMAGE_NAME || true'
            }
        }
    }
}
