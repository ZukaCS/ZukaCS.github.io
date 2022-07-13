var button = document.querySelector('button');
button.addEventListener('click', function () {

    if(button.value == 'Dark Mode')
    {
        button.innerHTML = 'Light Mode';
        button.value = 'Light Mode';
        document.querySelector('main').style.backgroundColor = 'gray';
        document.querySelectorAll('main .general > div').forEach(function(item){
            item.style.backgroundColor = 'black';
            item.style.color = 'white';
        });
        document.querySelectorAll('main .general > div > div a').forEach(function(link){
            link.style.color = 'white';
        });
        document.querySelectorAll('main .hobbies-showcase > div').forEach(function(item){
            item.style.backgroundColor = 'black';
            item.style.color = 'white';
        });
    }
    else {
        button.innerHTML = 'Dark Mode';
        button.value = 'Dark Mode';
        document.querySelector('main').style.backgroundColor = '#F5EDDC';
        document.querySelectorAll('main .general > div').forEach(function(item){
            item.style.backgroundColor = 'white';
            item.style.color = 'black';
        });
        document.querySelectorAll('main .general > div > div a').forEach(function(link){
            link.style.color = 'black';
        });
        document.querySelectorAll('main .hobbies-showcase > div').forEach(function(item){
            item.style.backgroundColor = 'white';
            item.style.color = 'black';
        });

    }
});