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
            border: none;
            background: #998eff;

            &:hover {
                background: darken(#998eff, 10%);
            }
        }
    }
</style>
