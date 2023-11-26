const express = require('express');
const router = express.Router();

// Sample data for friends
const friends = [
  { id: 1, name: 'Shashi', availability: [1, 2, 3, 4], availableFor: 'justForFun', action: 'View' },
  { id: 2, name: 'Rakitha', availability: [1, 2, 3, 6], availableFor: 'justForFun', action: 'View' },
  { id: 3, name: 'Madhara', availability: [1, 4, 5, 6], availableFor: 'moreSerious', action: 'View' },
];

// Route to get friends' availability
router.get('/', (req, res) => {
  res.json(friends);
});

// Route to find common availability
router.get('/findCommonAvailability', (req, res) => {
  // Get friend IDs from the request query
  const friendIds = req.query.friends ? req.query.friends.split(',') : [];

  // Find common availability
  const commonAvailability = findCommonAvailability(friendIds);

  // Response with common availability
  res.json({ commonAvailability });
});

// Helper function to find common availability
function findCommonAvailability(friendIds) {
  const friendAvailabilities = friendIds.map((id) => friends.find((friend) => friend.id == id).availability);

  // Find common availability
  const commonAvailability = friendAvailabilities.reduce((acc, availability) => {
    return acc.filter((value) => availability.includes(value));
  });

  return commonAvailability;
}

// Route to get friends available for just for fun
router.get('/justForFun', (req, res) => {
  const justForFunFriends = friends.filter((friend) => friend.availableFor === 'justForFun');
  res.json(justForFunFriends);
});

// Route to get friends available for more serious events
router.get('/moreSerious', (req, res) => {
  const moreSeriousFriends = friends.filter((friend) => friend.availableFor === 'moreSerious');
  res.json(moreSeriousFriends);
});

module.exports = router;
