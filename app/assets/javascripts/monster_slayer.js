$(document).ready(function() {
  new Vue ({
    el: '#monster-slayer',
    data: {
      player: 100,
      monster: 100,
      logs: [],
      inProgress: false
    },
    watch: {
      player: function(value) {
        var vm = this;

        if(value <= 0) {
          alert('You Lose!');
          this.restart();
        }

        if(value > 100) {
          vm.player = 100;
        }
      },
      monster: function(value) {
        var vm = this;

        if(value <= 0) {
          alert('You Win!');
          this.restart()
        }
        if(value > 100) {
          vm.monster = 100;
        }
      }
    },
    methods: {
      restart: function() {
        this.inProgress = !this.inProgress
        this.player = 100;
        this.monster = 100;
        this.logs = [];
      },
      attack: function() {
        var attack = Math.floor((Math.random() * 10) + 1);
        this.monster -= attack;

        var loss = Math.floor((Math.random() * 10) + 1);
        this.player -= loss;
      
        var newLog = { player: 'Player hits monster for ' + attack + ' points', monster: 'Monster hits player for ' + loss + ' points' };
        this.logs.unshift(newLog);
      },
      specialAttack: function() {
        var attack = Math.floor((Math.random() * 20) + 1);
        this.monster -= attack;

        var loss = Math.floor((Math.random() * 10) + 1);
        this.player -= loss;

        var newLog = { player: 'Player hits monster hard for ' + attack + ' points', monster: 'Monster hits player for ' + loss + ' points' };
        this.logs.unshift(newLog);

      },
      heal: function() {
        var heal = 10
        this.player += heal;

        var loss = Math.floor((Math.random() * 10) + 1);
        this.player -= loss;

        var newLog = { player: 'Player heals by ' + heal + ' points', monster: 'Monster hits player for ' + loss + ' points' };
        this.logs.unshift(newLog);
      }
    }
  })
})