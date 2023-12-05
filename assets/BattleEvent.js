// sets the variables 
let Battle = false;
let attack = false;
let npcAAlive = true;
let heroAlive = true;
let slimeAlive = true;
let pause = false;
let monsterTurn = null;
let heroTurn = null;
let initative = 0;
//initative decides if you or the enemy attacks first (true for player attacks first false for player attacks)



function BattlePreperationinitative() {
    hitchance();
    if (initative === 1) {
        monsterTurn = true; 
        heroTurn = false;
        console.log (initative)
        console.log (monsterTurn)
    } else if (initative === 0){
        heroTurn = true;
        monsterTurn = false;
        console.log (initative)
        console.log (monsterTurn)
    }
   
}
function battlepreperation() {
    if (battle = true) {
    canMove = false  
}
}