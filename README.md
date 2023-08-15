# Memory Card Game

Practicing react, I made a memory card game.
This game shows a set of 10 cards, of which their images are fetched from an API on mount, and only on mount.
I wanted to make sure the API calls were not made on every render change.

Upon clicking any card, the deck of card order is randomized. I did this randomization via mapping the card components out in my App.jsx, and setting state of the array of each cards' unique URL ID. Said array is what
I fed into a randomization function, and after the order changes, the components will reflect the new order.

Tech used: vite + react, ESlint, prettier.
