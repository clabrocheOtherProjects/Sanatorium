const Router = function ($stateProvider, $urlRouterProvider, $httpProvider, $state) {
  console.log(window.location.href);
  $stateProvider.state("home", require("./routes/home"));
  $stateProvider.state("story", require("./routes/story"));
  $stateProvider.state("contact", require("./routes/contact"));
  $urlRouterProvider.otherwise('/home');
};
module.exports = Router;
