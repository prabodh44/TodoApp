$('document').ready(function(){
    //create a close button to 
    //add to each list item
    var nodeList = document.querySelectorAll('li');
    console.log(nodeList);
    
    for(var i = 0; i <  nodeList.length; i++){
        var span = document.createElement('span');
        var txt = document.createTextNode('\u00D7');
        span.appendChild(txt);
        $('span').addClass('close');
        nodeList[i].appendChild(span);
    }
    
    //click on close button
    //to hide current list
    var close = $('.close');
    for(var i = 0; i < close.length; i++){
       close[i].onclick = function(){
           var div = this.parentElement;
           div.style.display = "none";
       };
    }

    //add the checked symbol when
    //clicking the list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function(event){
        if(event.target.tagName === "LI"){
            event.target.classList.toggle('checked');
        }
    },false);


});