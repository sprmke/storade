<template>
    <div>
        <h1>Largest stock trader on the market.</h1>
        <h3>Your funds: {{ funds }}</h3>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>
