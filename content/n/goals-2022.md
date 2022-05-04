---
title: Цели 2022
description: Чем займусь в 2022
cover: /images/n/goals-2022/cover.jpg
---

<div class="mendel-card">

# В КОНЦЕ ГОДА НАПИШУ РЕЗУЛЬТАТЫ
## КАЖДЫЙ ДЕНЬ/НЕДЕЛЮ/МЕСЯЦ ОБНОВЛЯТЬ ПРОГРЕСС ЛЕНЬ

</div>

<div class="mendel-card">

<details>
<summary><h2 class='inline'>Вступление</h2></summary>

Внезапно, всякие никсели-пиксели делают норм видосы, напр. [про то, как сделать интернет-магаз](https://www.youtube.com/watch?v=0Xtt_hCqhlw).
И есть еще аня консервы - это примерно как нихель пихель - видосы про ментал очку, про рисовач.
И крч она выпустила видос про колесо жизни:

<iframe width="560" height="315" src="https://www.youtube.com/embed/0V_DEr_2VMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Крч есть такая тема как "Колесо жизни" - суть в том, что есть 8 сфер жизни, и для каждой ты пишешь че ты хочешь в ней сделать.
При этом надо стараться каждую сферу двигать, иначе будет перекос в какую-то одну сферу и ты перегоришь, уйдешь в депрессию, сдохнешь...

И у меня пиздец откликнулось - этож супер фреймворк/система для составления целей. И вопрос "бля что я хочу, чем заняться" отпал, теперь понятно на какие темы придумывать себе цели

</details>

---

## Прогресс

<n-goals-2022-progress-chart :goals="goals"></n-goals-2022-progress>


 </div>

<div class="mendel-card">

## 🏥 Здоровье

<n-goals-2022-goal-list :goals="goals.filter(g => g.category === 'health')" ></n-goals-2022-goal-list>

</div>

<div class="mendel-card">

## 💵 Деньги

<n-goals-2022-goal-list :goals="goals.filter(g => g.category === 'money')" ></n-goals-2022-goal-list>


</div>

<div class="mendel-card">

## 👷‍♀️ Работа 

<n-goals-2022-goal-list :goals="goals.filter(g => g.category === 'work')" ></n-goals-2022-goal-list>

</div>

<div class="mendel-card">

## 💑 Отношач

<n-goals-2022-goal-list :goals="goals.filter(g => g.category === 'rel')" ></n-goals-2022-goal-list>

</div>

<div class="mendel-card">

## 🍻 Друзья

<n-goals-2022-goal-list :goals="goals.filter(g => g.category === 'friends')" ></n-goals-2022-goal-list>

</div>

<div class="mendel-card">

## 🚗 Развитие

<n-goals-2022-goal-list :goals="goals.filter(g => g.category === 'growth')" ></n-goals-2022-goal-list>

</div>

<div class="mendel-card">

## 🎮 Отдых / хобби

<n-goals-2022-goal-list :goals="goals.filter(g => g.category === 'rest')" ></n-goals-2022-goal-list>

</div>

<div class="mendel-card">

## ⛪ Дух

<n-goals-2022-goal-list :goals="goals.filter(g => g.category === 'soul')" ></n-goals-2022-goal-list>

</div>
