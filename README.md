Timeless Watch Angular Project - Technical Documentation
1. Overview
The Timeless Watch Website is an Angular-based project designed for showcasing and managing an online watch store. The site allows users to browse through different categories of watches, view details of each product, and manage orders via checkout processes. The website is built using Angular 18 and is deployed on Netlify.
Netify Link :
https://6710b12a21719f9c0b533a68-timeless202.netlify.app/
GitHub Link :
https://github.com/AyaMagdy27/Watch_Angular_Project

Key Features:
Product listing and detailed view.
Checkout and payment management.
Dynamic pricing calculations.
Responsive and modern UI.
2. Project Structure
The project follows the typical Angular application structure, with key directories for components, assets, and routing.
Folder Structure:

/src
  /app
    /components
      /checkout
      /home
      /product-list
      /page-title
    /services
      /product-service.ts
    /models
      /product.ts
  /assets
  /environments

/app/components: Contains Angular components like checkout, home, product-list, each representing a view of the application.
/services: Contains service classes for data fetching and business logic (e.g., ProductService).
/models: Includes data models such as Product, used to define the structure of data handled by the components.
Key Components:
Home Component: The landing page of the website where featured watches are displayed.
Product List Component: Displays the list of available watches.
Checkout Component: Handles the payment and shipping process, dynamically calculating total prices.
Page Title Component: A reusable component for rendering page titles.
3. Installation and Setup
To set up the project locally, follow these steps:
Prerequisites:
Angular CLI: 18.2.8
Node: 22.9.0
Package Manager: npm 10.8.3
Steps:
Clone the repository:

git clone https://github.com/AyaMagdy27/Watch_Angular_Project.git
cd Watch_Angular_Project


Create Component for the Website
ng generate component component-name

 
Install dependencies:

npm install


Run the development server:

ng serve
This will start the application on http://localhost:4200/.
Build the project for production:

ng build --configuration production


4. Deployment
The website is deployed on Netlify, following these steps:
Build the project: Run the following command to build the project for production:

ng build --configuration production


Deploy on Netlify: Once the build is complete, deploy the /dist/first-angular-app directory to Netlify using the following command:

netlify deploy --prod --dir=dist/first-angular-app


Ensure that the netlify.toml is correctly set up with the appropriate build commands and publish directory.
Example netlify.toml:
[build]
  command = "npm run build"
  publish = "dist/first-angular-app"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

5. Technologies Used
Angular 18: The front-end framework for building the website.
TypeScript: For adding type safety to the JavaScript code.
HTML5/CSS3: For structuring and styling the website.
GitHub : for easy Access to the update codes.
Netlify: For deployment and hosting.
6. Features
Dynamic Product Listing: Displays watches with the option to filter and view details of each product.
Checkout System: Users can select shipping methods and payment options, and the system dynamically calculates the total price.
Responsive Design: Ensures the site works well on both desktop and mobile devices.
7. Usage
Once the project is deployed, users can:
Browse Watches: View a wide selection of watches.
Product Details: Click on a product to see more details, including price, description, and images.
Add to Cart: Select shipping and payment options during checkout, and see dynamic updates to the total price.
8. Troubleshooting
Common Issues:
Page Not Found on Netlify: Ensure that the netlify.toml file includes the redirect rule to route all traffic to index.html.
Build Failures: Make sure all Angular dependencies are installed, and the correct Node.js version is being used.
9. Contribution
If you want to contribute to this project:
Clone the repository.from Github to local Machine  (git clone https://github.com/AyaMagdy27/Watch_Angular_Project.git ).
Add Files to GitHub  (git add .).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push).
Pull to get the latest version of the Code. ( git  pull ).
10. License
This project is open-source and available under the MIT License.

