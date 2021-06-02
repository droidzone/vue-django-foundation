<template>
    <div>
        <div v-for="link in links" :key="link.id">
            ID:{{ link.id }} Short Link:{{ link.short_link }}
        </div>
        This is some data.

    </div>
</template>

<script>
import axios from "axios";

    export default {
        testdata:"Dummy data loaded",
        links:[],
        created() {
            console.log("Getting from API")
            axios.get('http://127.0.0.1:8000/api/links/').then(({ data }) => {
                console.log(`data is ${data}`);
                console.log(data.results);
                this.links = data.results;
            })
        },
    }
</script>

<style lang="scss" scoped>

</style>