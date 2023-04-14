# Terraform and CloudFront AWS Setup

This project uses Terraform to manage the AWS infrastructure, including an S3 bucket to host the Angular app and a CloudFront distribution for content delivery. 

## Prerequisites

1. Install [Terraform](https://www.terraform.io/downloads.html).
2. Install the [AWS CLI](https://aws.amazon.com/cli/).
3. Configure your AWS CLI with your AWS access key and secret key. You can do this by running `aws configure` and following the prompts.

## Setting Up the Infrastructure

1. Navigate to the directory containing the Terraform files (`main.tf` and any other related files).
2. Run `terraform init` to initialize the Terraform working directory and download the necessary provider plugins.
3. Run `terraform validate` to check the syntax of your Terraform files.
4. (Optional) Run `terraform fmt` to format your Terraform files according to Terraform style conventions.
5. Run `terraform plan` to preview the actions that Terraform will take to create or modify the infrastructure.
6. Run `terraform apply` to create or update the infrastructure. Confirm the action by typing `yes` when prompted.

## Making Changes

1. Make the necessary changes to the Terraform files.
2. Follow the same steps as in the "Setting Up the Infrastructure" section above, starting from step 3.

## Destroying the Infrastructure

If you need to destroy the infrastructure created by Terraform, follow these steps:

1. Run `terraform destroy` in the directory containing the Terraform files.
2. Confirm the action by typing `yes` when prompted.

## Additional Information

The `main.tf` file contains the configuration for the AWS provider, the S3 bucket, the CloudFront distribution, and the CloudFront origin access identity. Make sure to replace any placeholder values with the appropriate values for your setup. You can also use a `variables.tf` file and a `terraform.tfvars` file to manage your variables more efficiently.

The output section of the `main.tf` file provides the CloudFront domain, which you can use to access your Angular app once the infrastructure is set up.
