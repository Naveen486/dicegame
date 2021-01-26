let main=document.querySelector('.man')
//selecting score and current score variables
let score0=document.querySelector('.score0')
let score1=document.querySelector('.score1')
let cscore0=document.querySelector('.currentscore0')
let cscore1=document.querySelector('.currentscore1')

let rolldice=document.querySelector('.btnroll')
let holddice=document.querySelector('.btnhold')
let newgame=document.querySelector('.btnnew')

let htp=document.querySelector('.btnhtp')
let congrats=document.querySelector('.congratulations')

let classadd1=document.querySelector('.player0')
let classadd2=document.querySelector('.player1')


let closebtn=document.getElementById('close')

let dice1=document.querySelector('.dice')


let sc1=0,sc2=0
let cs=0
let activeplayer=0
let playing=true

//initial values setting to starting position
score0.textContent=0
score1.textContent=0
cscore0.textContent=0
cscore1.textContent=0


//Rolling the dice

rolldice.addEventListener('click',function(){
    if (playing){

    guess=Math.trunc(Math.random()*6)+1
    console.log(guess)
    iddice.src=`dice-${guess}.png`
    if(guess!==1){
        cs+=guess
        if(activeplayer===0){

        cscore0.textContent=cs
        }else{
           
         cscore1.textContent=cs
        }
    }else{
        switchPlayer()
    }
}
})




//switching player


function switchPlayer(){
    cscore0.textContent=0;
    cscore1.textContent=0;
    cs=0;
    
    activeplayer=activeplayer===0?1:0
    classadd1.classList.toggle('active')
    classadd2.classList.toggle('active')
}




//holding the dice

holddice.addEventListener('click',function(){
    if(playing){
    if(activeplayer===0){
        sc1+=cs
        score0.textContent=sc1
        if(sc1>=100) {
            finish()
        } 
        else{
            switchPlayer()
        }
        
    }else{
        sc2+=cs
        score1.textContent=sc2
        if (sc2>=100) {
            finish()
        }else{
        switchPlayer()
        }
    }
}
})


function finish(){
    playing=false
     dice1.classList.add('hidden')
     document.querySelector(`.player${activeplayer}`).classList.add('winner')
     setTimeout(() => {
         congrats.textContent=`Congratulations Player${activeplayer+1}`
         congrats.classList.remove('hidden')

     }, 100);
     setTimeout(() => {
        
        congrats.classList.add('hidden')

    }, 3000);


}



newgame.addEventListener('click',function(){
    score0.textContent=0
     score1.textContent=0
      cscore0.textContent=0
       cscore1.textContent=0
       document.querySelector(`.player${activeplayer}`).classList.remove('winner')
       classadd1.classList.add('active')
       classadd2.classList.remove('active')
       dice1.classList.remove('hidden')
       
 sc1=0,sc2=0
 cs=0
 activeplayer=0
playing=true
})



htp.addEventListener('click',function(){
    /*main.classList.toggle('hiddenmain')*/
    document.querySelector('.hi').classList.toggle('hiddenhtp')
    document.querySelector('.hi').classList.toggle('hid')
})

closebtn.addEventListener('click',function(){
    /*main.classList.toggle('hiddenmain')*/
    document.querySelector('.hi').classList.toggle('hiddenhtp')
    document.querySelector('.hi').classList.toggle('hid') 
})