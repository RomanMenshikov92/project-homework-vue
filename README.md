# vuecli_homework

# Фреймворк Vue.js

### [Ссылка на GitHub Pages](https://romanmenshikov92.github.io/project-homework-vue/)

## Домашнее задание №1

Часть 1: Данное задание направлено на подготовку проекта к итоговой аттестации.
По заданному макету https://www.figma.com/file/okdYD45Tj2JpKsNASccUmf/Interior-Design-Webflow-Website-Template-(Community)-(Copy)-(Copy)?type=design&node-id=101-14&t=hPokjgMtIgcsYlyO-0 создать верстку главной страницы (без использования vue).

Часть 2. ### Задачи по vue

1. Создать кнопку "Перевернуть". При клике на кнопку текст кнопки, должен перевернуться и отобразиться в обратном порядке.
2. Есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".
3. - При клике на элемент списка он должен быть удален. (по желанию)

## Домашнее задание №2

1. Продолжаем создание макета https://www.figma.com/file/okdYD45Tj2JpKsNASccUmf/Interior-Design-Webflow-Website-Template-(Community)-(Copy)-(Copy)?type=design&node-id=209-15&t=VK2zHccBmhGGNIzu-0 Домашнее задание 2 страница Blog
   Что мы можем заметить в проекте, что часть "Articles & News" повторяется, как итог, вам необходимо создать блок Articles & News с помощью vue.js где данные для вёрстки будут храниться в массиве объектов и выводить на страницу с помощью цикла v-for
   Задание VUE

2. Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).

## Домашнее задание №3

Реализовать страницу Blog details
На странице отображается подробное описание статьи, а под ней размещаются остальные статьи
Необходимо на выборе Tags чтобы происходила сортировка статей по выбранному тегу. Тег можно выбрать только один

https://www.figma.com/file/okdYD45Tj2JpKsNASccUmf/Interior-Design-Webflow-Website-Template-(Community)-(Copy)-(Copy)?type=design&node-id=541-13&t=mhOD6yhLJuH2Biy0-0

PS: С макетом можете плотно не работать, а реализовать только саму логику без макета. Дизайн внедрить можете позже.

По итогу должно быть три компонента:

1. blog-details (компонент отображения подробной информации о статье)
2. blog (компонент отображения краткой информации о статье в компоненте blogs-list)
3. blogs-list (компонент который выводит список из компонент blog и фильтрует его на основе выбранного тега)

## Домашнее задание №4

Vue cli
Установить и настроить Vue CLI
Перевести свой проект на vue cli
Все компоненты которые создали с помощью vue.components необходимо переделать на синтаксис Vue CLI

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
