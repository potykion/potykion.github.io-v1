---
title: Как поставить новую версию Python?
description: Использовать pyenv
hideHeading: true
color: bg-green-50
---

<div class="mendel-card text-lg md:text-xl rounded-3xl  ">

## Как поставить новую версию Python?


<div class="bg-green-50 px-4 py-1 rounded-md">

Использовать [pyenv](https://github.com/pyenv/pyenv)

</div>


<hr />


1. Ставим pyenv:

      <a class=" font-bold   " href="https://pyenv-win.github.io/pyenv-win/">
      https://pyenv-win.github.io/pyenv-win/
      </a>
    

2. Смотрим какие версии Python есть: 

   ```pyenv install -l```


2. Ставим Python: 


    ```pyenv install 3.9.6```
    

4. Активируем Python: 
   
    ```pyenv shell 3.9.6```

   *(нужно для получения пути к интерпретатору)*

5. Получаем путь к интерпретатору: 
   
    ```pyenv which python```
    
    Выведется примерно такая строка:
    
    ```
    C:\Users\GANSOR\.pyenv\pyenv-win\versions\3.9.6\python.exe
    ```


Все! Теперь можно **использовать этот путь для создания venv** и радоваться новой версии Python.



</div>
