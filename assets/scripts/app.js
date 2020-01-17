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
const entryTextSection = document.getElementById('entry-text');
const movies = [];

const updateUI = ()=> {
    if(movies.length === 0){
        entryTextSection.style.display='block';
    } else{
        entryTextSection.style.display='none'
    }
};

const deleteMovieHandler =(movieId)=> {
    let identifiedIndex =0;
    for(const movie of movies){
        if(movie.id === movieId){
        break;//if you find the right index then break
    }
    identifiedIndex++
    }
    movies.splice(identifiedIndex, 1)
    const listRoot = document.getElementById('movie-list');
    listRoot.children[identifiedIndex].remove();
   // listRoot.removeChild(listRoot.children[movieIndex]);
};


const renderNewMovieElement = (id,title,image,rating)=> {
    const newMovieElement = document.createElement('li')
    newMovieElement.className ='movie-element';
    newMovieElement.innerHTML=`
    <div class = "movie-element__image">
    <img src= "${image}" alt = "${title}">
    </div>
    <div class = "movie-element__info">
    <h2>< ${title}/h2>
    <p> ${rating}/5 stars</p>
    </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
    const listRoot= document.getElementById('movie-list');
    listRoot.append(newMovieElement);//add new movie element to list of movies
}


const toggleBackdrop = ()=>{
    backdrop.classList.toggle('visible');
}
const toggleMovieModal = ()=> {
    addMovieModal.classList.toggle('visible')//addMovieModal.className can also work
    toggleBackdrop();
}//this will keep all other classes and will keep the visible depending upon if we toggle or not

const clearMovieInputs=()=>{
    for(const userInput of userInputs){
        userInput.value ='';
    }
}
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
        const newMovie={
            id: Math.random().toString(),
            title:titleValue,
            image:imageUrlValue,
            rating:ratingValue
        };
        movies.push(newMovie);
        console.log(movies);
        toggleMovieModal();
        clearMovieInputs();
        renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating)
        updateUI();
    }


const backdropClickHandler = ()=> {
    toggleMovieModal();
}
startAddMovieButton.addEventListener('click', toggleMovieModal)
backdrop.addEventListener('click', backdropClickHandler)
cancelAddMovieButton.addEventListener('click', cancelAddMovie)
confirmAddMovieButton.addEventListener('click', addMovieHandler )