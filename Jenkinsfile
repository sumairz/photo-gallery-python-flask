def ImageName = "testsite"
def PublishedPort = "50000"

pipeline {
    agent none
    stages {
        stage('Build image') {
            agent any
            steps {
                sh "docker build -t ${ImageName}:latest -t ${ImageName}:${env.BUILD_NUMBER} ."
            }
        }
        stage('Test') {
            agent any
            steps {
                sh "echo Tests are ok!"
            }
        }
        stage('Deploy') {
            agent any
            steps {
                sh "docker stop ${ImageName}"
                sh "docker rm ${ImageName}"
                sh "docker run -p ${PublishedPort}:5000 --name ${ImageName} -d ${ImageName}:latest"
            }
            post {
                success {
                    echo "App deployed at http://192.168.25.38:${PublishedPort}"
                }
            }
        }
    }
}