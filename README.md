# Gold Price Web Project Description

This project is a web application that displays the current gold prices. It provides real-time updates on gold prices across the country. The application aims to offer users a comprehensive view of the gold market trends and fluctuations, aiding them in making informed decisions regarding gold investments and transactions.

## Technology Used

The web application is built using Vue.js for the frontend and Node.js for the backend. It utilizes Axios for API requests and Vue Router for navigation.

## Command line

frontend: docker build -t haidinhthanh/frontend . --network=host --> docker push haidinhthanh/frontend
backend: docker build -t haidinhthanh/backend . --> docker push haidinhthanh/backend


- Để run image:  docker run -d -p 3005:3005 haidinhthanh/frontend
- 