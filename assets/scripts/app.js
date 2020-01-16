//fast ffrom performance perspective always use an id if you have an id
const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal');
//they do the same just call diffrent methods or yu can use:
//const addMovieModal = document.body.children[1];
//console.log(addMovieModal);
//to select an header 
const startAddMovieButton = document.querySelector('header button')
//or because yje button is the last element the only drawback is if you add something
//it won't work bcoz it will always select the last
//const startAddMovie = document.querySelector('header').lastElementChild;

const backdrop = document.getElementById('backdrop')
//or const backdrop = document.body.firstElementChild bcoz the 1st child in the body is backdrop
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
//const userInputs = addMovieModal.getElementsByTagname('input')
const movies = [];
const toggleBackdrop = ()=>{
    backdrop.classList.toggle('visible');
}
const toggleMovieModal = ()=> {
    addMovieModal.classList.toggle('visible')//addMovieModal.className can also work
    toggleBackdrop();
}//this will keep all other classes and will keep the visible depending upon if we toggle or not
const cancelAddMovie = ()=> {
    toggleMovieModal();
    };
const addMovieHandler=()=>{
        const titleValue = userInputs[0].value
        const imageUrlValue = userInputs[1].value;
        const ratingValue = userInputs[2].value;

        if(titleValue.trim()=== '' || 
        imageUrlValue.trim()==='' ||
        ratingValue.trim()===''||
        +ratingValue<1 || 
        +ratingValue>5
        ) {
            alert('Please enter valid values')
            return;
        }
    }

const backdropClickHandler = ()=> {
    toggleMovieModal();
}
startAddMovieButton.addEventListener('click', toggleMovieModal)
backdrop.addEventListener('click', backdropClickHandler)
cancelAddMovieButton.addEventListener('click', cancelAddMovie)
confirmAddMovieButton.addEventListener('click', addMovieHandler )