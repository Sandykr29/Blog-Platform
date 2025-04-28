# 📝 Blog Platform

A full-stack blog platform where users can register, log in, create posts, view posts, and interact with other users' posts.

---

## 🌐 Deployment Links

- **Frontend**: [https://subtle-babka-963171.netlify.app/](https://subtle-babka-963171.netlify.app/)
- **Backend**: [https://blog-platform-osks.onrender.com/](https://blog-platform-osks.onrender.com/)

---

## 📜 Complete API Routes

### 1. `POST /api/auth/register`
👉 **Register a new user**

- **Body (JSON)**

```json
{
  "firstName": "Aman",
  "lastName": "Kumar",
  "email": "aman123@gmail.com",
  "location": "Lucknow",
  "password": "password123"
}
```

✅ **Response:**  
```json
{
  "msg": "Registration Successful"
}
```

---

### 2. `POST /api/auth/login`
👉 **Login and get Token**

- **Body (JSON)**

```json
{
  "email": "aman123@gmail.com",
  "password": "password123"
}
```

✅ **Response:**  
```json
{
  "msg": "Login Successful",
  "token": "JWT_TOKEN_HERE"
}
```

---

### 3. `GET /api/auth/me`
👉 **Get logged-in user details**

- **Headers**

```bash
Authorization: Bearer JWT_TOKEN_HERE
```

✅ **Response:**  
```json
{
  "_id": "66116bfe289b8c5162b02dfb",
  "firstName": "Aman",
  "lastName": "Kumar",
  "email": "aman123@gmail.com",
  "location": "Lucknow",
  "isAdmin": false,
  "createdAt": "2024-04-05T10:30:00.000Z",
  "updatedAt": "2024-04-05T10:30:00.000Z",
  "__v": 0
}
```

---

### 4. `POST /api/posts/create`
👉 **Create a new post**

- **Headers**

```bash
Authorization: Bearer JWT_TOKEN_HERE
```

- **Body (JSON)**

```json
{
  "firstName": "Aman",
  "lastName": "Kumar",
  "caption": "Enjoying my first post!",
  "post": "https://dummyimage.com/600x400/000/fff",
  "userId": "USER_ID_HERE"  // Get it from /me
}
```

✅ **Response:**  
```json
{
  "_id": "6611701c289b8c5162b02e1a",
  "firstName": "Aman",
  "lastName": "Kumar",
  "caption": "Enjoying my first post!",
  "post": "https://dummyimage.com/600x400/000/fff",
  "userId": "66116bfe289b8c5162b02dfb",
  "comment": [],
  "createdAt": "2024-04-05T10:50:00.000Z",
  "updatedAt": "2024-04-05T10:50:00.000Z",
  "__v": 0
}
```

---

### 5. `GET /api/posts/user/:id`
👉 **Get all posts by a specific user**

- **Headers**

```bash
Authorization: Bearer JWT_TOKEN_HERE
```

✅ Example URL:  
```
/api/posts/user/66116bfe289b8c5162b02dfb
```

✅ **Response:**  
```json
[
  {
    "_id": "6611701c289b8c5162b02e1a",
    "firstName": "Aman",
    "lastName": "Kumar",
    "caption": "Enjoying my first post!",
    "post": "https://dummyimage.com/600x400/000/fff",
    "userId": "66116bfe289b8c5162b02dfb",
    "comment": [],
    "createdAt": "2024-04-05T10:50:00.000Z",
    "updatedAt": "2024-04-05T10:50:00.000Z",
    "__v": 0
  }
]
```

---

### 6. `GET /api/posts/`
👉 **Get all posts from all users**

- **Headers**

```bash
Authorization: Bearer JWT_TOKEN_HERE
```

✅ **Response:**  
```json
[
  {
    "_id": "6611701c289b8c5162b02e1a",
    "firstName": "Aman",
    "lastName": "Kumar",
    "caption": "Enjoying my first post!",
    "post": "https://dummyimage.com/600x400/000/fff",
    "userId": "66116bfe289b8c5162b02dfb",
    "comment": [],
    "createdAt": "2024-04-05T10:50:00.000Z",
    "updatedAt": "2024-04-05T10:50:00.000Z",
    "__v": 0
  }
]
```

---

### 7. `PATCH /api/posts/update`
👉 **Update a post caption or image**

- **Headers**

```bash
Authorization: Bearer JWT_TOKEN_HERE
```

- **Body (JSON)**

```json
{
  "id": "6611701c289b8c5162b02e1a",
  "caption": "Updated caption!",
  "post": "https://dummyimage.com/600x400/111/fff",
  "userId": "66116bfe289b8c5162b02dfb"
}
```

✅ **Response:** (List of updated posts)

---

### 8. `DELETE /api/posts/delete/:id`
👉 **Delete a post**

- **Headers**

```bash
Authorization: Bearer JWT_TOKEN_HERE
```

✅ Example URL:  
```
/api/posts/delete/6611701c289b8c5162b02e1a
```

✅ **Response:**  
```json
{
  "msg": "Post deleted successfully"
}
```

---

### 9. `PATCH /api/posts/comment`
👉 **Add a comment to a post**

- **Headers**

```bash
Authorization: Bearer JWT_TOKEN_HERE
```

- **Body (JSON)**

```json
{
  "postId": "6611701c289b8c5162b02e1a",
  "firstName": "Ravi",
  "lastName": "Verma",
  "comment": "Awesome post!"
}
```

✅ **Response:**  
```json
{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```

---

## ✅ Things to Remember
- Every `POST`, `PATCH`, `DELETE`, `GET /me` — needs **Authorization header**  
  →  
  `Authorization: Bearer JWT_TOKEN_HERE`

