# Marketplace Application Deployment

This README provides instructions for deploying the Marketplace application using Docker, Kubernetes, and AWS.

## Prerequisites

- Docker installed
- Kubernetes cluster set up (e.g., using Amazon EKS)
- kubectl installed and configured to access the Kubernetes cluster
- AWS CLI installed and configured

## EKS Prerequisites
1. eksctl create cluster -f cluster.yaml (This creates the clusters based on your yaml specs)
2. aws eks update-kubeconfig --region us-east-2 --name my-cluster

## Steps to Deploy the Application

1. Build the Docker image:

docker build -t your_dockerhub_username/my-docker-app:latest .

2. Push the Docker image to Docker Hub:

docker push your_dockerhub_username/my-docker-app:latest

3. Apply the Kubernetes manifests:

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

4. Verify the deployment and service:

kubectl get deployments
kubectl get services

5. Access the application using the LoadBalancer URL:

http://<load_balancer_url>:8081

## Updating the Application

1. Make changes to your application code.

2. Rebuild and push the Docker image:

docker build -t your_dockerhub_username/my-docker-app:latest .
docker push your_dockerhub_username/my-docker-app:latest

3. Update the Kubernetes deployment to use the new Docker image:

kubectl rollout restart deployment marketplace

4. Verify that the new pods are running:

kubectl get pods

5. Test the application using the LoadBalancer URL:

http://<load_balancer_url>:8081
