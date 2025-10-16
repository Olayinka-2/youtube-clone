# 🎬 YouTube Clone (React + YouTube Data API v3)

A responsive YouTube clone built with **React**, **Tailwind CSS**, and the **YouTube Data API v3**.  
This project replicates the core features of YouTube — video playback, channel info, and comments — with clean, component-based architecture.

---

## 🚀 Features

- 🎥 **Play videos** directly using embedded YouTube players  
- 🔍 **Fetch video details** (title, views, likes, upload date, description) from the YouTube API  
- 🧑‍💻 **Display channel data** such as channel name, profile image, and subscriber count  
- 💬 **Render comments** and simulate user interactions  
- 📱 **Fully responsive layout** built with modern CSS  
- ⚡ **Reusable React components** for scalability and clean code

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js** | UI framework |
| **Tailwind CSS** | Styling |
| **YouTube Data API v3** | Video and channel data |
| **Moment.js** | Date formatting |
| **React Router** | Routing between components |
| **JavaScript (ES6+)** | Core logic |

---

## 📁 Project Structure

youtube-clone/
├── src/
│ ├── components/
│ │ ├── Navbar/
│ │ ├── Sidebar/
│ │ ├── PlayVideo/
│ │ ├── Recommended/
│ ├── assets/
│ ├── data/
│ ├── App.js
│ └── index.js
├── public/
└── package.json

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Olayinka-2/youtube-clone.git
cd youtube-clone
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Add your YouTube API Key
Create a file named .env in the root directory and add:

env
Copy code
REACT_APP_YOUTUBE_API_KEY=your_api_key_here
4️⃣ Start the development server
bash
Copy code
npm run dev
🖼️ Screenshots
(Add screenshots of your app here — e.g. homepage, video player, comments section)

💡 Future Improvements
Add search functionality

Implement user authentication (login/signup)

Add dark/light theme toggle

Display real YouTube comment threads dynamically

🧑‍💻 Author
Israel Olayinka
Frontend Developer | React Enthusiast 
🔗 GitHub Profile

📜 License
This project is for learning and portfolio purposes only.