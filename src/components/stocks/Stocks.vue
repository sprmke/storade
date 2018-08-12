<template>
    <div>
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import appStock from './Stock.vue';

    export default {
        data() {
            return {
                stocks: [
                    { id: 1, name: 'Apple', price: 110, imgSrc: require('../../assets/images/apple.jpg') },
                    { id: 2, name: 'Samsung', price: 200, imgSrc: require('../../assets/images/samsung.png')  },
                    { id: 3, name: 'Google', price: 250, imgSrc: require('../../assets/images/google.jpg')  },
                    { id: 4, name: 'LG', price: 8, imgSrc: require('../../assets/images/lg.jpg')  }
                ]
            }
        },
        components: {
            appStock
        }
    }
</script>
