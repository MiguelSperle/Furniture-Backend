# Furniture | Backend 

Summarizing, in this project, we have some routes that have some functionalities, how create an account for user,
user can log in with it, we have also a route that update token constantly to that user never log out and we have a route where you can get the products

## Table of Contents
- [My Process Below](#my-process-below)
  - [Built with](#built-with)
  - [What I improved and learned](#what-i-improved-and-learned)
- [Links](#Links)
- [File env](#file-env)
- [How to Clone this Repository](#how-to-clone-this-repository)
---------------

## My Process Below

### Built with

<ul>
  <li>Fastify/Node JS</li>
  <li>TypeScript</li>
  <li>Prisma</li>
  <li>Axios</li>
  <li>Zod</li>
</ul>

---------------


### What I improved and learned

I was able to learn how to create and use Use Case and Data Transfer Object, I also learned a little about a architecture called S.O.L.I.D and I improved my logic doing new functionalities.

---------------

### Links

- Repository: [Click-me](https://github.com/MiguelSperle/Ecommerce-Mobile-Backend)
- Linkedin: [Click-me](https://www.linkedin.com/in/miguel-sperle-851916298/)

---------------

### File .env

```
# Database
DATABASE_URL="file:./dev.db"
```

```
# SECRET
JWT_SECRET_KEY="you can invent your key"
```

```
# SERVER
PORT=3333
```

Attention ❗❗❗

if you wanna use this project, you need file .env.

---------------


### How to Clone this Repository


```⌨ Clone the repository```

```
git clone https://github.com/MiguelSperle/Furniture-Backend.git
```

```📂 Access at folder```

```
cd Furniture-Backend
```

```📡 Install dependencies```

```
npm install or yarn install
```

```📡 Now, you're going to use this command for database```

```
npx prisma generate
```

```
npx prisma migrate deploy
```

```
npx prisma studio
```


```⭐ Start the project```

```
npm run dev / yarn run dev
```


### Email and Password to enter in the frontend

```
Email: Teste@gmail.com
```

```
password: teste123
```