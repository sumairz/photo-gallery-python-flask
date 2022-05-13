pipeline {
    agent none
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'python:2-alpine'
                }
            }
            steps {
                sh 'python - py_compile main.py definition.py modules/Gallery.py modules/Login.py modules/Photos.py'
                stash(name: 'compiled-results', includes: '*.py*', 'modules/*.py*') 
            }
        }
    }
}