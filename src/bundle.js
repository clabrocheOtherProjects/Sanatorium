(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
// http://www.rajdeepd.com/articles/chrome/localstrg/LocalStorageSample.htm

// NOTE:
// this varies from actual localStorage in some subtle ways

// also, there is no persistence
// TODO persist
(function () {
  "use strict";

  var db;

  function LocalStorage() {
  }
  db = LocalStorage;

  db.prototype.getItem = function (key) {
    if (this.hasOwnProperty(key)) {
      return String(this[key]);
    }
    return null;
  };

  db.prototype.setItem = function (key, val) {
    this[key] = String(val);
  };

  db.prototype.removeItem = function (key) {
    delete this[key];
  };

  db.prototype.clear = function () {
    var self = this;
    Object.keys(self).forEach(function (key) {
      self[key] = undefined;
      delete self[key];
    });
  };

  db.prototype.key = function (i) {
    i = i || 0;
    return Object.keys(this)[i];
  };

  db.prototype.__defineGetter__('length', function () {
    return Object.keys(this).length;
  });

  if (global.localStorage) {
    module.exports = localStorage;
  } else {
    module.exports = new LocalStorage();
  }
}());

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
const localStorage = require('localStorage');
function ConfigService () {
  this.refresh = 500;
  this.save = function (object) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) { localStorage.setItem(key, JSON.stringify(object[key])); }
    }
  };
  this.get = key => JSON.parse(localStorage.getItem(key));
}

