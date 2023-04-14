pipeline {
    agent any

    environment {
        PATH = "${env.PATH}:${env.WORKSPACE}/node_modules/.bin"
        AWS_DEFAULT_REGION = 'us-east-2'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        // stage('Install Dependencies') {
        //     steps {
        //         catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
        //             sh 'npm i'
        //         }
        //     }
        //     post {
        //         failure {
        //             script {
        //                 timeout(time: 5, unit: 'MINUTES') {
        //                     input message: 'An error occurred while installing dependencies. Do you want to clean the workspace and reinstall dependencies?'
        //                 }
        //             }
        //             sh 'rm -rf node_modules package-lock.json'
        //             sh 'npm i'
        //         }
        //     }
        // }
        stage('Clean Workspace') {
            steps {
                sh 'rm -rf node_modules package-lock.json'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build Angular App') {
            steps {
                sh 'ng build --configuration=production'
            }
        }
        stage('Initialize Terraform') {
            steps {
                dir('terraform') {
                    sh 'terraform init'
                }
            }
        }
        stage('Terraform Plan') {
            steps {
                dir('terraform') {
                    sh "terraform plan -out=tfplan -var=\"s3_bucket_name=${env.S3_BUCKET_NAME}\" -var=\"aws_region=${env.AWS_REGION}\""
                }
            }
        }
        stage('Terraform Apply') {
            steps {
                dir('terraform') {
                    sh 'terraform apply -auto-approve tfplan'
                }
            }
        }
        stage('Sync S3 Bucket') {
            steps {
                sh 'aws s3 sync dist/marketplace/ s3://angular-bucket-mkleczka'
            }
        }
    }
}
