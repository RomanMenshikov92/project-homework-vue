<template>
  <div class="product">
    <h3 class="product__name">{{ this.product.name }}</h3>
    <img class="product__img" :src="product.img" :alt="product.name" />
    <div class="product__price">{{ formattedPrice }}</div>
    <div class="product__counter">
      <button
        class="product__btn"
        :disabled="downDisabled"
        @click="changeCount('-')"
      >
        -
      </button>
      <input
        class="product__input"
        :disabled="inputDisabled"
        v-model.number="counter"
        @blur="checkInput"
        type="number"
      />
      <button
        class="product__btn"
        :disabled="upDisabled"
        @click="changeCount('+')"
      >
        +
      </button>
    </div>
    <div class="product__total">Сумма заказа: {{ totalSum }}</div>

    <template v-if="counter > this.product.available">
      <span class="product__count-red"
        >Максимально возможно заказать не более
        {{ this.product.available }} штук товара</span
      >
    </template>

    <template v-else-if="counter <= 0">
      <span class="product__count-red"
        >Минимальное количество товаров к заказу = 1</span
      >
    </template>

    <template v-if="productDifference >= this.product.available * 0.3">
      <span class="product__count-green">Много товаров</span>
    </template>
    <template
      v-else-if="
        productDifference < this.product.available * 0.3 &&
        productDifference > 1
      "
      ><span class="product__count-yellow">Мало товаров</span>
    </template>
    <template v-else-if="productDifference === 1">
      <span class="product__count-orange">Последний товар</span>
    </template>
    <template v-else-if="productDifference === 0">
      <span class="product__count-red">Товара нет</span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',

  data() {
    return {
      counter: 1,
      product: {
        name: 'Changan CS95 Car',
        img: 'https://autogoda.ru/upload/resize_cache/iblock/8e9/900_583_2/50862461888_40fd6b4c19_b.jpg',
        price: 360000000,
        available: 7,
      },
    };
  },
  methods: {
    changeCount(operation) {
      operation === '+' ? this.counter++ : this.counter--;
    },
    checkInput() {
      if (!this.counter || this.counter <= 0) {
        this.counter = 1;
      } else if (this.counter > this.product.available) {
        this.counter = this.product.available;
      }
    },
  },
  computed: {
    formattedPrice() {
      return `$${this.product.price}`;
    },
    inputDisabled() {
      return this.counter > this.product.available || this.counter < 1;
    },
    upDisabled() {
      return this.counter >= this.product.available;
    },
    downDisabled() {
      return this.counter <= 1;
    },
    productDifference() {
      return this.product.available - this.counter;
    },
    totalSum() {
      return `$${this.counter * this.product.price}`;
    },
  },
};
</script>

<style scoped lang="sass">
.product
  border: 1px solid white
  max-width: 780px
  min-width: 320px
  align-items: center
  border-radius: 10%
  display: flex
  flex-direction: column
  gap: 30px
  padding: 15px
  background-color: #dbcb6296

  &__name
    font-size: 35px
    font-weight: bold

  &__img
    width: 100%
    border-radius: 50px

  &__price
    font-size: 30px
    font-style: italic

  &__btn
    width: 100px
    height: 100px
    font-size: 30px
    font-weight: bold

  &__counter
    display: flex
    justify-content: space-between
    gap: 15px

  &__input
    padding: 0
    -webkit-appearance: none
    appearance: none
    border: none
    resize: none
    outline: none
    border-radius: 0
    width: 100px
    height: 100px
    text-align: center
    font-size: 40px
    font-weight: bold

  &__total
    font-size: 35px
    font-weight: bold

  &__count-red
    color: red
  &__count-yellow
    color: yellow
  &__count-green
    color: green
  &__count-orange
    color: orange
</style>
