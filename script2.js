let menuItems = document.querySelectorAll('.menu-item'); // получаем элементы левого меню 

menuItems.forEach(el => { // проходимся через цикл 
    el.addEventListener('click', () => { // добавляем ивент на клик 
        let itemName = el.classList.value.replace('menu-item ', ''); // получаем второй класс, чтобы найти нужную информацию на странице
        let infosParent = document.querySelector('.info-zxc'); // берем элемент с информацией чтобы искать элемент по селектору

        for (let i = 0; i < infosParent.children.length; i++) { // скрываем все элементы с информацией
            infosParent.children[i].classList.add('hidden'); 
        }
       
        let info = infosParent.querySelector(`.${itemName}`); // находим нужный элемент, который нужно показать

        info.classList.remove('hidden'); // показываем элемент

    })
})
