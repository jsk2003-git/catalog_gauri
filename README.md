This project implements a simplified version of Shamir's Secret Sharing algorithm. It reads encoded polynomial roots from a JSON file, decodes them, and uses Lagrange interpolation to find the constant term (c) of the polynomial.

Files:
shamir_secret.js: JavaScript code to decode roots and calculate the secret constant term.
input.json: Input data in JSON format.

Steps to run the code -
1) Ensure Node.js is Installed
Check by running node -v in your terminal. 

2) Navigate to the Project Folder
Open your terminal and use the cd command to change to your project directory:
cd C:/Users/DELL/Desktop/catalog

4) Verify Project Files
Ensure shamir_secret.js and input.json are present in the folder.

4 )Run the JavaScript Code
Execute the script with:
node shamir_secret.js

5 ) View the Output
Check the terminal for the calculated secret constant term.
