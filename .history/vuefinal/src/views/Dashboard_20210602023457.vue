<template>
    <div>
        This is some data.

    </div>
</template>

<script>
import axios from "axios";

    export default {
        testdata:"Dummy data loaded",
        created() {
            console.log("Getting from API")
            axios.get('//localhost8000/api/links/1/').then(({ data }) => {
                console.log(data)
            })
        },
    }
</script>

<style lang="scss" scoped>

</style>