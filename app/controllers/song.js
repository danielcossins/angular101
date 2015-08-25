app.controller("SongCtrl", function($scope) {
  $scope.title = "Welcome to your song list";
  $scope.newName = "";
  $scope.newArtist = "";
  $scope.newAlbum = "";
  $scope.newYear = "";
  $scope.songs = [
    {"name": "songs1", "artist": "artist1", "album": "album1", "year": 1111},
    {"name": "songs2", "artist": "artist1", "album": "album2", "year": 2222},
    {"name": "songs3", "artist": "artist1", "album": "album3", "year": 3333},
    {"name": "songs4", "artist": "artist1", "album": "album4", "year": 4444},
    {"name": "songs5", "artist": "artist1", "album": "album5", "year": 5555},
  ];

  $scope.deleteSong = function(song) {
    var songIndex = $scope.songs.indexOf(song);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };

  $scope.addSong = function() {
    $scope.songs.push({name: $scope.newName, artist: $scope.newArtist, album: $scope.newAlbum, year: $scope.newYear});
    $scope.newName = "";
    $scope.newArtist = "";
    $scope.newAlbum = "";
    $scope.newYear = "";
  };
});