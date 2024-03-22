pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // Build the Docker image
                sh 'docker-compose build'
            }
        }
        stage('Test') {
            steps {
                // Run the Playwright tests
                sh 'ENV=prod docker-compose up'
            }
        }
        stage('Tear Down') {
            steps {
                // Down docker images
                sh 'docker-compose down --remove-orphans'
            }
        }
    }
}