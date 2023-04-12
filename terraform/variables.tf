variable "aws_region" {
  description = "The AWS region for your infrastructure."
  default     = "us-east-2"
}

variable "s3_bucket_name" {
  description = "The name of the S3 bucket to host the Angular app."
}