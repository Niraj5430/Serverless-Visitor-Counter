Serverless Visitor Counter Web Application
📌 Project Overview

This project demonstrates a fully serverless web application on AWS where a visitor counter increments every time the website is accessed.
The application uses AWS managed services for hosting, content delivery, backend logic, database storage, and DNS — without managing any servers.

🧱 Architecture Summary

Static frontend hosted on Amazon S3
Content delivered securely via CloudFront
Custom domain and subdomain configured using Route 53
Visitor count stored in DynamoDB
Counter increment logic implemented using AWS Lambda
Frontend updates deployed using AWS CLI for hands-on learning

📂 Repository Structure
serverless-visitor-counter/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── lambda/
│   └── visitor_counter.py
│
├── screenshots/
│   ├── step-1-s3-bucket.png
│   ├── step-2-cloudfront.png
│   ├── step-3-route53.png
│   ├── step-4-dynamodb.png
│   ├── step-5-lambda.png
│   └── step-7-live-website.png
│
├── architecture/
│   └── architecture-diagram.png
│
└── README.md

🛠️ Step-by-Step Implementation
Step 1: Create S3 Bucket & Upload Static Files
Created an S3 bucket to host static website files
Uploaded initial HTML, CSS, and JavaScript
At this stage, the visitor counter was static and not functional

📸 Screenshot:
screenshots/s3-bucket.png

Step 2: Configure CloudFront Distribution
Created a CloudFront distribution
Configured S3 as the origin
Applied a private bucket policy so only CloudFront can access S3 content

📸 Screenshot:
screenshots/cloudfront.png
Step 3: Domain & DNS Configuration (Route 53)
Updated domain nameservers to Route 53
Created hosted zone
Configured domain and subdomain records pointing to CloudFront

📸 Screenshot:
screenshots/route53.png

Step 4: Create DynamoDB Table
Created a DynamoDB table to store visitor count
Added a single item to act as a global counter

📸 Screenshot:
screenshots/dynamodb.png

Step 5: Create Lambda Function
Created a Lambda function to increment the visitor count
Used DynamoDB atomic counter logic to safely handle concurrent visits
Enabled CORS for frontend access

📸 Screenshot:
screenshots/lambda.png

📄 Code:
lambda/visitor_counter.py

Step 6: Deploy Updated Frontend via AWS CLI
Updated frontend JavaScript to fetch visitor count from Lambda
Instead of uploading via S3 console, files were copied from local machine using AWS CLI
This step was intentionally done for learning S3 access using IAM roles and CLI

📄 Code:
frontend/index.html
frontend/script.js
frontend/style.css

Step 7: Final Working Application
Website successfully fetches and displays the visitor count
Counter increments on every page refresh
Served via CloudFront with a custom domain

📸 Screenshot:
screenshots/live-website.png

🧠 Key Learnings

-Implemented a serverless architecture without managing servers
-Used CloudFront private access with S3 bucket policies
-Configured DNS and custom domains using Route 53
-Implemented atomic counters in DynamoDB
-Used IAM roles instead of access keys
-Deployed frontend using AWS CLI

🧪 Technologies Used
HTML, CSS, JavaScript
Amazon S3
Amazon CloudFront
Amazon Route 53
AWS Lambda
Amazon DynamoDB
AWS IAM
AWS CLI

🏁 Conclusion
This project demonstrates real-world cloud concepts including serverless design, security best practices, DNS configuration, and automated deployments.
It serves as a strong foundation for entry-level cloud engineering roles. 

This project demonstrates real-world cloud concepts including serverless design, security best practices, DNS configuration, and automated deployments.
It serves as a strong foundation for cloud internships and entry-level cloud engineering roles.
