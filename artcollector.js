
if(Meteor.isClient) {
  Template.artists.helpers({
    'artist': function() {
      return MyArtists.find({}, {sort: {name: 1}});
    },
    'selectedClass': function() {
      var artistId = this._id;
      var selectedArtist = Session.get('selectedArtist');
      if(artistId === selectedArtist) {
        return "selected";
      }
    },
    'weightOfFont': function() {
        var artistId = this._id;
        var overArtist = Session.get('overArtist');
        if(artistId === overArtist) {
          return "emphasis";
        }
      }

  });


  // This function allows the date to change every second.
  Meteor,setInterval(function() {
    Session.set("current_date", new Date());
  }, 1000);

  // This helper function gets the Session information from the setInterval
  Template.showDate.helpers({
    'actual_date': function() {
      return Session.get("current_date");
    }
  });




  Template.artists.events({
    'click .uniqueArtist': function() {
      var artistId = this._id;
      Session.set('selectedArtist', artistId);
      var selectedArtist = Session.get('selectedArtist');
      console.log(selectedArtist);
    },
    'mouseover .uniqueArtist': function() {
      var artistId = this._id;
      Session.set('overArtist', artistId);
      var overArtist = Session.get('overArtist');
    }

  });

}

MyArtists =  new Mongo.Collection('artists');
