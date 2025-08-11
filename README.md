# AI‑QuickBlog

**AI‑Powered Blogging Platform** — a full-stack MERN application integrated with **Google Gemini** and **ImageKit**, offering AI-generated content, image optimization, and a seamless writing experience.

---

## 🚀 Features

- **AI-Generated Content**: Get instant headlines, paragraph suggestions, or complete drafts using Google Gemini API.
- **Image Upload & Optimization**: Users can upload images which are optimized via ImageKit, resized/compressed and served through CDN.
- **Secure User Authentication**: JWT‑based login and registration with protected routes for content creation and editing.
- **Rich Markdown Editor**: Write in Markdown with live preview; supports formatting, lists, code blocks, etc.
- **Responsive UI**: Built with React and Tailwind CSS, optimized for desktops and mobile devices.
- **Clean API Architecture**: RESTful backend with modular routes/controllers and MongoDB via Mongoose.

---

## 🧱 Tech Stack

- **Frontend**: React, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **AI Integration**: Google Gemini API
- **Media Storage**: ImageKit
- **Authentication**: JWT
- **Deployment**: Vercel 

---

## 🔧 Installation & Setup

1. **Clone the repository**
   
   ```bash
   git clone https://github.com/Deepak-Mahanta/AI‑quickblog.git
   cd AI‑quickblog
2. **Install dependencies**
   
   ```bash
   cd server && npm install
   cd client && npm install
3. **Configure environment variables (both server/.env and client/.env)**
   
   ```bash
   VITE_BASE_URL = http://localhost:5000 (client side .env)

   //(server side .env)
   PORT=5000
   MONGO_URI=<MongoDB connection URI>
   JWT_SECRET=<Your JWT secret key>
   GEMINI_API_KEY=<Google Gemini API key>
   IMAGEKIT_PUBLIC_KEY=<ImageKit public key>
   IMAGEKIT_PRIVATE_KEY=<ImageKit private key>
   IMAGEKIT_URL_ENDPOINT=<ImageKit base URL>
4. **Start servers**
  
   ```bash
   cd client && npm run dev
   cd server && npm run server

## 🧭 Usage Guide
- Register or log in to your account.
- Create a new post: You can type manually or click the “Generate with AI” button.
- Upload an image (which will be optimized and served via ImageKit).
- Preview your post in Markdown before publishing.
- View all posts on the homepage, edit or delete your own posts.

## 🌱 Future Improvements
- Add real-time collaborative editing (like Google Docs).
- Integrate post scheduling, auto-drafts, and reminders.
- Expand AI capabilities by training a custom LLM or fine-tuning prompts.

## 🙌 Contributions
- Feel free to open issues or contribute — pull requests are welcome!
