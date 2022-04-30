/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const checkTrue = 'images/checked.png';
const checkFalse = 'images/unchecked.png';


function res(){


  for(let i=0; i < 3; i++){
      takenBoxes[i] = undefined;
  }

  const resultContainer = document.querySelector('#result');
  resultContainer.classList.add('hide');


  const vAll = document.querySelectorAll('.choice-grid div');
  for (const x of vAll)
    {
      x.classList.remove("opacity");
      x.style.backgroundColor = '#f4f4f4';
      x.querySelector('.checkbox').src = checkFalse;
      x.addEventListener('click', clickToOverlay);
    }
  
    y=0;

}



function displayWinner(){

  const res = checkResult();

  const resultContainer = document.querySelector('#result');
  resultContainer.classList.remove('hide');

  const header = document.querySelector('#result h1');
  const paragaph = document.querySelector('#result p');
  const button = document.querySelector('#result button');

  if (res === 'blep'){
    header.textContent = RESULTS_MAP['blep'].title;
    paragaph.textContent = RESULTS_MAP['blep'].contents;
  }
   
  if (res === 'burger'){
    header.textContent = RESULTS_MAP['burger'].title;
    paragaph.textContent = RESULTS_MAP['burger'].contents;
  }

  if (res === 'cart'){
    header.textContent = RESULTS_MAP['cart'].title;
    paragaph.textContent = RESULTS_MAP['cart'].contents;
  }

  if (res === 'dopey'){
    header.textContent = RESULTS_MAP['dopey'].title;
    paragaph.textContent = RESULTS_MAP['dopey'].contents;
  }

  if (res === 'happy'){
    header.textContent = RESULTS_MAP['happy'].title;
    paragaph.textContent = RESULTS_MAP['happy'].contents;
  }

  if (res === 'nerd'){
    header.textContent = RESULTS_MAP['nerd'].title;
    paragaph.textContent = RESULTS_MAP['nerd'].contents;
  }

  if (res === 'shy'){
    header.textContent = RESULTS_MAP['shy'].title;
    paragaph.textContent = RESULTS_MAP['shy'].contents;
  }

  if (res === 'sleeping'){
    header.textContent = RESULTS_MAP['sleeping'].title;
    paragaph.textContent = RESULTS_MAP['sleeping'].contents;
  }

  if (res === 'sleepy'){
    header.textContent = RESULTS_MAP['sleepy'].title;
    paragaph.textContent = RESULTS_MAP['sleepy'].contents;
  }

} 


function checkResult(){
  if((takenBoxes[0]  === takenBoxes[1]) || (takenBoxes[0]  === takenBoxes[2]) ){
      return takenBoxes[0];

  }else if (takenBoxes[1]  === takenBoxes[2]){
            return takenBoxes[1];
        }

        return takenBoxes[0];
}




function finalChoices(space)
{

  if(space.dataset.questionId === 'one'){

    takenBoxes[0] = space.dataset.choiceId;
    console.log(takenBoxes[0]); /* verifica */
  }
    
  if (space.dataset.questionId === 'two'){

    takenBoxes[1] = space.dataset.choiceId;
    console.log(takenBoxes[1]); /* verifica */
  } 
  
  if(space.dataset.questionId === 'three'){

    takenBoxes[2] = space.dataset.choiceId;
    console.log(takenBoxes[2]); /* verifica */
  }  

}


function checkFinish(){
  
  let x=0;

  for(let i=0; i < 3; i++){
    if (takenBoxes[i] !== undefined && takenBoxes[i] !== null){
        x = x + 1;
      } 
  }


  if(x === 3){
    for (const box of boxes)
      {
        box.removeEventListener('click', clickToOverlay);
      }
    return 1;
  }

}



function clickToOverlay(event)
{
  const container = event.currentTarget;
  const image = container.querySelector('.checkbox');
  image.src = checkTrue;
  container.style.backgroundColor = '#cfe3ff';
  container.classList.remove('opacity');
  finalChoices(container);

 
  y = checkFinish();

  if(y===1){
  displayWinner();
  }

  for(let i=0; i < boxes.length; i++){
    if (boxes[i].dataset.questionId === container.dataset.questionId){
      if(boxes[i].dataset.choiceId !== container.dataset.choiceId){
          boxes[i].querySelector('.checkbox').src = checkFalse;
          boxes[i].classList.add('opacity');
          boxes[i].style.backgroundColor = '#f4f4f4';
      }
    } 
  }
}


let y = 0;
const takenBoxes = {};   

const boxes = document.querySelectorAll('.choice-grid div');
for (const box of boxes)
{
  box.addEventListener('click', clickToOverlay);
}


const reset = document.querySelector('button');
reset.addEventListener('click', res);
