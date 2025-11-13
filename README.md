# Event Scheduling Application

A full-stack web application for scheduling and managing events. Users can create events, join existing events,delete it, update it , and track attendance with a modern React frontend and Express.js backend powered by MongoDB.

## ✨ Features

### User Management
- **User Registration**: Create new user accounts with username, email, and password
- **User Login**: Secure authentication with JWT tokens
- **Session Management**: Cookie-based session handling with JWT verification
- **Current User Retrieval**: Get authenticated user information

### Event Management
- **Create Events**: Users can create new events with title, description, location, and attendee list
- **View All Events**: Browse all available events in the system
- **Join Events**: Users can join events they are interested in
- **Leave Events**: Users can remove themselves from events
- **Edit Events**: Modify event details
- **Delete Events**: Remove events from the system
- **Attendee Tracking**: Keep track of who is attending each event

### Frontend Experience
- **Responsive Design**: Tailwind CSS styling for mobile-first design
- **Authentication Flow**: Seamless login and signup experience
- **Navigation**: Protected routes based on authentication status
- **Real-time State Management**: React Context API for global state management

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js v5.1
- **Database**: MongoDB with Mongoose v8.19.3
- **Authentication**: JWT (JSON Web Tokens)
- **Middleware**: 
  - CORS for cross-origin requests
  - Cookie Parser for cookie handling
  - dotenv for environment variables
- **Development**: Nodemon for auto-reload

### Frontend
- **Framework**: React v19.2
- **Build Tool**: Vite v7.2
- **Styling**: Tailwind CSS v4.1
- **HTTP Client**: Axios v1.13
- **Routing**: React Router DOM v7.9
- **State Management**: React Context API
- **Linting**: ESLint with React support

## 📁 Project Structure

```
EventSchedulingAssignment/
├── backend/
│   ├── index.js                 # Express server setup
│   ├── package.json            
│   ├── config/
│   │   ├── db.js              # MongoDB connection
│   │   └── token.js           # JWT token generation
│   ├── controllers/
│   │   ├── userController.js  # User auth logic
│   │   └── eventController.js # Event CRUD operations
│   ├── middlewares/
│   │   └── isAuth.js          # JWT verification middleware
│   ├── models/
│   │   ├── userModel.js       # User schema
│   │   └── eventModel.js      # Event schema
│   └── routes/
│       ├── userRoutes.js      # User endpoints
│       └── eventRoute.js      # Event endpoints
│
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── src/
│   │   ├── main.jsx           # React app entry
│   │   ├── App.jsx            # Main app component
│   │   ├── index.css          # Global styles
│   │   ├── assets/            # Static assets
│   │   ├── components/
│   │   │   ├── Nav.jsx        # Navigation bar
│   │   │   ├── Login.jsx      # Login form
│   │   │   ├── Signup.jsx     # Signup form
│   │   │   └── AddEvent.jsx   # Create event form
│   │   ├── pages/
│   │   │   ├── Event.jsx      # Events listing page
│   │   │   └── profile.jsx    # User profile page
│   │   └── context/
│   │       ├── UserContext.jsx   # User state management
│   │       └── EventContext.jsx  # Event state management
│   └── public/                 # Public assets
│
└── README.md
```

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/event-scheduler
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory (if needed):
```env
VITE_API_URL=http://localhost:3000
```

## 🚀 Running the Application

### Backend Development Server

From the `backend` directory:
```bash
npm run dev
```
The backend server will start on `http://localhost:3000`

### Frontend Development Server

From the `frontend` directory:
```bash
npm run dev
```
The frontend will typically run on `http://localhost:5173`

### Building for Production

Frontend build:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

### Linting

Check code quality:
```bash
npm run lint
```

## 🔌 API Endpoints

### User Endpoints

#### Register User
- **POST** `/api/user/registerUser`
- **Body**: `{ userName, email, password }`
- **Response**: User object with JWT cookie set
- **Status**: 201 Created

#### Login User
- **POST** `/api/user/login`
- **Body**: `{ email, password }`
- **Response**: User object with JWT cookie set
- **Status**: 200 OK

#### Get Current User
- **GET** `/api/user/getCurrentUser`
- **Auth**: Required (JWT token in cookies)
- **Response**: Current authenticated user (without password)
- **Status**: 200 OK

### Event Endpoints

#### Create Event
- **POST** `/api/event/createEvent`
- **Auth**: Required
- **Body**: `{ title, description, location }`
- **Response**: Created event object
- **Status**: 201 Created

#### Get All Events
- **GET** `/api/event/getAllEvents`
- **Auth**: Required
- **Response**: Array of all events
- **Status**: 200 OK

#### Join Event
- **POST** `/api/event/joinEvent`
- **Auth**: Required
- **Body**: `{ eventId }`
- **Response**: Updated event object

#### Leave Event
- **POST** `/api/event/leaveEvent`
- **Auth**: Required
- **Body**: `{ eventId }`
- **Response**: Updated event object

#### Edit Event
- **POST** `/api/event/editEvent`
- **Auth**: Required
- **Body**: `{ eventId, title, description, location }`
- **Response**: Updated event object

#### Delete Event
- **POST** `/api/event/deleteEvent`
- **Auth**: Required
- **Body**: `{ eventId }`
- **Response**: Success message

## 📍 Frontend Routes

