let myPage = 'https://jsonplaceholder.typicode.com/users';
let button = document.getElementById('button');
let usersContainer = document.getElementById('usersContainer');
button.addEventListener('click', function () {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', myPage);
            xhr.responseType = 'json';
            xhr.onload = function () {
                if (xhr.status >= 400){
                    console.log(xhr.responseText)
                    usersContainer.innerHTML = xhr.responseText;
                }
                else {
                    usersContainer.innerHTML = '';
                    for (let item of xhr.response) {
                        let divElem = document.createElement('div');
                        divElem.innerText = '\n'+item.name;
                        divElem.id = item.id;0
                        usersContainer.append(divElem);

                       divElem.addEventListener('click', function () {
                            for (let e of divElem.id){
                                divElem.innerText = "\nName: " + item.name + '; ' + "\nUsername: " + item.username;
                            }
                        })
                    }
                }
            }
            xhr.onerror = function () {
                console.log(xhr.response)
            }
            xhr.send()
        });
