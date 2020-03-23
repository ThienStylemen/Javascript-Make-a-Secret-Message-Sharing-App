const {hash} = window.location; //window.location
const message = atob(hash.replace('#',''));
if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event =>{
    event.preventDefault();
/*The information inside that form in automatically attempt to submit it to some back-end server
In our case we don't have any back to re see that information, So we're going to call prevent 
default to stop the default. Browser Behavior which is to submit the form */
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);    
    const linkInput = document.querySelector('#link-input');
    
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();// the user can copy the line easily
}); 