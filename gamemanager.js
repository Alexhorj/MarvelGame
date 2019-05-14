let GameManager= {
    setGameStart:function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer:function(classType){
        switch (classType) {
            case "Captain-America":
                player = new Player(classType, 100 , 10 );
                break;
            case "Captain-Marvel":
                player = new Player(classType, 200 , 70 );
                break;
            case "Thor":
                player = new Player(classType, 150 , 40 );
                break;    
            case "Iron-man":
                player = new Player(classType, 180 , 25 );
                break;
            case "Black-Phanter":
                player = new Player(classType, 180 , 20 );
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="imagini/player/' + classType.toLowerCase() + '.jpg" class="imagini-player"><div><h3>' + classType +' </h3><p class="health-player">Health:'+ player.health +'</p><p>Attack:'+ player.attack +'</p></div>'; 
    
    },
    setPreFight:function(){
        let getHeader = document.querySelector(".header");  
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Invinge inamicii!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameMaganer.setFight()">Cauta un inamic! </a>';
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");  
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        // creare inamic!
        let enemy00 =new Enemy("Thanos", 300 ,100 );
        let enemy01 =new Enemy("Loki", 150 ,30 );
        let enemy02 =new Enemy("Juggernaut", 300 ,20 );

        let choooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));
        console.log(choooseRandomEnemy);
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
                break;
        }
         getHeader.innerHTML = '<p> Alege Miscarea</p>';
         getActions.innerHTML=  '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Ataca! </a>';
         getEnemy.innerHTML = 'img src="imagini/enemyes/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + enemy.enemyType + '" class="imagini-enemy"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Heath:' + enemy.heath + '</p><p>Attack:' + enemy.attack + '</p></div>';
    }


}