| Route | Component | Auth Required | Description |
|-------|-----------|---|---|
| `/` | Event.jsx | Yes | Home page - View all events |
| `/login` | Login.jsx | No | User login page |
| `/signup` | Signup.jsx | No | User registration page |
| `/addEvent` | AddEvent.jsx | Yes | Create new event |
| `/profile` | profile.jsx | Yes | User profile page |

## 🏗 Architecture

### Frontend Architecture

**React Context API Pattern**:
- **UserContext**: Manages global user authentication state
- **EventContext**: Manages global event state and API endpoints
- Components consume context via `useContext` hook
- State updates trigger re-renders across the application

**Component Hierarchy**:
```
App
├── Nav (if authenticated)
└── Routes
    ├── /login → Login component
    ├── /signup → Signup component
    ├── / → Event page (protected)
    └── /addEvent → AddEvent component (protected)
```

### Backend Architecture

**MVC Pattern**:
- **Models**: Define data schemas (User, Event)
- **Controllers**: Handle business logic and API responses
- **Routes**: Define API endpoints
- **Middleware**: Handle authentication verification
- **Config**: Database and JWT configuration

**Authentication Flow**:
1. User registers/logs in
2. Backend validates credentials
3. JWT token generated and set as HTTP-only cookie
4. Subsequent requests verify token via `isAuth` middleware
5. `req.userId` extracted from token for protected operations

### Database Schema

**User Model**:
```javascript
{
  userName: String (required),
  email: String (required),
  password: String (required),
  timestamps: true
}
```

**Event Model**:
```javascript
{
  title: String (required),
  description: String (required),
  location: String (required),
  attendies: [String], // Array of attendee emails/IDs
  timestamps: true
}
```

## 🔒 Security

### Current Security Features
- **JWT Authentication**: Token-based API protection
- **HTTP-Only Cookies**: JWT stored in secure cookies
- **CORS Configuration**: Limited to localhost:5173
- **SameSite Cookies**: Set to "strict" mode for CSRF protection
- **Protected Routes**: Frontend routes protected based on auth status
- **Password in Cookies**: Tokens verify authenticated state

### Security Considerations for Production
- ⚠️ **Password Hashing**: TODO - Implement bcrypt for password hashing
- ⚠️ **Input Validation**: Enhance email and password validation
- ⚠️ **HTTPS**: Use secure: true for cookies in production
- ⚠️ **Environment Variables**: Store sensitive data securely
- ⚠️ **Rate Limiting**: Implement rate limiting on authentication endpoints
- ⚠️ **Error Handling**: Avoid exposing sensitive error information

## 🔄 Data Flow

### Authentication Flow
```
User Input → Login Component → Axios POST → Backend Controller 
→ User Validation → JWT Generation → Cookie Set → Frontend State Update 
→ Protected Routes Accessible
```

### Event Management Flow
```
User Action → Component → Axios API Call → isAuth Middleware 
→ Controller Logic → MongoDB Operation → Response → Context Update 
→ UI Re-render
```

## 📝 Key Implementation Details

### CORS Configuration
- Restricted to `http://localhost:5173` (frontend origin)
- Credentials enabled for cookie-based authentication
- Set in backend `index.js`

### Cookie Parser
- Extracts JWT token from request cookies
- Tokens verified by `isAuth` middleware
- 7-day expiration set on cookie

### Event Attendee Optimization
- Attendees stored as array of strings (IDs/emails)
- Avoids storing full user objects to reduce document size
- Prevents exceeding MongoDB's 16MB document limit
- Future optimization: Create separate Attendance model for scalability

### Context API Usage
- **UserContext**: Initialized on app load with `getCurrentUser()` API call
- **EventContext**: Events fetched only when user is authenticated
- Prevents unnecessary API calls with conditional useEffect hooks

## 🐛 Known Issues & TODO

### Backend
- [ ] Password hashing not implemented (using plain text comparison)
- [ ] Input validation incomplete
- [ ] Error handling needs improvement
- [ ] No request logging/monitoring

### Frontend
- [ ] No form validation feedback
- [ ] Missing error messages for failed operations
- [ ] No loading states during API calls
- [ ] Profile page not fully implemented

### General
- [ ] No unit or integration tests
- [ ] No API documentation (Swagger/OpenAPI)
- [ ] No pagination for large event lists
- [ ] Missing event filtering/search functionality

## 🚀 Future Improvements

1. **Enhanced Features**
   - Event search and filtering
   - Event categories/tags
   - Event date/time scheduling
   - Email notifications
   - Event image uploads
   - User profiles with avatar

2. **Performance**
   - Implement pagination for events
   - Add caching mechanisms
   - Optimize database queries with indexes
   - Lazy loading for large datasets

3. **Security**
   - Password hashing with bcrypt
   - Email verification
   - Rate limiting
   - Input sanitization

4. **Development**
   - Add comprehensive testing (Jest, Vitest)
   - Set up CI/CD pipeline
   - Add API documentation
   - Implement logging system
   - Deploy to production (Heroku, AWS, Vercel)

5. **User Experience**
   - Dark/light theme toggle
   - Event notifications
   - Calendar view
   - Event map integration
   - Social sharing features

## 📄 License

ISC

## 👤 Author

Created as an assignment project for cloud-based event scheduling.

---

**Last Updated**: November 13, 2025

For questions or issues, please open an issue in the repository.
