const express = require('express');
const router = express.Router();

// Sample data for friends
const friends = [
  { id: 1, name: 'Shashi', availability: [1, 2, 3, 4], availableFor: 'justForFun', action: 'View' },
  { id: 2, name: 'Rakitha', availability: [1, 2, 3, 6], availableFor: 'justForFun', action: 'View' },
  { id: 3, name: 'Madhara', availability: [1, 4, 5, 6], availableFor: 'moreSerious', action: 'View' },
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

// Helper function to find common availability
// function findCommonAvailability(friendIds) {
//   const friendAvailabilities = friendIds.map((id) => friends.find((friend) => friend.id == id).availability);

//   // Find common availability
//   const commonAvailability = friendAvailabilities.reduce((acc, availability) => {
//     return acc.filter((value) => availability.includes(value));
//   });

//   return commonAvailability;
// }

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


// Route to get friends by availability and week
// router.get('/:availability', (req, res) => {
//   const availability = req.params.availability;
//   const week = req.query.week;

//   if (availability && week) {
//     const filteredFriends = getFriendsByAvailabilityAndWeek(availability, week);
//     res.json(filteredFriends);
//   } else {
//     res.status(400).json({ error: 'Availability and week are required parameters' });
//   }
// });

// // Helper function to get friends by availability and week
// function getFriendsByAvailabilityAndWeek(availability, week) {
//   const filteredFriends = friends.filter((friend) => {
//     return friend.availableFor === availability && friend.availability.includes(parseInt(week));
//   });

//   return filteredFriends;
// }


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
