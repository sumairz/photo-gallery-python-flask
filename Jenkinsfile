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
        stage('Deploy'){
            agent any
            steps {
                dir(path: env.BUILD_ID) {
                //sh "pip install flask"
                sh "export FLASK_APP='main'"
                sh "python3 -m flask run"
                }
            }
        }
    }
}