$('document').ready(function(){
    //create a close button to 
    //add to each list item
    var nodeList = document.querySelectorAll('li');
    
    for(var i = 0; i < nodeList.length; i++){
        var span = document.createElement('span');
        $('span').addClass('close');
        var txt = document.createTextNode('\u00D7');
        span.appendChild(txt);
        
        nodeList[i].appendChild(span);
        console.log('nodeList innerHTML ' + nodeList[i].innerHTML);
    }
    $('span').addClass('close');
    
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

$('document').ready(function(){
    $('button#addItem').click(function(){
        var li = document.createElement('li');
        var inputValue = document.getElementById('todoText').value;
        var text = document.createTextNode(inputValue);
        
        if(text.length == 0){
            alert('You must write something');
        }else{
            li.appendChild(text);
            document.getElementById('list').appendChild(li);
            document.getElementById('todoText').value = '';
        }
        
        
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        
        span.appendChild(txt);
        li.appendChild(span);
        $('li').addClass('list-group-item');
        $('span').addClass('close');
        var close = $('.close');
        for(var i = 0; i < close.length + 1; i++){
           close[i].onclick = function(){
               var div = this.parentElement;
               div.style.display = "none";
           };
        }
    });
})