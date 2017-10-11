function NavbarController ($scope, ConfigService, $interval) {
  // const audio = new Audio('https://raw.githubusercontent.com/clabrocheOtherProjects/Sanatorium/master/resources/musics/theme.mp3');
  $scope.getCurrentPage = _ => ConfigService.get('currentStoryPage');
  $scope.music = _ => {
    // if (audio.paused) audio.play();
    // else audio.pause();
    // $scope.audioPlaying = !audio.paused;
  };
}
module.exports = NavbarController;
