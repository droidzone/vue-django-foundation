<template>
  <div>
    <div class="grid-container">
        <form @submit.prevent="">
            <div class="grid-x grid-padding-x">
              <div class="small-3 cell">
                <label for="long-link" class="text-right">Long Link</label>
              </div>
              <div class="small-9 cell">
                <input
                  type="text"
                  id="long-link"
                  v-model="longLink"
                  placeholder="Long link to be shortened"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="grid-x grid-padding-x">
                <div class="cell">
                    <button type="submit" class="button">Shorten</button>
                </div>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      longLink: "",
      shortLink: "",
    };
  },
  methods: {
      CreateNew() {
      this.$router.push({ name: "CreateLink" });
      axios
        .post(`http://127.0.0.1:8000/api/links/`, {
          firstName: "Fred",
          lastName: "Flintstone",
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .post(`http://127.0.0.1:8000/api/links/`)
        .then(({ data }) => {
          console.log(`data is`);
          console.log(data);
          let results = data.results;
          console.log("results:");
          console.log(results);
        })
        .catch((error) => {
          console.log("An error occured");

          if (error.response) {
            console.log(`error is ${error}`);
            console.log(error);
            this.$router.push({ name: "Dashboard" });
          }
        });
    },


  }
};
</script>

<style lang="scss" scoped></style>
