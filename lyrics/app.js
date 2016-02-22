(function(){
  var myApp = angular.module('HelloApp',[]);
  
  myApp.directive('helloTag', function() {        
        return {
            scope:{
                hello:'@someAttr'
            },
            templateUrl:"helloTag.html"
        }
  });
  
  myApp.directive('lyricsList', function() {        
        return {
            scope:{
                lyrics:'=lyrics'
            },
            controller: function($scope) {
            	this.lyrics = $scope.lyrics;
                this.tab = 0;

                this.isSowTab = function(checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function(activeTab) {
                    this.tab = activeTab;
                };
            },
            controllerAs: "tabCtrl",
            templateUrl:"lyricsList.html"
        }
  });

  var lyrics = [
  	{
  		"author": "Bob Dylan",
  		"title": "Girl From The North Country",
  		"lyrics": "Well, if you’re travelin’ in the north country fair\n"
                + "Where the winds hit heavy on the borderline\n"
                + "Remember me to one who lives there\n"
                + "She once was a true love of mine\n"
                + "\n"
                + "Well, if you go when the snowflakes storm\n"
                + "When the rivers freeze and summer ends\n"
                + "Please see if she’s wearing a coat so warm\n"
                + "To keep her from the howlin’ winds\n"
                + "\n"
                + "Please see for me if her hair hangs long,\n"
                + "If it rolls and flows all down her breast.\n"
                + "Please see for me if her hair hangs long,\n"
                + "That’s the way I remember her best.\n"
                + "\n"
                + "I’m a-wonderin’ if she remembers me at all\n"
                + "Many times I’ve often prayed\n"
                + "In the darkness of my night\n"
                + "In the brightness of my day\n"
                + "\n"
                + "So if you’re travelin’ in the north country fair\n"
                + "Where the winds hit heavy on the borderline\n"
                + "Remember me to one who lives there\n"
                + "She once was a true love of mine\n"
  	},
  	{
  		"author": "Bob Marley",
  		"title": "No Woman No Cry Lyrics",
  		"lyrics": "No, woman, no cry, \n"
                + "No, woman, no cry, \n"
                + "No, woman, no cry, \n"
                + "No, woman, no cry.\n"
                + "\n"
                + "Cause, cause, cause, I remember when we used to sit\n"
                + "In the government yard in Trenchtown, \n"
                + "Oba - obaserving the 'ypocrites\n"
                + "As they would mingle with the good people we meet.\n"
                + "Good friends we have, oh, good friends we've lost\n"
                + "Along the way.\n"
                + "In this great future, you can't forget your past, \n"
                + "So dry your tears, I seh.\n"
                + "\n"
                + "No, woman, no cry, \n"
                + "No, woman, no cry.\n"
                + "'Ere, little darlin', don't she'd no tears, \n"
                + "No, woman, no cry.\n"
                + "\n"
                + "Said, said, said, I remember when-a we used to sit\n"
                + "In the government yard in Trenchtown.\n"
                + "And then Georgie would make the fire lights, \n"
                + "As it was logwood burnin' through the nights.\n"
                + "Then we would cook cornmeal porridge, \n"
                + "Of which I'll share with you, \n"
                + "My feet is my only carriage, \n"
                + "So I've got to push on through.\n"
                + "But while I'm gone, I mean, \n"
                + "\n"
                + "Everything's gonna be all right! \n"
                + "Everything's gonna be all right! \n"
                + "Everything's gonna be all right! \n"
                + "Everything's gonna be all right! \n"
                + "I said, everything's gonna be all right-a! \n"
                + "Everything's gonna be all right! \n"
                + "Everything's gonna be all right, now! \n"
                + "Everything's gonna be all right! \n"
                + "\n"
                + "So, woman, no cry, \n"
                + "No, no, woman, woman, no cry.\n"
                + "Woman, little sister, don't she'd no tears, \n"
                + "No, woman, no cry.\n"
                + "\n"
                + "I remember when we used to sit\n"
                + "In the government yard in Trenchtown.\n"
                + "And then Georgie would make the fire lights, \n"
                + "As it was logwood burnin' through the nights.\n"
                + "Then we would cook cornmeal porridge, \n"
                + "Of which I'll share with you, \n"
                + "My feet is my only carriage, \n"
                + "So I've got to push on through.\n"
                + "But while I'm gone, \n"
                + "\n"
                + "No, woman, no cry, \n"
                + "No, woman, no cry.\n"
                + "Woman, little darlin', say don't she'd no tears, \n"
                + "No, woman, no cry.\n"
                + "Eh! (Little darlin', don't she'd no tears! \n"
                + "No, woman, no cry.\n"
                + "Little sister, don't she'd no tears! \n"
                + "No, woman, no cry.)"
  	}];

  myApp.controller('MainController', ['$scope', function($scope) {        
      $scope.lyricsData = lyrics;
  }]);
})();