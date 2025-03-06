# TCG Card Collector

The goal of this repository is to create a digital binder application for trading card game enthusiasts to organize and showcase their card collections with an interactive, book-like interface.

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

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

- Inspired by physical trading card binders and collectors worldwide
