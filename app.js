document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  

  let board = document.querySelector('.grid')
  

  //add 12 iamges to the board
  for(let i = 0 ; i < 12; i++){
    let img = document.createElement('img')
    img.setAttribute('src','images/blank.png')
    img.setAttribute('id',i)
    img.setAttribute('alt',cardArray[i].name)
    board.append(img)
  }


  // add listener to each cards
  let allCards  = document.querySelectorAll('.grid img')

  let twoCardArr = [];
   
  allCards.forEach(c =>{
    c.onclick = function(){
      if(twoCardArr.length < 2){
        if(c.getAttribute('src') == "images/white.png"){
          c.removeEventListener('click')
        }else if(c.getAttribute('src') == "images/blank.png"){
          //flip the card and push it to temparr
            c.setAttribute('src',cardArray[c.id].img)
            twoCardArr.push(c)          

            //when two card is flipped, check if it matches
            if(twoCardArr.length == 2){
                if(twoCardArr[0].id == twoCardArr[1]){
                  twoCardArr = [];
                }else if(twoCardArr[0].alt == twoCardArr[1].alt && twoCardArr[0].id != twoCardArr[1].id){
                  //if two cards are fliped with differnet id, then change it to white card and remove listener
                  setTimeout(() => {
                    twoCardArr[0].setAttribute('src',"images/white.png")
                    twoCardArr[1].setAttribute('src',"images/white.png")
                    twoCardArr = [];
                    parseInt(document.querySelector('#result').textContent++)      
                    if(parseInt(document.querySelector('#result').textContent) == 6){
                      document.querySelector('#result').textContent = " Congratulation you found them all!"
                    }                           
                  }, 700);
                  // document.querySelector('#result').innerHTML = parseInt(document.querySelector('#result').innerHTML)+= 1;     
         
                } else {
                  setTimeout(() => {
                    twoCardArr[0].setAttribute('src','images/blank.png')
                    twoCardArr[1].setAttribute('src','images/blank.png')   
                    twoCardArr = [];               
                  }, 1000);

                }
                

              }             
            
            console.log(twoCardArr)
        } else {
          //if one card is flipped twice then it go back to blank image
          c.setAttribute('src','images/blank.png')
          twoCardArr = [];
        }        
      }

      
    } 
  }) 










//hsokmeadfad












})
