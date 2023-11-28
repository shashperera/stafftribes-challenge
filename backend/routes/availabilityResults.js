const express = require('express');
const router = express.Router();

// Sample data for friends
const friends = [
  { id: 1, name: 'Shashi', availability: [1, 2, 3, 4], availableFor: 'justForFun', action: 'View' },
  { id: 2, name: 'Rakitha', availability: [1, 2, 3, 6], availableFor: 'justForFun', action: 'View' },
  { id: 3, name: 'Madhara', availability: [1, 4, 5, 6], availableFor: 'moreSerious', action: 'View' },
];

const user = [
  { id: 4, name: 'Sanduni', availability: [1, 2, 3, 4, 5, 6, 7], availableFor: 'justForFun', action: 'View' },

];
// Route to get friends' availability
router.get('/friends', (req, res) => {
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


// Route to update the user's availability for a specific week
router.post('/updateUserAvailability', (req, res) => {
  const { week, isDisabled } = req.body;

  if (!week && typeof isDisabled !== 'boolean') {
    return res.status(400).json({ error: 'Invalid parameters' });
  }

  // Assuming user is always the first element in the 'user' array
  const currentUser = user[0];

  if (isDisabled) {
    // Remove the week from user's availability
    currentUser.availability = currentUser.availability.filter((day) => day !== parseInt(week));
  } else {
    // Add the week to user's availability if not already present
    if (!currentUser.availability.includes(parseInt(week))) {
      currentUser.availability.push(parseInt(week));
    }
  }

  res.json({ success: true });
});



// Helper function to find common availability for the selected week
function findCommonAvailabilityForWeek(week) {
  // Return an array of friends with common availability for the week
  return friends.filter((friend) => friend.availability.includes(parseInt(week)));
}

router.get('/findCommonAvailabilityForWeek', (req, res) => {
  const week = req.query.week;

  if (week) {
    const commonAvailabilityForWeek = findCommonAvailabilityForWeek(week);
    res.json(commonAvailabilityForWeek);
  } else {
    res.status(400).json({ error: 'Week is a required parameter' });
  }
});

module.exports = router;
