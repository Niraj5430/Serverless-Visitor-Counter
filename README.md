# Serverless Visitor Counter Web Application

---

## 📌 Project Overview

This project demonstrates a **fully serverless web application on AWS** where a visitor counter increments on every website visit.  
The application is built using **AWS managed services** for hosting, content delivery, backend logic, database storage, and DNS — without managing any servers.

---

## 🧱 Architecture Summary

**The application uses the following AWS services:**

- Static frontend hosted on **Amazon S3**
- Secure content delivery via **CloudFront**
- Custom domain and subdomain using **Route 53**
- Visitor count stored in **DynamoDB**
- Counter logic implemented using **AWS Lambda**
- Frontend deployed using **AWS CLI** for hands-on learning

---

## 📂 Repository Structure


---

## 🛠️ Step-by-Step Implementation

---

### **Step 1: Create S3 Bucket & Upload Static Files**

- Created an S3 bucket to host static website files
- Uploaded initial **HTML, CSS, and JavaScript**
- At this stage, the visitor counter was **static and not functional**

**Screenshot:**  
`screenshots/step-1-s3-bucket.png`

---

### **Step 2: Configure CloudFront Distribution**

- Created a CloudFront distribution
- Configured the S3 bucket as the origin
- Applied a **private bucket policy** so only CloudFront can access S3 content

**Screenshot:**  
`screenshots/step-2-cloudfront.png`

---

### **Step 3: Domain & DNS Configuration (Route 53)**

- Updated domain nameservers to Route 53
- Created a hosted zone
- Configured domain and subdomain records pointing to CloudFront

**Screenshot:**  
`screenshots/step-3-route53.png`

---

### **Step 4: Create DynamoDB Table**

- Created a DynamoDB table to store the visitor count
- Added a single item to act as a global counter

**Screenshot:**  
`screenshots/step-4-dynamodb.png`

---

### **Step 5: Create Lambda Function**

- Created a Lambda function to increment the visitor count
- Used **DynamoDB atomic counter logic** to handle concurrent visits safely
- Enabled CORS to allow frontend access

**Screenshot:**  
`screenshots/step-5-lambda.png`

**Code Location:**  
`lambda/visitor_counter.py`

---

### **Step 6: Deploy Updated Frontend Using AWS CLI**

- Updated frontend JavaScript to fetch the visitor count from Lambda
- Instead of uploading files through the S3 console, files were **copied from the local machine using AWS CLI**
- This step was intentionally done to **learn S3 access using IAM roles and AWS CLI**

**Code Location:**  
- `frontend/index.html`  
- `frontend/script.js`  
- `frontend/style.css`

---

### **Step 7: Final Working Application**

- Website successfully fetches and displays the visitor count
- Counter increments on every page refresh
- Application is served securely via CloudFront with a custom domain

**Screenshot:**  
`screenshots/step-7-live-website.png`

---

## 🧠 Key Learnings

- Implemented a **fully serverless architecture**
- Secured S3 using **CloudFront private access**
- Configured **custom domain and DNS** using Route 53
- Implemented **atomic counters** using DynamoDB
- Followed IAM best practices using **roles instead of access keys**
- Deployed frontend assets using **AWS CLI**

---

## 🧪 Technologies Used

- HTML, CSS, JavaScript  
- Amazon S3  
- Amazon CloudFront  
- Amazon Route 53  
- AWS Lambda  
- Amazon DynamoDB  
- AWS IAM  
- AWS CLI  

---

