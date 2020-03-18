// показатели всех персонажей 
let heroHP=90;
let maxHP=110;
let heroDMG=20;
let ratHP=45;
let ratDMG=15;
let humanHP=55;
let humanDMG=25;
let dragonHP=55;
let dragonDMG=35;

// все кнопки
let battleBut=document.querySelector('.battle');
let healBut=document.querySelector('.heal');
let exitBut=document.querySelector('.exit');
let ratBut=document.querySelector('.rat');
let humanBut=document.querySelector('.human');
let dragonBut=document.querySelector('.dragon');
let plusBut=document.querySelector('.plus');
let outBut=document.querySelector('.out');
let yesBut=document.querySelector('.yes');
let noBut=document.querySelector('.no');
let menuBut=document.querySelector('.back');

// менюшки
let menuMen=document.querySelector('.menu');
let enemysMen=document.querySelector('.enemys');
let healingMen=document.querySelector('.healing');
let exitMen=document.querySelector('.exit_m');

// заставки
let outScrean=document.querySelector('.out_screan')
let deathScrean=document.querySelector('.death')

// показатели 
let hero=document.querySelector('.hp')
let heroHPopt=document.querySelector('.hero_hp')
let heroDMGopt=document.querySelector('.hero_dmg')
heroHPopt.innerHTML = heroHP;
heroDMGopt.innerHTML = heroDMG;
hero.innerHTML = heroHP;

let ratDMGopt=document.querySelector('.rat_dmg')
let ratHPopt=document.querySelector('.rat_hp')
ratHPopt.innerHTML += ratHP;
ratDMGopt.innerHTML += ratDMG;

let humanDMGopt=document.querySelector('.human_dmg')
let humanHPopt=document.querySelector('.human_hp')
humanHPopt.innerHTML += humanHP;
humanDMGopt.innerHTML += humanDMG;

let dragonDMGopt=document.querySelector('.dragon_dmg')
let dragonHPopt=document.querySelector('.dragon_hp')
dragonHPopt.innerHTML += dragonHP;
dragonDMGopt.innerHTML += dragonDMG;

// функции драк и переходов 

battleBut.onclick=function(){
	heroHPopt.innerHTML = heroHP;
	menuMen.style.display='none';
	enemysMen.style.display='block';
}
menuBut.onclick=function(){
	heroHPopt.innerHTML = heroHP;
	menuMen.style.display='block';
	enemysMen.style.display='none';
}
ratBut.onclick=function(){
	if ( heroHP > 0 ) {
		heroHP -= ratDMG;
		ratHP -= heroDMG;
		ratHP=45;
		maxHP =maxHP+7;
		heroDMG=heroDMG+3;
		heroHPopt.innerHTML = heroHP;
		hero.innerHTML = heroHP;
		heroDMGopt.innerHTML = heroDMG;
		menuMen.style.display='block';
		enemysMen.style.display='none';
		if( heroHP <= 0 ){
			console.log('lose')
			deathScrean.style.display='block';
		}
	}
}

humanBut.onclick=function(){
	if ( heroHP > 0 ) {
		heroHP -= humanDMG;
		humanHP -= heroDMG;
		humanHP=55;
		maxHP =maxHP+7;
		heroDMG=heroDMG+3;
		hero.innerHTML = heroHP;
		heroHPopt.innerHTML = heroHP;
		heroDMGopt.innerHTML = heroDMG;
		menuMen.style.display='block';
		enemysMen.style.display='none';
		if( heroHP <= 0 ){
			console.log('lose')
			deathScrean.style.display='block';
		}
	}
}

dragonBut.onclick=function(){
	if ( heroHP > 0 ) {
		heroHP -= dragonDMG;
		dragonHP -= heroDMG;
		dragonHP=55;
		maxHP =maxHP+7;
		heroDMG=heroDMG+3;
		heroHPopt.innerHTML = heroHP;
		hero.innerHTML = heroHP;
		heroDMGopt.innerHTML = heroDMG;
		menuMen.style.display='block';
		enemysMen.style.display='none';
		if( heroHP <= 0 ){
			console.log('lose')
			deathScrean.style.display='block';
		}
	}
}

// функция хила
plusBut.onclick=function(){
	if (heroHP >= maxHP) {
		heroHP=maxHP;
	}else {
		heroHP +=10;
		hero.innerHTML = heroHP;
		console.log(hero)
	}
}

healBut.onclick=function(){
	menuMen.style.display='none';
	healingMen.style.display='block';
}

outBut.onclick=function(){
	menuMen.style.display='block';
	healingMen.style.display='none';
}





// кнопки выхода 
exitBut.onclick=function(){
	menuMen.style.display='none';
	exitMen.style.display='block';
}

yesBut.onclick=function(){
	outScrean.style.display='block';
}

noBut.onclick=function(){
	menuMen.style.display='block';
	exitMen.style.display='none';
}