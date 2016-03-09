// --------- TASK 1 ---------------

$(document).ready(function () {
var task1 = document.getElementById( "task_1" );
var btn1 = document.createElement( "button" );
$(btn1).click(function(){
    alert('Hello, How are you?');
    })
var btn1_text = document.createTextNode('Click Me');
btn1.appendChild(btn1_text);
$( task1 ).append( btn1 );
// --------- TASK 2 ---------------

$('.checkText').click(function() {
    var text = $( "#checkMe" ).val();
    alert(text);
});


// // --------- TASK 3 ---------------


$(".task3_divClass").on('mouseover', function(){
        this.style.backgroundColor = 'green';
        }).on('mouseout', function(){
        this.style.backgroundColor = 'red';
    })

    
// // --------- TASK 4 ---------------

$('#task4_div').click(function(e){
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            e.target.style.color = color;
})

// // --------- TASK 5 ---------------

$('#button5').click(function(){
    var getDiv = document.getElementById("task5_div");
    var newSpan = document.createElement("span");
    newSpan.innerHTML = "<p>Brian Caskey</p>";
    getDiv.appendChild(newSpan);
})

// // --------- TASK 6 ---------------

task6 = function () {
    var i;
    for (i = 0; i < myFriends.length; i++) {
        newFriend = myFriends[i];
        var myDiv6 = document.getElementById('task6_list');
        var newListItem = document.createElement("li");
        newListItem.innerHTML = myFriends[i];
        myDiv6.appendChild(newListItem);        
    }
}  
$('#button6').click(function(){
    myFriends = ['Mickey', 'Pluto', 'Donald', 'Goofy', 'Grumpy', 'Doc', 'Woody', 'Buzz', 'Rex', 'Mater'];
    for (i = 0; i < myFriends.length; i++) {
     var myFriendsLi = $('<li></li>').text(myFriends[i]);
     $('#task6_list').append(myFriendsLi);   
    }
    })
});
