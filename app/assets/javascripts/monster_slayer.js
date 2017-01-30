$(document).ready(function() {
  new Vue ({
    el: '#monster-slayer',
    data: {
      player: {
        health: 100
      },
      monster: {
        health: 100
      },
      logs: [],
      inProgress: false
    },
    // watch: {
    //   player: function(value) {
    //     var vm = this;
    //     console.log(value);
    //     if(value.health <= 0) {
    //       alert('You Lose!');
    //       this.restart();
    //     } else if ( vm.monster.health <= 0) {
    //       alert('You Win!');
    //       this.restart();
    //     }
    //   }
    // },
    methods: {
      checkHealth: function() {
        if(this.player.health <= 0) {
          alert('You Lose!');
          this.restart();
        } else if ( this.monster.health <= 0) {
            alert('You Win!');
            this.restart();
        }
      },
      restart: function() {
        this.inProgress = !this.inProgress
        this.player.health = 100;
        this.monster.health = 100;
        this.logs = [];
      },
      attack: function() {
        var attack = Math.floor((Math.random() * 10) + 1);
        this.monster.health -= attack;

        var loss = Math.floor((Math.random() * 10) + 1);
        this.player.health -= loss;
      
        var newLog = { player: 'Player hits monster for ' + attack + ' points', monster: 'Monster hits player for ' + loss + ' points' };
        this.logs.unshift(newLog);
        this.checkHealth();
      },
      specialAttack: function() {
        var attack = Math.floor((Math.random() * 20) + 1);
        this.monster.health -= attack;

        var loss = Math.floor((Math.random() * 10) + 1);
        this.player.health -= loss;

        var newLog = { player: 'Player hits monster for ' + attack + ' points', monster: 'Monster hits player for ' + loss + ' points' };
        this.logs.unshift(newLog);
        this.checkHealth();

      },
      heal: function() {
        var heal = 10
        this.player.health += heal;

        var loss = Math.floor((Math.random() * 10) + 1);
        this.player.health -= loss;

        var newLog = { player: 'Player heals by ' + heal + ' points', monster: 'Monster hits player for ' + loss + ' points' };
        this.logs.unshift(newLog);
        this.checkHealth();
      }
    }
  })
})