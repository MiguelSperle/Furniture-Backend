# Ecommerce | Mobile Backend

Summarizing, in this project, we have some routes that have some functionalities, how create an account for user,
user can log in with it, we have also a route that update token constantly to that user never log out and we have a route where you can get the products

## Table of Contents
- [My Process Below](#my-process-below)
  - [Built with](#built-with)
  - [What I improved and learned](#what-i-improved-and-learned)
- [Links](#Links)
- [How to Clone this Repository](#how-to-clone-this-repository)
- [File .env](#file-.env)
---------------

## My Process Below

### Built with

<ul>
  <li>Fastify/Node JS</li>
  <li>TypeScript</li>
  <li>Prisma</li>
  <li>Axios</li>
</ul>

---------------


### What I improved and learned

I was able to learn how to create and use Use Case and Data Transfer Object, I also learned a little about a architecture called S.O.L.I.D and I improved my logic doing new functionalities.

---------------

### Links

- Repository: [Click-me](https://github.com/MiguelSperle/Ecommerce-Mobile-Backend)
- Linkedin: [Click-me](#Links)

---------------

### File .env

```
# Database
DATABASE_URL="file:./dev.db"
```

```
# CLOUDINARY NUVEM
CLOUDINARY_CLOUD_NAME="aaaaaaaa" this is an example
CLOUDINARY_API_KEY="1234567" this is an example
CLOUDINARY_API_SECRET="aaaaaaaaaa" this is an example
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

if you wanna to use this project, you need file .env.

---------------


### How to Clone this Repository


```⌨ Clone the repository```

```
git clone https://github.com/MiguelSperle/Ecommerce-Mobile-Backend.git
```

```📂 Access at folder```

```
cd Ecommerce-Mobile-Backend
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


```⭐ Start the project```

```
npm run dev / yarn run dev
```
