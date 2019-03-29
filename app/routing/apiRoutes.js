// import array

var friendsData = require("../data/friends.js");
console.log(friendsData)

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
        console.log(req.body)
        var newFriend = req.body;
        friendsData.push(newFriend);
        res.json(req.body);

      });



    }