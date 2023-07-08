const p1 = {
   score : 0,
   button : document.querySelector('#player1'),
   display : document.querySelector('#p1score')

}
const p2 = {
   score : 0,
   button : document.querySelector('#player2'),
   display : document.querySelector('#p2score'),

}


// const btn = document.querySelector('#player1');

// const btn2 =document.querySelector('#player2');

const btn3 = document.querySelector('#reset');

// const p1 =document.querySelector('#p1score');

// const p2 =document.querySelector('#p2score');

const winningScoreSelect = document.querySelector('#goal');

// let p1score = 0;
// let p2score = 0;
let winningScore = 3;
let gameOver = false;


btn3.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', function () {   //this function is for selecting the value in the options to win 
   winningScore = parseInt(this.value);    //this convert into the number 
  reset();
})

p1.button.addEventListener('click', function(){
   updateScore(p1,p2)
})
// () =>{

         //this is gameover boolen to check the game is over or not 
   // if(!gameOver){
   //    p1score++;
   //    if(p1score === winningScore){    
   //       gameOver = true ;
   //       p1.classList.add('winner');   // } both are the colour classes 
   //       p2.classList.add('loser');   //  }
   //       btn.disabled = true;        // } this both are the for disabled buttons 
   //       btn2.disabled = true ;      // }
   //    }
   //    p1.innerText = p1score;     //this is to update the score and show the score to input 
   // }

// })


p2.button.addEventListener('click',function(){
   updateScore(p2,p1)
})
// () => {

//    if(!gameOver){                      //if the win score is get then make game over true so that it can increment the value
//       p2score++;
//       if(p2score === winningScore){
//          gameOver = true ;
//          p2.classList.add('winner');   // } both are the colour classes 
//          p1.classList.add('loser');    //  }
//          btn.disabled = true;           // } this both are the for disabled buttons 
//          btn2.disabled = true ;       //  }
//         }
//       p2.innerText = p2score;         //this is to update the score and show the score to input 
//    }

// })



// function reset()     //reset function 
//    {
//       gameOver = false;   //make the gameover to false because the if reset then the game will start from begining 
//       p1score = 0;
//       p2score = 0;      //make score as 0;
//       p1.innerText = 0;   //make the display as 0
//       p2.innerText = 0;
//       p1.classList.remove('winner','loser');  //remove the color classes 
//       p2.classList.remove('winner','loser');
//       btn.disabled = false;   //remove the disabled function 
//       btn2.disabled = false ;
//    }




   // to make shorter this code 

  
   function updateScore(player, opponent){
      if(!gameOver){
         player.score++;
         if(player.score === winningScore){    
            gameOver = true ;
            player.display.classList.add('winner');   // } both are the colour classes 
            opponent.display.classList.add('loser');   //  }
            player.button.disabled = true;        // } this both are the for disabled buttons 
            opponent.button.disabled = true ;      // }
         }
         player.display.innerText = player.score;     //this is to update the score and show the score to input 
      }
   
   }


   function reset(){
      gameOver = false;
      for(let p of [p1,p2]){
         p.score = 0;
         p.display.innerText = 0;
         p.display.classList.remove('winner','loser');
         p.button.disabled = false;
      }
   }