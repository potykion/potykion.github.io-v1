---
title: Фронтенд-биография 
description: Чем я занимался как frontend разработчик
---

### Хтмл-шаблоны на сервере

Начинал я как бекенд-разраб, писал апишки и админки для мобильного приложения по доставке еды, типа деливери клаб,
только не одно приложение с 100 ресторанами, а 100 приложений, каждое из которых про 1 заведение. И, как бы, админки
были на хтмл-шаблонах - **jinja / django-templates** - то есть хтмл, с расширениями, типа ифов, циклов; рендерится на
сервере.

<img-swiper>
  <img-block src="/images/dev/vue/bio/admin-2016.png" alt="Одна из первых моих задач: конструктор зон доставки на Яндекс картах"></img-block>
</img-swiper>

Потом была отдельная админка для учета юрлиц и документооборота. То есть по-началу тоже простые формочки с данными о юл
и формочки для генерации документов. Под документами имеются в виду отчеты, счета, акты. И в какой-то момент заведующему
финансами захотелось, чтобы данные в отчетах можно было редактировать из веб-интерфейса. Такое делать на хтмл-шаблонах
делать не очень кайфово, тк много реактивности, и я как раз в то время изучал Vue.

<img-swiper>
  <img-block src="/images/dev/vue/bio/legals-2019.png" alt="Редактирование данных отчетов из вебчика"></img-block>
</img-swiper>

---

### Реакт замороченный

Это был 2019 год, то есть я уже 3 года работал в компании, то есть ко Vue я пришел не сразу. Году в 2017 были задачи на
поддержку приложения-баристы на Реакте (о нем позже), а, тк я был серверным разрабом, я не очень понимал, что там
происходит и делал задачи на фронтенд наощупь. Потом, в качестве интереса, я засел и начал изучать Реакт основательно —
узнал что такое **реактивность, Redux стейт-менеджмент, инъекция зависимостей** и тд. В то время в 2018, Реакт показался
мне замороченным, много бойлерплейта, много библиотек, и я решил, что фронтенд это не очень круто.

<img-swiper>
  <img-block src="/images/dev/vue/bio/barista-2017.png" alt="Бариста на Реакте"></img-block>
</img-swiper>

Потом мое руководство решило, что нам надо сделать сайт по доставке еды, и фронтендеров у нас тогда в команде не было, и
наняли человека, который Vue знал. Ну и как бы это значило, что надо Vue изучать, потому что наверняка будут задачи на
поддержку сайта, если фронтендер уволится / будет недоступен.

---

### Вью любимый

И вот в период с 2018 по 2019 я начал изучать Vue, и он показался мне гораздо легче Реакта (хотя возможно, если бы у
меня не было опыта с Реактом, то было бы так же сложно). Родные html-шаблоны, стейт-менеджмент, роутинг - vuex,
vue-router - о них из документации узнаешь - и как бы этото джентльменского набора достаточно.

Параллельно в то время популяризировалась типизация в Python. И захотелось типизации в JS. Тогда 2 игрока популярных
было:
Flow - типизация на комментариях и **TypeScript** - надстройка над JS с типами. Я решил попробовать TS, и не прогадал.
Для Vue есть библиотеки, которые позволяют писать Vue-компоненты в виде классов: **vue-class-component,
vue-property-decorator** - очень удобно и типизировано.

Ну и как бы все, думаешь, чего еще желать, а оказывается есть **Nuxt** - Vue-фреймворк, там из коробки все настроено и
стейт, и роутинг, и доп плюшки, типа плагинов, лейаутов, и структура папок есть хорошая — вообще кайф.

Но все же осталась еще одна вещь, которая мне не нравилась во Vue-инфраструктуре - это то стейт-менеджмент. Стандартный
синтаксис объектов и функции типа mapState попахивали динамикой, и хотелось построже типизацию. И нашлось решение -
**vuex-simple**. Эта библиотека позволяет писать vuex-модули в виде классов на манер vue-компонентов, а доступ к стору —
вызов методов, обращение к полям объекта стора - и теперь я полностью удовлетворен Vue.

---

### Админка

В 2020 решили переписывать сервер и админку. Целый диз нарисовали, и мне предстояло делать его целиком:

<img-swiper>
  <img-block src="/images/dev/vue/bio/admin-2020.png" alt="Новый диз админки"></img-block>
</img-swiper>


Большую часть я его сделал, но были части, которые требовали доработок со стороны дизайна, которые долго не поступали,
тк этим занимался менеджер.

Одной из частей админки была бариста — приложение для приема и обработки заказов. Его мы решили реализовать отдельно и
интегрировать с легаси сервером.


<img-swiper>
  <img-block src="/images/dev/vue/bio/barista-2021.png" alt="Новая бариста"></img-block>
</img-swiper>

Баристу я писал, используя все свои любимые штуки:

- Основа - **Nuxt** + **nuxt-property-decorator**
- UI - **Vuetify**
- Запросики к серверу через **axios**
- **TS**иком описывал интерфейсы данных с серва и вью-модели страничек
- Стейт-менеджмент - иммутабельный на **vuex-simple** + **vue-typedi**
- Работа с датами через **dayjs**

Функционал там был примерно такой:

- отображение актуальных заказов: группировка по статусам, отображение деталей заказа: на какой адрес везти, что за
  клиент, состав заказа
- действия с заказом: выдача, отмена, перенос на другое время / в другое заведение
- периодическое обновление статусов заказов + вывод уведомлений о новых заказах (звук + пуш)
- стоп-листы: установка доступности продукта в определенном заведении
- история заказов: вывод табличных данных с различными фильтрами

---

### Пару слов о CSS

Писать CSS я не большой любитель, я любитель использовать UI-фреймворки, типа **Vuetify**.

Если с этим беда, то **TailwindCSS** упрощает жизнь — эта библиотека предоставляет набор css-классов на все случаи
жизни, таким образом можно сделать кастомную верстку по-минимуму используя CSS.

Если и Tailwind использовать нельзя, а CSS надо писать много, то хотя бы препроцессор хотелось бы — тоже вкусные фичи он
предоставляет, типа переменных, наследования — хотя современный css уже и переменные предоставляет, так что и с просто
cssом можно жить.

