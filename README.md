# 🌍 Hyanx Travel - A Modern Travel Platform

Hyanx Travel is a modern, full-featured frontend web application designed for travel agencies and tour booking platforms. The project features a highly responsive design and a clean user interface built using modern web technologies.

The current demo content showcases beautiful Philippine destinations like **Taal Volcano, Batangas** and **Mt. Daguldul, Batangas**.

## ✨ Key Features

* **Integrated Routing:** Uses `react-router-dom` for seamless navigation between pages: Home, About, Services, and Contact.
* **Fully Responsive Design:** The layout is optimized to ensure an excellent user experience across all device sizes, utilizing Tailwind CSS and media queries.
* **Reusable Components:** Key sections are modularized into reusable components like `DestinationData`, `ContactArea`, `Hero`, and `Footer`.
* **Modern Styling:** Styled efficiently using **Tailwind CSS v4**, adopting a utility-first approach for rapid and flexible UI development.
* **Hero Sections:** Dynamic hero banners with customizable images, titles, and call-to-action buttons.
* **Detailed Information Sections:** Includes dedicated areas for "Our History," "Our Mission," "Our Vision," and "Our Values."
* **Image Gallery:** Beautiful image showcase with hover effects and responsive grid layout.

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React 19** | Modern UI library with hooks and functional components |
| **React Router DOM v7** | Client-side routing and navigation |
| **Tailwind CSS v4** | Utility-first CSS framework |
| **Vite** | Fast build tool and development server |
| **ESLint** | Code quality and linting |
| **Font Awesome** | Professional icon library |

## 💻 Installation and Setup

Follow these steps to get the project up and running on your local machine:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 16.0.0 or higher) and [npm](https://www.npmjs.com/) installed.

### 1. Clone the Repository

```bash
git clone https://github.com/YourUsername/Hyanx-Travel.git
cd "Project 5 - Travel Website"
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

### 6. Run ESLint

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── main.jsx                 # Application entry point with React Router setup
├── App.jsx                  # Main app component
├── index.css                # Global base styles
├── App.css                  # App-specific styles
├── competence/              # Reusable components folder
│   ├── navbar.jsx           # Navigation bar component with mobile menu
│   ├── Hero.jsx             # Hero section with banner and overlay text
│   ├── destination.jsx      # Destination showcase section
│   ├── destinationData.jsx  # Individual destination card component
│   ├── trips.jsx            # Featured trips/tours section with cards
│   ├── footer.jsx           # Footer with links and social media
│   ├── contactArea.jsx      # Contact form component
│   ├── aboutText.jsx        # About page information sections
│   ├── navbar.css           # Navbar specific styles
│   ├── hero.css             # Hero section styles
│   └── destinationData.css  # Destination card styles
├── routes/                  # Page route components
│   ├── Home.jsx             # Home/landing page
│   ├── About.jsx            # About company page
│   ├── Service.jsx          # Services page
│   └── Contact.jsx          # Contact page
└── assets/                  # Static images and media files
    ├── trv.png              # Travel hero image
    ├── night.jpg            # Night destination image
    ├── 1.jpg to 10.jpg      # Destination and trip images
```

## 📖 Components Overview

### Navbar (`competence/navbar.jsx`)
- **Purpose:** Main navigation component with responsive mobile menu
- **Features:**
  - Hamburger menu toggle for mobile devices
  - Navigation links to Home, About, Service, Contact
  - Sign Up button
  - Social media icons
  - Smooth animations with Tailwind transitions

### Hero (`competence/Hero.jsx`)
- **Purpose:** Full-width banner section with image background
- **Props:**
  - `className` - CSS class name
  - `height` - Custom height (use Tailwind classes like `h-[104vh]`)
  - `image` - Background image import
  - `title` - Main heading text
  - `subtitle` - Subheading text
  - `buttonText` - CTA button label
- **Features:** Overlay text on image, centered content, responsive

### Destination (`competence/destination.jsx`)
- **Purpose:** Showcase featured travel destinations
- **Features:** Multiple destination cards with images and descriptions
- **Components Used:** DestinationData (child component)

### DestinationData (`competence/destinationData.jsx`)
- **Purpose:** Reusable destination card component
- **Props:**
  - `heading` - Destination name/title
  - `description` - Destination details
  - `image1`, `image2` - Featured images
  - `order` - Tailwind order class for alternating layout
- **Features:** Side-by-side image and text layout, responsive grid

### Trips (`competence/trips.jsx`)
- **Purpose:** Display recent trips and tour packages
- **Features:**
  - Grid layout that adapts to screen size
  - Card-based design with images
  - Hover scale effect on images
  - Trip descriptions and details

### ContactArea (`competence/contactArea.jsx`)
- **Purpose:** Contact form for user inquiries
- **Fields:** Name, Email, Subject, Message
- **Features:** Responsive input layout, submit button with hover effects

### Footer (`competence/footer.jsx`)
- **Purpose:** Website footer with navigation and social links
- **Sections:**
  - Brand information
  - Social media icons (Facebook, Instagram, Twitter)
  - Quick links (Project, Community, Help, Others)
  - Responsive multi-column layout

## 🎨 Styling

This project uses **Tailwind CSS v4** for comprehensive styling:

### Key Styling Approaches:
- **Utility-first:** Tailwind classes for layout, spacing, colors
- **Responsive:** Mobile-first with breakpoints like `max-md:`, `max-[965px]:`
- **Custom CSS:** Component-specific styling in dedicated `.css` files
- **Hover Effects:** Transform and scale effects for interactive elements
- **Dark Mode Ready:** Black backgrounds and white text in footer


## 🔗 Pages and Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, destinations, featured trips, footer |
| `/about` | About | Company information with hero banner |
| `/service` | Service | Available services and tour packages |
| `/contact` | Contact | Contact form and messaging area |

## 📦 Dependencies

```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.1.17",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.10.1",
    "tailwindcss": "^4.1.17"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.2",
    "@types/react-dom": "^19.2.2",
    "@vitejs/plugin-react": "^5.1.0",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "vite": "^7.2.2"
  }
}
```

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Project metadata, dependencies, and scripts |
| `vite.config.js` | Vite build tool configuration with React plugin |
| `eslint.config.js` | Code quality rules and linting configuration |
| `tailwind.config.js` | Tailwind CSS customization settings |
| `index.html` | HTML entry point with root div |


## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Add YourFeature'`
4. Push to branch: `git push origin feature/YourFeature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License. See LICENSE file for details.

## 👤 Author

**Hyanx** - Travel Website Project  
Created December 2025

## 🎯 Roadmap

**Phase 1 (Current):** Core UI and routing
**Phase 2:** API integration for dynamic content
**Phase 3:** User authentication and bookings
**Phase 4:** Payment processing
**Phase 5:** Advanced search and filtering

---

**Last Updated:** December 10, 2025  
**Status:** Active Development ⚡
