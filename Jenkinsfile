pipeline {
    agent "jenkinsAgentV2"
    stages {
        stage('Build') {
            steps {
                // Build the Docker image
                sh 'docker-compose build'
                docker build 
            }
        }
        stage('Test') {
            steps {
                // Run the Playwright tests
                sh 'ENV=qa docker-compose up'
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