
// function hideLoginForm() {
//     const form = document.getElementById('login-form');
//     form.style.display = 'none';
//     const cardsection = document.getElementById('card-section');
//     cardsection.style.display = 'contents';
   

    
// }
function hideLoginForm(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeat-password').value;

    if (email === '' || password === '' || repeatPassword === '') {
        alert('Please fill in all fields');
    } else {
        const form = document.getElementById('login-form');
        form.classList.add('hidden');
        const cardsection = document.getElementById('card-section');
        cardsection.classList.remove('hidden');
    }
}










   



