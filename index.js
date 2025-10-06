

/**styling */

function showinfopopup(text){
    document.querySelector('.infopop').classList.toggle('heal-infopop');
   document.querySelector('.infopop').innerHTML= text;
    

};

/*function hidepopup(){
        document.querySelector('.infopop').classList.remove('heal-infopop');

    }*/
    /**removing the popup if clicked outside  */
document.addEventListener('click' , function(e){
    e.stopPropagation;
    const popup = document.querySelector('.infopop');
    if (popup.classList.contains('heal-infopop') && !popup.contains(e.target)){
        popup.classList.remove('heal-infopop');
        
        

    }
});
function showinfopopup(text){
    event.stopPropagation(); // prevent outside-click listener from firing
    const popup = document.querySelector('.infopop');
    popup.innerHTML = text;
    popup.classList.toggle('heal-infopop');
     setTimeout(()=> {popup.classList.remove('heal-infopop')}, 3000);
}



/*n8n*/
/*
async function n8nask(){
    const input = document.querySelector('.inputbox').value;
    const responseBox = document.querySelector('.response');

    try {
        const res = await fetch("https://jinx07.app.n8n.cloud/webhook/deee7e22-b6f5-46ab-a28c-39e3bcd8d4da",{
            method:"POST",
            headers: {"Content-Type":"application/json" },
            body: JSON.stringify({question:input})
        });
        const data = await res.json();
        responseBox.innerText = data.output || JSON.stringify(data);



    } catch (error) {
        //responseBox.innerHTML = json(error);
        console.error(err);
        responseBox.innerText = "error while fetching"
        
    }

};

///chat
import  { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

            createChat({
                webhookUrl: 'https://jinx07.app.n8n.cloud/webhook/167e23b9-cc2a-4234-a5e2-418c0c7b33b1/chat'
            });
*/
//add darkmode
function toggleDarkMode(){            
    if (document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
    }
    else{
        document.body.classList.add('dark');

}};
//dropdown class list
function listlist(){
const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.list-burger');
hamburger.addEventListener('click', ()=>{
    dropdown.style.display = 'none'
    console.log('hello'); 
    });
}
//show list
function showlist(){
    const list = document.querySelector('.list-burger');
    if (list.style.display === 'none'){
        list.style.display = 'block';
    }
    else{
        list.style.display = 'none';
    }
};