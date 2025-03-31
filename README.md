# Flask Portfolio

A modern portfolio website built with React and Flask. This project features a responsive design, showcasing professional experience, projects, and skills in an elegant interface.

## Features

- **React Frontend**: Built with React, TypeScript, and Shadcn UI components
- **Flask Backend**: Serves the built React application
- **Responsive Design**: Looks great on all devices
- **Modern UI**: Clean, professional interface with animations
- **Portfolio Sections**: About, Projects, Services, and Contact sections

## Technologies Used

- **Frontend**:
  - React 18
  - TypeScript
  - Tailwind CSS
  - Shadcn UI
  - Framer Motion for animations
  - React Router for client-side routing

- **Backend**:
  - Flask 2.2
  - Gunicorn (for production)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Python 3.8 or higher
- Git

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/PRATS-gits/flask-portfolio.git
   cd flask-portfolio
   ```

2. Install frontend dependencies:
   ```
   npm install
   ```

3. Install backend dependencies:
   ```
   pip install -r requirements.txt
   ```

### Development

1. Build the React app:
   ```
   npm run build
   ```

2. Start the Flask server:
   ```
   python app.py
   ```

3. Open your browser and navigate to `http://localhost:5000`

## Deployment

### GitHub Pages

This repository is configured to be deployed to GitHub Pages using GitHub Actions.

1. Push your changes to the main branch:
   ```
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. GitHub Actions will automatically build the React app and deploy it to GitHub Pages.

## License

This project is licensed for educational purposes only. See the [LICENSE](LICENSE) file for more information.

## Acknowledgments

- React Team for the amazing frontend library
- Flask Team for the lightweight backend framework
- Shadcn UI for the beautiful components
