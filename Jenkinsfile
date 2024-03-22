pipeline {
    agent any
    stages {
        // stage('Setup') {
        //     steps {
        //         script {
        //             properties([parameters([choice(choices: ['QA', 'PROD']),
        //             choice(choices: ['Goldmine', 'Palladium'])])])
        //         }
        //     }
        // }
        stage('Build') {
            steps {
                // Build the Docker image
                sh 'docker build --no-cache --tag playwright-tests:latest .'
            }
        }
        stage('Test') {
            steps {
                // Run the Playwright tests
                sh 'docker run playwright-tests:latest'
                // sh 'docker --version'
            }
        }
        stage('Tear Down') {
            steps {
                // Down docker images
                sh 'docker rmi -f playwright-tests:latest'
            }
        }
    }
}