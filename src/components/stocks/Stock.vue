<template>
   <div class="col-sm-4 col-md-3">
       <div class="card">
            <img class="card-img-top" :src="stock.imgSrc">
            <div class="card-body">
                <h5 class="card-title">
                    {{ stock.name }}

                    <span class="stock-price"><small>Price: </small>{{ stock.price }}</span>
                </h5>
                <div class="card-form">
                    <input type="number" class="form-control" :class="{'danger': insufficientFunds}" placeholder="Quantity" v-model="quantity">
                    <button class="btn btn-primary" @click="buyStock" :disabled="insufficientFunds || quantity <= 0">Buy</button>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds;
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        }
    }
</script>

<style lang="scss" scoped>
     .card-title {
        color: #19bd5c;
    }
     button.btn {
        background: #5ed468;

        &:hover,
        &:focus,
        &:active {
            background: darken(#5ed468, 10%);
        }
    }
    input {
        &:focus {
            box-shadow: none;
            border: 1px solid #19bd5c;
        }
    }
</style>