module.exports = ConfigService;
},{"localStorage":1}],3:[function(require,module,exports){
function NavbarController ($scope, ConfigService, $interval) {
  const audio = new Audio('https://raw.githubusercontent.com/clabrocheOtherProjects/Sanatorium/master/resources/musics/theme.mp3');
  $scope.getCurrentPage = _ => ConfigService.get('currentStoryPage');
  $scope.music = _ => {
    if (audio.paused) audio.play();
    else audio.pause();
    $scope.audioPlaying = !audio.paused;
  };
}
module.exports = NavbarController;

},{}],4:[function(require,module,exports){
const router = require('./router');
const config = function config ($stateProvider, $urlRouterProvider, $httpProvider) {
  router($stateProvider, $urlRouterProvider, $httpProvider);
};
module.exports = config;

},{"./router":5}],5:[function(require,module,exports){
const Router = function ($stateProvider, $urlRouterProvider, $httpProvider, $state) {
  console.log(window.location.href);
  $stateProvider.state("home", require("./routes/home"));
  $stateProvider.state("story", require("./routes/story"));
  $stateProvider.state("contact", require("./routes/contact"));
  $urlRouterProvider.otherwise('/home');
};
module.exports = Router;

},{"./routes/contact":6,"./routes/home":7,"./routes/story":8}],6:[function(require,module,exports){
module.exports={
  "url": "/contact",
  "templateUrl": "src/contact/contact.html",
  "controller": "ContactController"
}

},{}],7:[function(require,module,exports){
module.exports={
  "url": "/home",
  "templateUrl": "src/home/home.html",
  "controller": "HomeController"
}

},{}],8:[function(require,module,exports){
module.exports={
  "url": "/story",
  "templateUrl": "src/story/story.html",
  "controller": "StoryController"
}

},{}],9:[function(require,module,exports){
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

},{"./ConfigService":2,"./NavbarController":3,"./angular/config":4,"./contact/ContactController":10,"./home/HomeController":11,"./story/StoryController":12,"./story/StoryService":13}],10:[function(require,module,exports){
function ContactController($scope, $window, ConfigService) {

}
module.exports = ContactController;
},{}],11:[function(require,module,exports){
function HomeController($scope) {
}

module.exports = HomeController
},{}],12:[function(require,module,exports){
function StoryController ($scope, $window, ConfigService) {
  if (!ConfigService.get('currentStoryPage')) ConfigService.save({currentStoryPage: 'prologue'});
  $scope.story = story[ConfigService.get('currentStoryPage')];
  $scope.changePage = function (page) {
    $scope.story = story[page];
    ConfigService.save({ currentStoryPage: page });
    $window.scrollTo(0, 0);
  };
}
const pathPartials = 'src/story/partials/';
const story = {
  prologue: {
    template: pathPartials + 'prologue.html',
    choices: [
      {
        page: 'chap1',
        description: '1. Continuer'
      }
    ]
  },
  chap1: {
    template: pathPartials + 'chap1.html',
    choices: [
      {
        page: 'chap2',
        description: '1.Cliquez pour rester dans la pièce.'
      },
      {
        page: 'chap3',
        description: '2.Cliquez pour sauter par la fenêtre.'
      }
    ]
  },
  chap2: {
    template: pathPartials + 'chap2.html',
    choices: [
      {
        page: 'chap5',
        description: '1.Cliquez pour rester et se jeter sur les seringues.'
      },
      {
        page: 'chap3',
        description: '2.Cliquez pour sauter par la fenêtre.'
      },
      {
        page: 'chap7',
        description: "3.Cliquez pour sortir par la porte derrière l'enfant."
      }
    ]
  },
  chap3: {
    template: pathPartials + 'chap3.html',
    choices: [
      {
        page: 'chap6',
        description: '1.Cliquez pour se retourner.'
      },
      {
        page: 'chap4',
        description: "2.Cliquez pour courir vers l'entrée."
      }
    ]
  },
  MORT: {
    template: 'src/story/partials/MORT.html',
    choices: [
      {
        page: 'prologue',
        description: "1.Cliquez pour recommencer l'histoire."
      }
    ]
  },
  chap10: {
    template: 'src/story/partials/chap10.html',
    choices: [
      {
        page: 'chap12',
        description: '1.Cliquez pour se rendre dans la pièce au fond.'
      },
      {
        page: 'chap13',
        description: '2.Cliquez pour se rendre dans une chambre.'
      }
    ]
  },
  chap11: {
    template: 'src/story/partials/chap11.html',
    choices: [
      {
        page: 'chapvie1126',
        description: "1.Cliquez pour voir ce qu'il se passe ensuite."
      }
    ]
  },
  chap12: {
    template: 'src/story/partials/chap12.html',
    choices: [
      {
        page: 'chap15',
        description: "1.Cliquez pour voir ce qu'il se passe ensuite."
      }
    ]
  },
  chap13: {
    template: 'src/story/partials/chap13.html',
    choices: [
      {
        page: 'chap13bis',
        description: "1.Cliquez pour t'enfuir en te retournant."
      },
      { page: 'chap14', description: '2.Cliquez pour abandonner.' }
    ]
  },
  chap14: {
    template: 'src/story/partials/chap14.html',
    choices: [{ page: 'MORT', description: '1.Cliquez pour continuer.' }]
  },
  chap15: {
    template: 'src/story/partials/chap15.html',
    choices: [
      {
        page: 'chap16',
        description: "1.Cliquez pour donner un coup de hache à l'enfant."
      },
      {
        page: 'chap17',
        description: "2.Cliquez pour donner un coup de hache à l'adulte."
      }
    ]
  },
  chap13bis: {
    template: 'src/story/partials/chap13bis.html',
    choices: [
      {
        page: 'chap15',
        description: "1.Cliquez pour voir ce qu'il se passe ensuite."
      }
    ]
  },
  chap16: {
    template: 'src/story/partials/chap16.html',
    choices: [{ page: 'MORT', description: '1.Cliquez pour continuer.' }]
  },
  chap17: {
    template: 'src/story/partials/chap17.html',
    choices: [
      { page: 'chap18', description: '1.Cliquez pour foncer vers la bête.' },
      { page: 'chap19', description: '2.Cliquez pour foncer les Sans Âmes.' }
    ]
  },
  chap19: {
    template: 'src/story/partials/chap19.html',
    choices: [
      {
        page: 'chap25',
        description:
          '1.Cliquez pour continuer de se battre contre les Sans Âmes.'
      },
      { page: 'chap18', description: '2.Cliquez pour attaquer le loup.' }
    ]
  },
  chap18: {
    template: 'src/story/partials/chap18.html',
    choices: [
      {
        page: 'chap20',
        description: '1.Cliquez pour Se concentrer sur la bête.'
      },
      { page: 'chap22', description: '2.Cliquez pour attaquer les Sans Âmes.' }
    ]
  },
  chap20: {
    template: 'src/story/partials/chap20.html',
    choices: [
      {
        page: 'chap23',
        description: '1.Cliquez pour donner un coup de hache.'
      },
      { page: 'chap24', description: '2.Cliquez pour donner un coup de barre.' }
    ]
  },
  chap21: {
    template: 'src/story/partials/chap21.html',
    choices: [{ page: 'MORT', description: '1.Cliquez pour continuer.' }]
  },
  chap22: {
    template: 'src/story/partials/chap22.html',
    choices: [{ page: 'chapvie', description: '1.Cliquez pour voir la suite.' }]
  },
  chap23: {
    template: 'src/story/partials/chap23.html',
    choices: [{ page: 'MORT', description: '1.Cliquez pour continuer.' }]
  },
  chap24: {
    template: 'src/story/partials/chap24.html',
    choices: [{ page: 'chapvie', description: '1.Cliquez pour voir la suite.' }]
  },
  chap25: {
    template: 'src/story/partials/chap25.html',
    choices: [
      { page: 'chap26', description: '1.Cliquez pour se laisser mourrir.' },
      { page: 'chap21', description: '2.Cliquez pour continuer le combat.' }
    ]
  },
  chap26: {
    template: 'src/story/partials/chap26.html',
    choices: [
      { page: 'chapvie1126', description: '1.Cliquez pour voir la suite.' }
    ]
  },
  chap4: {
    template: 'src/story/partials/chap4.html',
    choices: [
      { page: 'chap8', description: '1.Cliquez pour passer par la porte.' },
      {
        page: 'chap7',
        description: '2.Cliquez pour se rendre dans le couloir.'
      }
    ]
  },
  chap6: {
    template: 'src/story/partials/chap6.html',
    choices: [{ page: 'MORT', description: '1.Cliquez pour continuer.' }]
  },
  chap5: {
    template: 'src/story/partials/chap5.html',
    choices: [{ page: 'chap7', description: '1.Cliquez pour continuer.' }]
  },
  chap7: {
    template: 'src/story/partials/chap7.html',
    choices: [
      { page: 'chap9', description: '1.Cliquez pour entrer dans la pièce.' }
    ]
  },
  chap8: {
    template: 'src/story/partials/chap8.html',
    choices: [{ page: 'MORT', description: '1.Cliquez pour continuer.' }]
  },
  chap9: {
    template: 'src/story/partials/chap9.html',
    choices: [
      { page: 'chap10', description: '1.Cliquez pour fuir par le couloir.' },
      {
        page: 'chap11',
        description: '2.Cliquez pour fuir par la porte du fond.'
      }
    ]
  },
  chapvie: {
    template: 'src/story/partials/chapvie.html',
    choices: [
      {
        page: 'prologue',
        description: "2.Cliquez pour recommencer l'histoire."
      }
    ]
  },
  chapvie1126: {
    template: 'src/story/partials/chapvie1126.html',
    choices: [
      {
        page: 'prologue',
        description: "2.Cliquez pour recommencer l'histoire."
      }
    ]
  }
};
module.exports = StoryController;

},{}],13:[function(require,module,exports){
function StoryService () {
}

module.exports = StoryService;

},{}]},{},[9]);
