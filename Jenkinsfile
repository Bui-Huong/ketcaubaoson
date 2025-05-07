pipeline {
    agent any {
    }
    
    environment {
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                //checkout the code from repository
            }
        }
        
        stage('Cleanup Docker') {
            steps {
                sh '''
                    # Stop and remove existing container if it exists
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                    
                    # Remove old image if it exists
                    docker rmi ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest || true
                '''
            }
        }
        
        stage('Build and Push Image') {
            steps {
                sh '''
                    # Build the Docker image
                    docker build -t ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest .
                    
                    # Push to registry
                    docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest
                '''
            }
        }
        
        stage('Run Container') {
            steps {
                sh '''
                    # Run the new container
                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p 8080:8080 \
                        ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest
                '''
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        failure {
            echo 'Pipeline failed!'
        }
        success {
            echo 'Pipeline succeeded!'
        }
    }
}
