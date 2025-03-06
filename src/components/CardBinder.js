import React, { useState, useEffect } from 'react';
import Card from './Card';
import PageFlip from './PageFlip';
import './CardBinder.css';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Generate more sample cards
const generateSampleCards = () => {
  const rarities = ['Common', 'Uncommon', 'Rare', 'Mythic'];
  const cards = [];
  
  for (let i = 1; i <= 30; i++) {
    cards.push({
      id: i,
      name: `Card ${i}`,
      image: `https://via.placeholder.com/215x300/1e1e1e/ffffff?text=Card+${i}`,
      rarity: rarities[Math.floor(Math.random() * rarities.length)],
      position: i
    });
  }
  
  return cards;
};

// Draggable card component
const DraggableCard = ({ card, index, moveCard }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: { id: card.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'card',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <Card card={card} />
    </div>
  );
};

function CardBinder() {
  // Sample cards and pagination state
  const [cards, setCards] = useState(() => generateSampleCards());
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 8; // 4 cards per row, 2 rows per page
  
  // Animation state
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next');
  const [pendingPageChange, setPendingPageChange] = useState(null);
  
  // Calculate total pages
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  
  // Get current page cards
  const currentCards = cards.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  // Effect to handle pending page changes after animation
  useEffect(() => {
    if (pendingPageChange !== null && !isFlipping) {
      setCurrentPage(pendingPageChange);
      setPendingPageChange(null);
    }
  }, [pendingPageChange, isFlipping]);

  // Handle page navigation with animation
  const goToNextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      
      // Schedule the actual page change to happen after animation starts
      setTimeout(() => {
        setPendingPageChange(currentPage + 1);
        
        // Reset animation state after animation completes
        setTimeout(() => {
          setIsFlipping(false);
        }, 900); // Slightly less than animation duration
      }, 50);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      
      // Schedule the actual page change to happen after animation starts
      setTimeout(() => {
        setPendingPageChange(currentPage - 1);
        
        // Reset animation state after animation completes
        setTimeout(() => {
          setIsFlipping(false);
        }, 900); // Slightly less than animation duration
      }, 50);
    }
  };

  // Card reordering function
  const moveCard = (fromIndex, toIndex) => {
    // Adjust indices based on pagination
    const actualFromIndex = currentPage * cardsPerPage + fromIndex;
    const actualToIndex = currentPage * cardsPerPage + toIndex;
    
    const updatedCards = [...cards];
    const [movedCard] = updatedCards.splice(actualFromIndex, 1);
    updatedCards.splice(actualToIndex, 0, movedCard);
    
    setCards(updatedCards);
  };

  return (
    <div className="card-binder">
      <h2>My Collection</h2>
      
      <div className="binder-controls">
        <button 
          className="page-button prev-page" 
          onClick={goToPrevPage} 
          disabled={currentPage === 0 || isFlipping}
        >
          ← Previous Page
        </button>
        <span className="page-indicator">
          Page {currentPage + 1} of {totalPages}
        </span>
        <button 
          className="page-button next-page" 
          onClick={goToNextPage}
          disabled={currentPage === totalPages - 1 || isFlipping}
        >
          Next Page →
        </button>
      </div>
      
      <DndProvider backend={HTML5Backend}>
        <div className={`binder ${isFlipping ? 'animating' : ''}`}>
          <div className="binder-spine"></div>
          <div className="binder-page">
            {currentCards.map((card, index) => (
              <DraggableCard 
                key={card.id} 
                card={card} 
                index={index} 
                moveCard={moveCard} 
              />
            ))}
          </div>
          <PageFlip isFlipping={isFlipping} direction={flipDirection} />
        </div>
      </DndProvider>
      
      <p className="drag-instruction">
        Drag cards to reorder your collection • 
        {isFlipping ? 'Turning page...' : 'Use buttons to flip pages'}
      </p>
    </div>
  );
}

export default CardBinder;
