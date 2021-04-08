
 const player1 = {
    name: 'Subzero',
    hp: 86,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Devil`s whip', 'Hammer from hell'],
     attack: function (){
        console.log('Subzero' + ' ' + ' , fight!')
    }
}
player1.attack()


 const player2 = {
    name: 'Liu Kang',
    hp: 53, 
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['Sable'],
    attack: function (){
        console.log('Liu Kang' + ' ' + ' , fight!')
    }
}
player2.attack()

function createPlayer(player, playObj) {


 const $arenas = document.querySelector('.arenas')

const $player1 = document.createElement('div')
$arenas.appendChild($player1)
$player1.classList.add(player)


/*  const $player2 = document.createElement('div')
$arenas.appendChild($player2)
$player2.classList.add('player2')
$player2.className = 'player2'  */


const $progressBar = document.createElement('div')
$player1.appendChild($progressBar)
$progressBar.classList.add('progressbar')

const $character = document.createElement('div')
$player1.appendChild($character)
$character.classList.add('character')

const $life = document.createElement('div')
$progressBar.appendChild($life)
$life.classList.add('life')
$life.style.width = playObj.hp + '%'

const $name = document.createElement('div')
$progressBar.appendChild($name)
$name.classList.add('name')
$name.innerText = playObj.name

const $img = document.createElement('img')
$character.appendChild($img)
$img.classList.add('character_img')
$img.src = playObj.img;

}

console.log(createPlayer);
createPlayer('player1', player1);
createPlayer('player2', player2);

