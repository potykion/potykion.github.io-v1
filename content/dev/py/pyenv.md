---
title: pyenv
description: Или как легко накатить новую версию Python
hideHeading: true
color: bg-green-50
---

<div class="mendel-card p-0 rounded-3xl  ">

<div class="bg-green-100 p-2 rounded-t-3xl">

# pyenv

<div class="text-center italic text-lg ">или как легко накатить новую версию Python</div>

</div>

<div class="px-6 py-4">

## Установка

<a class="text-blue-600 text-lg md:text-2xl  visited:text-blue-600" href="https://pyenv-win.github.io/pyenv-win/">
https://pyenv-win.github.io/pyenv-win/
</a>


---


## Применение

- `pyenv install --list` - вывод версий Python, которые можно установить
- `pyenv install 3.9.6` - установка определенной версии Python, в данном случае 3.9.6

---

- `pyenv shell 3.9.6` - чтобы терминал использовал определенную версию Python
- Есть вариации для директории: <br class="md:hidden"> `pyenv local 3.9.6`
- И глобально для системы: <br class="md:hidden"> `pyenv global 3.9.6`

---

- `pyenv which python` - показывает путь к интерпретатору Python 
- Этот путь можно использовать для создания venv *(а дальше уже и для poetry/pipenv/etc.)*:

  ```shell
  > pyenv which python
  C:\Users\GANSOR\.pyenv\pyenv-win\versions\3.9.6\python.exe
  ```


</div>
</div>
