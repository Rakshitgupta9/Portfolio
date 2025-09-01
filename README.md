# Portfolio - Rakshit Gupta

A modern, responsive portfolio website showcasing skills, projects, and experience.

## Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Visitor Counter**: Real-time visitor tracking with MongoDB integration
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Project Showcase**: Detailed project pages with descriptions and links
- **Skills Display**: Interactive skills slider with icons
- **Contact Information**: Multiple ways to get in touch

## Visitor Counter Setup

The portfolio includes a MongoDB-powered visitor counter that tracks unique sessions.

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

   For development with auto-reload:
   ```bash
   npm run dev
   ```

3. **Access your portfolio:**
   - Open `http://localhost:3000` in your browser
   - The visitor counter will automatically connect to MongoDB

### MongoDB Configuration

The visitor counter uses the following MongoDB setup:
- **Database**: `portfolio`
- **Collection**: `Visitors`
- **Connection**: MongoDB Atlas cluster

The counter automatically initializes to 0 if the collection is empty.

## Project Structure

```
Portfolio/
├── index.html          # Main portfolio page
├── server.js           # Backend server with MongoDB integration
├── package.json        # Node.js dependencies
├── css/
│   └── style.css      # Main stylesheet
├── assets/             # Images and icons
├── pages/              # Additional pages (projects, resume)
├── projects/           # Individual project pages
└── docs/               # Documents (resume PDF)
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: Custom CSS with CSS Variables
- **Icons**: Font Awesome
- **Fonts**: Inter, Poppins (Google Fonts)

## Deployment

### Local Development
- Run `npm run dev` for development with auto-reload
- Access at `http://localhost:3000`

### Production Deployment
- Run `npm start` for production
- Set environment variables as needed
- Deploy to platforms like Heroku, Vercel, or your own server

## Customization

- **Colors**: Modify CSS variables in `css/style.css`
- **Content**: Update HTML files with your information
- **Styling**: Customize CSS classes and animations
- **Visitor Counter**: Modify MongoDB connection in `server.js`

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **Email**: guptarakshit9858@gmail.com
- **LinkedIn**: [Rakshit Gupta](https://www.linkedin.com/in/rakshit9/)
- **GitHub**: [Rakshitgupta9](https://github.com/Rakshitgupta9)
