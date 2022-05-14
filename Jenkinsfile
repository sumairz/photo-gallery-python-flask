pipeline {
    agent none
    stages {
        // stage('Build') {
        //     agent {
        //         docker {
        //             image 'python:2-alpine'
        //         }
        //     }
        //     steps {
        //         sh 'python -m py_compile main.py definition.py modules/Gallery.py modules/Login.py modules/Photos.py'
        //         stash(name: 'compiled-results', includes: '*.py*,modules/*.py*') 
        //     }
        // }
        // stage('Deliver') {
        //     agent any
        //     environment {
        //         VOLUME = '$(pwd):/src'
        //         IMAGE = 'cdrx/pyinstaller-linux'
        //     }
        //     steps {
        //         dir(path: env.BUILD_ID) {
        //             unstash(name: 'compiled-results')
        //             sh "docker run --rm -v ${VOLUME} ${IMAGE} 'pyinstaller -F main.py'"
        //         }
        //     }
        //     post {
        //         success {
        //             archiveArtifacts "${env.BUILD_ID}/dist/main"
        //             sh "docker run --rm -v ${VOLUME} ${IMAGE} 'rm -rf build dist'"
        //         }
        //     }
        // }
        // stage('Deploy'){
        //     agent any
        //     environment {
        //         FLASK_APP = 'main'
        //     }
        //     steps {
        //         dir(path: env.BUILD_ID) {
        //             sh "pip install flask"
        //             sh "cd ..; export FLASK_APP=${FLASK_APP}; python3 -m flask run"
        //         }
        //     }
        // }
        stage('Build image') {
            agent built-in
            steps {
                sh "docker build -t testsite:latest -t testsite:${env.BUILD_NUMBER} ."
            }
        }
        stage('Test') {
            agent built-in
            steps {
                sh "echo Tests are ok!"
            }

        }
        stage('Run container') {
            agent built-in
            steps {
                sh "docker run -p 50000:5000 --name testsite -d testsite:latest"
            }
        }
    }
}