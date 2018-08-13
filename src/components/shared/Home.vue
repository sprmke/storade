<template>
    <div>
        <h1>One of the largest stock trader market.</h1>
        <h4>Your funds: {{ funds }}</h4>
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
