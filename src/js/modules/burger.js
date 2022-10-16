export const btn = document.getElementById('burgerbutton');
        btn.addEventListener(
            'click', 
            function (event){
                btn.classList.toggle('active');
            }
        );
        //Соединяем нажатие на бургер с выкатыванием плашки такой же командой js
        const windowburger = document.getElementById('windowacrive');
        //Далее важно, что функция активируется нажатием на бургер (btn.addEvent...), а изменяет положение плашки(windowburger.classList.toggle('windactive'...)
        btn.addEventListener(
            'click',
            function (event){
                windowburger.classList.toggle('windactive');
            }
        );