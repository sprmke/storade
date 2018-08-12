<template>
    <div>
        <header>
            <app-header></app-header>
        </header>

        <main>
            <div class="container">
                <div class="row mt-content">
                    <div class="col-md-12">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import Header from './components/shared/Header.vue';

    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style lang="scss">
    body {
        background: #f1f2f6;

        .mt-content {
            margin-top: 5rem;
        }

        button.btn {
            outline: none;
            box-shadow: none;
            border: none;
        }

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
    }
</style>
