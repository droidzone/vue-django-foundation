<template>
    <div class="row">
        Above Links
    </div>
    <ul>?
    <li v-for="link in links" :key="link.id">
        ID:{{ link.id }} Short Link:{{ link.short_link }}
    </li>
    </ul>
    <div class="row">
        Below Links
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


                console.log(`data is`);
                console.log(data);
                let mylinks = data.results;
                console.log('mylinks:')
                console.log(mylinks)
                this.links = mylinks

                // console.log(`type of data is ${typeof(data)}`);
                // console.log(data.results);
                // console.log(`type:${typeof(data.results)} results:data.results`);
                // console.log(Object.keys(data.results));
                // this.links = Object.keys(data.results);
                // data.results.forEach(([key, value]) => {
                //     console.log(key); // 'one'
                //     console.log(value); // 1
                // });
            })
        },
    }
</script>

<style lang="scss" scoped>

</style>