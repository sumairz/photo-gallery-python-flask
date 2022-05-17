def ImageName = "testsite"
def PublishedPort = "50000"

pipeline {
    agent any
    stages {
        stage('Build image') {
            // agent any
            steps {
                sh "docker build -t ${ImageName}:${env.BUILD_ID} ."
            }
        }
        stage('Test') {
            // agent any
            steps {
                sh "echo Tests are ok!"
            }
        }
        stage('Deploy') {
            // agent any
            steps {
                sh '''#!/bin/bash
                if [ \$(docker ps -a -f name=${ImageName} -q | wc -l) -gt 0 ]; then
                    docker stop ${ImageName}
                fi
                '''
                // sh "docker rm ${ImageName}"
                sh "docker run --rm -p ${PublishedPort}:5000 --name ${ImageName} -d ${ImageName}:${env.BUILD_ID}"
                script {
                    ipaddr = sh "/sbin/ip -o -4 addr list eth0 | awk '{print \$4}' | cut -d/ -f1"
                }
            }
            post {
                success {
                        echo "App deployed at http://${ipaddr}:${PublishedPort}"
                    }
                }
            }
        }
    }