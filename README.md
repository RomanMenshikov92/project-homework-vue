# vuecli_homework

# Фреймворк Vue.js

<!-- ### [Ссылка на GitHub Pages](https://romanmenshikov92.github.io/project-homework-vue/) -->

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

## Домашнее задание №5

Создайте компоненты шапки и подвала, чтобы можно было подключать их к новым страницам
Vue
Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails". Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.
Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).
Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".
В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.
Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock".

## Домашнее задание №6

Перевести весь проект на компоненты, теперь можно работать с пропсами и выводить компоненты удобным для вас способом, чтобы их в дальнейшем можно было сортировать или менять
Создать страницу https://www.figma.com/file/okdYD45Tj2JpKsNASccUmf/Interior-Design-Webflow-Website-Template-(Community)-(Copy)-(Copy)?type=design&node-id=993-13&mode=design&t=GgrNWje1dd3mkCbQ-0
В блоке categoreis необходимо сделать переключение проектов на ваше усмотрение
Проект один в один создавать не нужно, работаем исключительно с кодом, любая стилистика уходит на второй план, если нет времени на добавление стилей, создавайте логику сайта, а вёрстку можно будет доделать и позже

## Домашнее задание №7

Установить VueX добавить к проекту
Приступаем к вёрстке новой страницы project details
Информацию про описание проекта вынести в state
Слайдер можно сделать самостоятельно с помощью vue или сделать с помощью bootstrap

## Домашнее задание №8

Навигация в приложении Vue-Router

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
