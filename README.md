# TCG Card Collector

A digital binder application for trading card game enthusiasts to organize and showcase their card collections with an interactive, book-like interface.

![TCG Card Collector Screenshot](https://via.placeholder.com/800x450/1e1e1e/ffffff?text=TCG+Card+Collector)

## Purpose

TCG Card Collector provides collectors with an intuitive digital alternative to physical card binders. The application allows users to:

- Organize their trading card game cards in a virtual binder
- Browse through their collection with realistic page-turning animations
- Rearrange cards using drag-and-drop functionality
- Categorize cards by rarity and other attributes
- Showcase their collection with a clean, aesthetic interface

## Features

- **Interactive Card Binder**: Realistic book/binder interface with page-turning animations
- **Card Organization**: Drag-and-drop interface for rearranging cards
- **Visual Card Display**: Cards are displayed with appropriate visual styling based on rarity
- **Pagination**: Navigate through your collection with intuitive page controls
- **Responsive Design**: Adapts to different screen sizes

## Technologies Used

- React.js
- React DnD (Drag and Drop)
- CSS3 with animations and 3D transforms
- JavaScript (ES6+)

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) (v14 or newer) and npm installed

2. Clone this repository:
   ```bash
   git clone <repository-url>
   cd card-collector
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Usage

### Viewing Your Collection

- Cards are organized into pages within the binder
- Use the "Previous Page" and "Next Page" buttons to navigate
- Enjoy the realistic page turning animation when flipping through pages

### Organizing Cards

- Click and drag cards to rearrange them within a page
- Cards maintain their order across browsing sessions (when connected to backend storage)

### Adding Cards to Collection

*(Feature in development)*

- Future versions will allow adding new cards to your collection
- Import from popular TCG databases
- Add custom cards with your own images and information

## Project Structure

```
card-collector/
├── public/              # Public assets
├── src/                 # Source code
│   ├── assets/          # Images and static resources
│   │   └── sounds/      # Sound effects
│   ├── components/      # React components
│   │   ├── Card.js      # Individual card component
│   │   ├── CardBinder.js # Binder component with pagination
│   │   ├── Header.js    # Application header
│   │   └── PageFlip.js  # Page turning animation component
│   ├── App.js           # Main application component
│   ├── index.js         # Application entry point
│   └── styles/          # CSS styles
└── package.json         # Project dependencies
```

## Future Enhancements

- User authentication and cloud storage
- Card search and filtering
- Multiple binder organization
- Import/export collection data
- Mobile application support
- Card statistics and collection value tracking
- Integration with TCG APIs for card data and images
- Card trading with other collectors

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

- Inspired by physical trading card binders and collectors worldwide
- Built with React and modern web technologies
