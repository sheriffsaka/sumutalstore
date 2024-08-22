//Declaring your element variables by assigning values from the form.
const form = document.getElementById('contact-form');
const fullnameIn = document.getElementById('fullname');
const emailIn = document.getElementById('email');
const fbackIn = document.getElementById('feedback');
const sbtn = document.getElementById('btn1');

//Defining the event function
sbtn.addEventListener('click', handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    const fullname = fullnameIn.value;
    const email = emailIn.value;
    const fback = fbackIn.value;

    //Create a user objetc
    const user = {
        fullname,
        email,
        fback
    };

    //Store the user object in local storage.
    localStorage.setItem('user',JSON.stringify(user));

    //Clear the form fields
    form.reset();

    //Display a success message
    alert('Feedback Submitted Successfully!!!');
}

