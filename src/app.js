const config = require('./angular/config');
const HomeController = require('./home/HomeController');
const NavbarController = require('./NavbarController');
const StoryController = require("./story/StoryController");
const ContactController = require("./contact/ContactController");
const StoryService = require('./story/StoryService');
const ConfigService = require('./ConfigService');

angular
  .module("app", ["ui.router"])
  .controller("HomeController", HomeController)
  .controller("NavbarController", NavbarController)
  .controller("StoryController", StoryController)
  .controller("ContactController", ContactController)
  .service("StoryService", StoryService)
  .service("ConfigService", ConfigService)
  .config(config)
  .run([
    "$rootScope",
    "$state",
    function($rootScope, $state) {
      $rootScope.$state = $state;
    }
  ]);
