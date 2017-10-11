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
