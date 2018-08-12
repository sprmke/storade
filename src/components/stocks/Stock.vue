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
                    <input type="number" class="form-control" placeholder="">
                    <button class="btn btn-success">Buy</button>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
    export default {
        props: ['stock']
    }
</script>

<style lang="scss">
    .card {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: 6px;
        box-shadow: 0 1px 1px #dde5fd;
        
        .card-img-top {
            width: 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            max-height: 140px;
        }
        .card-body {
            padding: 1.25rem;
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;

            .card-title {
                display: flex;
                justify-content: space-between;
                font-size: 1.5rem;
                font-weight: 600;
                margin-top: 0;
                margin-bottom: 1.25rem;
                color: #6b5bff;

                .stock-price {
                    color: #666;
                }
            }
            .card-form {
                display: flex;

                input {
                    border-radius: 6px 0 0 6px;
                }
                button {
                    border-radius: 0 6px 6px 0;
                }
            }
        }
    }
</style>
