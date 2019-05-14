let player;

function Player(classType, health, attack) {
    this.classType = classType;
    this.health=health;
    this.attack=attack;

}
let PlayerMoves = 
{
   calcAttack:function() 
    { 
        //player ataca.
        let playerAttack =function() 
        {
            let calcBaseDamage;
            if (player.attack > 0) 
            {
                calcBaseDamage =player.attack;
            } 
            else 
            {
                calcBaseDamage= player.health;
            }  
               let offsetDamage = Math.floor(Math.random() * Math.floor(10));
               let calcOutputDamage = calcBaseDamage + offsetDamage;
               let attackValues = [calcOutputDamage];
               return attackValues;        
        }
        //Enemy ataca
        let enemyAttack =function() 
        {
            let calcBaseDamage;
            if (enemy.attack > 0) 
            {
                calcBaseDamage =enemy.attack;
            } 
            else 
            {
                calcBaseDamage= enemy.health;
            }  
               let offsetDamage = Math.floor(Math.random() * Math.floor(10));
               let calcOutputDamage = calcBaseDamage + offsetDamage;
               let attackValues = [calcOutputDamage];
               return attackValues;        
        }
        let getPlayerHealth = document.querySelector(".health-player "); 
        let getEnemyHealth = document.querySelector(".health-enemy "); 
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues;
        enemy.health = enemy.health - totalDamage;
        alert("You hit " + playerAttackValues + "damage");
        if(enemy.health <= 0) {
            alert("You win! Refresh to play again");
            getPlayerHealth.innerHTML = 'Health: 0' + player.health ;
            getEnemyHealth.innerHTML = 'Health: 0'; 
        } else {
            getEnemyHealth.innerHTML = 'Health: 0' + enemy.health;
             let enemyAttackValues = enemyAttack();
             let totalDamage = enemyAttackValues;
            player.health = player.health - totalDamage;
            alert("Enemy hit " + enemyAttackValues + "damage");
        if(player.health <= 0) {
            alert("You loose! Refresh to play again");
            getPlayerHealth.innerHTML = 'Health: 0';
            getEnemyHealth.innerHTML = 'Health: 0' + enemy.health;

        }else {
            getPlayerHealth.innerHTML = 'Health: 0' + player.health;

        }


        }
    }
}
    
