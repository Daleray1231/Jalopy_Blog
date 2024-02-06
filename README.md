# Jalopy Blog
  
  ![alt text](public/assets/images/jolapy-blog-screenshot.png)  
    
## Table of Contents
1. [About The Project](#about-the-project)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Acknowledgments](#acknowledgments)

## About The Project

**Description** - Jalopy Blog is a platform designed for automobile owners to share their opinions and reviews about cars manufactured between the years 2000 and 2023. The blog features the most popular makes and models within this specified time range.

**Motivation for Development** - In today's digital landscape, users often have to navigate through Reddit threads or rely on professional reviews. Jalopy Blog bridges the gap, providing a space for everyday car enthusiasts to connect and share their experiences.



## Installation
1. Clone the repository from [GitHub](https://github.com/Daleray1231/Jalopy_Blog) to your local device.

2. Run the following command in your terminal:
   ```bash
   npm install
   ```

3. Create a .env file and verify SQL credentials.

4. Run the following commands in your terminal:

```bash
Copy code
mysql -u root -p
```
5. Enter your password, then run:

```bash
Copy code
use jalopy_db;
source (schema file path);
source (seeds file path);
quit;
```

6. Run the following command in your terminal:

```bash
Copy code
npm run start
```

## Usage
[GitHub Repository](https://github.com/Daleray1231/Jalopy_Blog)    
[Heroku Deployed Application](https://rocky-dusk-39754-e35dc5364bcd.herokuapp.com)
