const myContainer = document.querySelector('.container .pass');
const my = document.querySelector('.container')

function mykey(e){
    myContainer.style.display = "none";
   my.innerHTML = ''
    const javaText = document.createElement('p');
    javaText.textContent = `Javascript key code for ${e.key} is:  ${e.keyCode}`;

    javaText.style.fontSize = '1.5rem';
    
    //big tex for keycode

    const keyC = document.createElement('h1');
    keyC.textContent = e.keyCode;
    keyC.style.fontSize = '5rem';

    // for the div container for each element;

    const wrapDiv = document.createElement('div');
    wrapDiv.className = 'warp';
    wrapDiv.style.display = 'flex';
    wrapDiv.style.gap = '1rem';
    wrapDiv.style.flexWrap = 'wrap';
    wrapDiv.style.flexWrap = 'wrap';
    wrapDiv.style.alignItems = 'center';
    wrapDiv.style.justifyContent = 'center';



    const blockDiv = document.createElement('div');
    blockDiv.className = 'myblock';

    const blockDiv0 = document.createElement('div');
    blockDiv0.className = 'myblock';

    const blockDiv1 = document.createElement('div');
    blockDiv1.className = 'myblock';

    const blockDivC = document.createElement('div');
    blockDivC.className = 'myblock2';

    if(e.key === ' '){
        blockDivC.textContent  = 'space'
    }
    else{
        blockDivC.textContent  = e.key
    }

    const event = document.createElement('p');
    event.className = 'event';
    event.textContent = 'Event.Key';

    // for code
    const blockDiv2 = document.createElement('div');
    blockDiv2.className = 'myblock2';
    blockDiv2.textContent  = e.keyCode;
    
    const event2 = document.createElement('p');
    event2.className = 'event';
    event2.textContent = 'Event.keyCode';

    const blockDiv4 = document.createElement('div');
    blockDiv4.className = 'myblock2';
    blockDiv4.textContent  = e.code;
    
    const event3 = document.createElement('p');
    event3.className = 'event';
    event3.textContent = 'Event.Code';
    
    blockDiv.appendChild(event)
    blockDiv.appendChild(blockDivC)

    blockDiv0.appendChild(event2)
    blockDiv0.appendChild(blockDiv2);

    blockDiv1.appendChild(event3)
    blockDiv1.appendChild(blockDiv4);

    wrapDiv.appendChild(blockDiv);
    wrapDiv.appendChild(blockDiv0);
    wrapDiv.appendChild(blockDiv1);

    my.appendChild(javaText)
    my.appendChild(keyC)
    my.appendChild(wrapDiv)

}




window.addEventListener('keydown',mykey);