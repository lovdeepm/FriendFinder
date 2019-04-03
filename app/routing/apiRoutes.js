// import array

var friendsData = require("../data/friends.js");
// console.log(friendsData)

module.exports = function(app) {


    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });
    app.get("/api/friends", function(req, res) {
        return res.json(friendsData);
      });
    
    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        // console.log(req.body)
      //   var newFriend = req.body;

      //   var sum = 0;

      //   for( var i = 0; i < newFriend.length; i++) {
      //   var diff = (newFriend[i] - friendsData[i]);
      //   diff = Math.abs(diff)
      //   sum = sum + diff;

      //   }
        

      //   console.log(sum)
      //   friendsData.push(newFriend);
      //   res.json(req.body);

      // });
      var user = req.body;

    // parseInt for scores
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    // default friend match is the first friend but result will be whoever has the minimum difference in scores
    var bestFriendIndex = 0;
    var minimumDifference = 40;

    // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
    //  whatever the difference is, add to the total difference
    for(var i = 0; i < friendsData.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friendsData[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friendsData[i].scores[j]);
        totalDifference += difference;
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }

    // after finding match, add user to friend array
    friendsData.push(user);

    // send back to browser the best friend match
    res.json(friendsData[bestFriendIndex]);
  });
};

    