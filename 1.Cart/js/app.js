// VARIABLES //
const cart = document.querySelector('#carrito');
const cartList = document.querySelector('#lista-carrito');
const coursesList = document.querySelector('#lista-cursos');
const deleteCartBtn = document.querySelector('#vaciar-carrito');

// LISTENERS //
chargeEventListeners();
function chargeEventListeners(){
    coursesList.addEventListener('click', addCourse);
}

// FUNCTIONS //
function addCourse(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const selectedCouse = e.target.parentElement.parentElement;
        readDataCourse(selectedCouse);
    }   
}

function readDataCourse(course) {
    const infoCourse = {
        image: course.querySelector('img').src
    }

    console.log(infoCourse);

}