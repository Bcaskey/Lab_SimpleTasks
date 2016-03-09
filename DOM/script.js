// --------- TASK 1 ---------------
document.addEventListener('DOMContentLoaded', function () {
    var myTopButton = document.createElement('button');
    myTopButton.innerText = 'Click me';
    myTopButton.onclick = message;
    document.getElementById('task_1').appendChild(myTopButton)
    function message(){
        alert('Thanks for Clicking me.');
    } 
})

// --------- TASK 2 ---------------

var checkText = function () {
    var text = document.getElementById('#checkMe').value;
    alert(text);
}

// --------- TASK 3 ---------------

chgDiv3 = function () {
    var myDiv3 = document.getElementById('task3_div');
    myDiv3.addEventListener('mouseover', chgColor1);
    myDiv3.addEventListener('mouseout', chgColor2);

    function chgColor1(e) {
        e.target.style.backgroundColor = 'red';
    }
    function chgColor2(e) {
        e.target.style.backgroundColor = 'green';
    }
}

// --------- TASK 4 ---------------

chgDiv4 = function () {
    var myDiv4 = document.getElementById('task4_div');
    myDiv4.addEventListener('click', getRandomColor);

        function getRandomColor(e) {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            e.target.style.color = color;
        }
    }
    
// --------- TASK 5 ---------------

task5 = function () {
    var myDiv5 = document.getElementById('task5_div');
    myDiv5.addEventListener('click', appendText5);
    
    function appendText5 () {
        var getDiv = document.getElementById("task5_div");
        var newSpan = document.createElement("span");
        newSpan.innerHTML = "<p>Brian Caskey</p>";
        getDiv.appendChild(newSpan);
    }
    
}

// --------- TASK 6 ---------------


task6 = function () {
    myFriends = ['Mickey', 'Pluto', 'Donald', 'Goofy', 'Grumpy', 'Doc', 'Woody', 'Buzz', 'Rex', 'Mater'];
    var i;
    for (i = 0; i < myFriends.length; i++) {
        newFriend = myFriends[i];
        var myDiv6 = document.getElementById('task6_list');
        var newListItem = document.createElement("li");
        newListItem.innerHTML = myFriends[i];
        myDiv6.appendChild(newListItem);        
    }
}   
