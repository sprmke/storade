<template>
   <div class="col-sm-4 col-md-3">
       <div class="card">
            <img class="card-img-top" :src="stock.imgSrc">
            <div class="card-body">
                <h5 class="card-title">
                    {{ stock.name }}
                </h5>
                <p class="card-details">
                    <span class="stock-price"><small>Quantity: </small>{{ stock.quantity }}</span>
                    <span class="stock-price"><small>Price: </small>{{ stock.price }}</span>
                </p>
                <div class="card-form">
                    <input type="number" class="form-control" :class="{'danger': insufficientQuantity}" placeholder="Quantity" v-model="quantity">
                    <button class="btn btn-primary" @click="sellStock" :disabled="insufficientQuantity || quantity <= 0">Sell</button>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
    import { mapActions } from 'vuex';

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
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
             ...mapActions({
                 placeSellOrder: 'sellStock'
             }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        },
        created() {
            console.log(this.stock);
        }
    }
</script>

<style lang="scss" scoped>
    .card-title {
        color: #ff995b;
    }
     button.btn {
        background: #ff8e47;

        &:hover,
        &:focus,
        &:active {
            background: darken(#ff8e47, 10%);
        }
    }
    input {
        &:focus {
            box-shadow: none;
            border: 1px solid #ff8e47;
        }
    }
</style>
