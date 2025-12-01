# Backend API Requirements for Flash Forward Foundation

This document outlines the API endpoints that the backend team needs to implement to support the new frontend features.

## Authentication

All admin endpoints require Bearer token authentication:
```
Authorization: Bearer <token>
```

---

## Shop API Endpoints

### GET /api/products
Fetch all available products for the shop.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Solar Flashlight Classic",
    "price": 25.00,
    "description": "Our flagship solar-powered flashlight...",
    "image": "https://example.com/image.jpg",
    "donationCount": 1
  }
]
```

### POST /api/orders
Create a new order with purchase and donation information.

**Request Body:**
```json
{
  "customer": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "555-1234",
    "address": "123 Main St",
    "city": "Seattle",
    "state": "WA",
    "zipCode": "98101",
    "country": "United States"
  },
  "items": [
    {
      "id": 1,
      "name": "Solar Flashlight Classic",
      "price": 25.00,
      "quantity": 2,
      "donationCount": 1
    }
  ],
  "total": 50.00,
  "donationCount": 2
}
```

**Response:**
```json
{
  "orderId": "abc123",
  "status": "pending",
  "checkoutUrl": "https://stripe.com/checkout/..."
}
```

### GET /api/donations/count
Get the total number of flashlights donated.

**Response:**
```json
{
  "count": 150
}
```

---

## Newsletter API Endpoint

### POST /api/newsletter/subscribe
Subscribe an email address to the MailChimp newsletter.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Successfully subscribed"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Email already subscribed" // or other error message
}
```

**Backend Implementation Notes:**
- Use MailChimp API key and Audience ID provided by client
- Handle duplicate email errors gracefully
- Send double opt-in confirmation email via MailChimp

---

## Blog API Endpoints

### GET /api/blogs
Fetch all blog posts (published and drafts for admin).

**Query Parameters:**
- `published` (optional): `true` to get only published posts

**Response:**
```json
[
  {
    "id": 1,
    "title": "Blog Post Title",
    "category": "Impact",
    "author": "John Doe",
    "excerpt": "Brief description...",
    "content": "Full blog post content...",
    "image": "https://example.com/image.jpg",
    "featured": false,
    "published": true,
    "date": "2024-12-15",
    "readTime": "5 min read"
  }
]
```

### GET /api/blogs/:id
Fetch a single blog post by ID.

**Response:**
Same structure as individual blog object above.

### POST /api/blogs
Create a new blog post (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Request Body:**
```json
{
  "title": "New Blog Post",
  "category": "Impact",
  "author": "Jane Smith",
  "excerpt": "Brief description...",
  "content": "Full blog post content in markdown...",
  "image": "https://example.com/image.jpg",
  "featured": false,
  "published": true
}
```

**Response:**
```json
{
  "id": 7,
  "title": "New Blog Post",
  // ... rest of blog data
  "date": "2024-12-20"
}
```

### PUT /api/blogs/:id
Update an existing blog post (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Request Body:** Same as POST /api/blogs

**Response:** Updated blog object

### DELETE /api/blogs/:id
Delete a blog post (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Response:**
```json
{
  "success": true,
  "message": "Blog post deleted"
}
```

---

## Admin Authentication Endpoint

### POST /api/auth/admin
Authenticate admin user and return token.

**Request Body:**
```json
{
  "username": "admin",
  "password": "secure_password"
}
```

**Success Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "username": "admin",
    "role": "admin"
  }
}
```

**Error Response (401):**
```json
{
  "message": "Invalid credentials"
}
```

---

## Notes for Backend Team

1. **Stripe Integration**: The `/api/orders` endpoint should create a Stripe checkout session and return the URL for the frontend to redirect to.

2. **MailChimp Integration**: Use the MailChimp Marketing API v3 to add subscribers to the audience list.

3. **Database Schema**: You'll need tables for:
   - Products (id, name, price, description, image, donationCount)
   - Orders (id, customerId, items, total, donationCount, status, createdAt)
   - Blogs (id, title, category, author, excerpt, content, image, featured, published, date)
   - Admin users (id, username, password_hash, role)

4. **CORS**: Ensure CORS is configured to allow requests from the frontend domain.

5. **Rate Limiting**: Implement rate limiting on newsletter subscription to prevent abuse.

6. **Error Handling**: Return consistent error formats across all endpoints.

7. **Validation**: Validate all input data server-side before processing.

---

## Testing Endpoints

For development, you can use sample data until the real backend is ready. The frontend includes fallback sample data for the shop and will gracefully handle API failures.

## Questions?

Contact the frontend developer if any endpoint specifications need clarification.
