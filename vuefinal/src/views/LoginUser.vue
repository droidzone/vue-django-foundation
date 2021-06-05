<template>
  <div class="grid-x">
    <div class="cell small-3"></div>

    <div class="cell small-6">
      <div class="form-registration">
        <figure class="form-registration-img">
          <i
            class="fad fa-laptop-medical fa-20x green_light_green"
            style=""
          ></i>

          <figcaption class="form-registration-img-caption">
            Login to create your own Short links from Long links.
          </figcaption>
        </figure>

        <form class="form-registration-group" @submit.prevent="login">
          <!-- <label for="username">
            Username
          </label> -->
          <div class="grid-x">
            <div class="cell small-3"></div>

            <div class="cell small-6">
              <input
                name="username"
                class="form-registration-input"
                type="text"
                placeholder="Your username"
                v-model="username"
              />
              <input
                name="password"
                class="form-registration-input"
                type="password"
                placeholder="Your password"
                v-model="password"
              />

              <input
                class="form-registration-submit-button"
                type="submit"
                value="Login"
              />
              <div v-if="isLoading" class="">
              Loading from server.. <i class="fad fa-spinner fa-spin fa-3x margin-2"></i>
            </div>
              <!-- <p class="or-divider"><span>or</span></p>
              <a class="form-registration-social-button" href="#"
                ><i class="fa fa-facebook-official" aria-hidden="true"></i> Sign
                Up With facebook</a
              >
              <p class="form-registration-member-signin">
                Already a member? <a href="#">Sign in</a>
              </p> -->
              <p class="form-registration-terms">
                <a href="#">Terms &amp; Conditions</a>|<a href="#">Privacy</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- <div>
    <div class="grid-x">
      <div class="cell small-4"></div>
      <div class="cell small-4">
        <form @submit.prevent="login">
          <label for="username">
            Username
          </label>
          <input type="text" name="username" v-model="username" />

          <label for="password">Password</label>
          <input type="password" name="password" v-model="password" />

          <button type="submit" name="button" class="button">Submit</button>
        </form>
      </div>
    </div>
  </div> -->
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      isLoading: false,
    };
  },
  methods: {
    login() {
      this.isLoading=true;
      console.log(
        `Before logging in, username:${this.username} password:${this.password}`
      );
      console.log(`In login function..trying to obtain token.`);
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.isLoading=true;
          this.$router.push({ name: "Dashboard" });
        }).catch((error) => {
          this.isLoading=false;
          console.log("An error occured");

          if (error.response) {
            console.log(`error is ${error}`);
            console.log(error);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.fa-20x {
  font-size: 20em;
}
.pink {
  color: #f783ac;
}

.green_light_green {
  --fa-primary-color: #1c6b84;
  --fa-secondary-color: #7cd892;
}
.form-registration {
  background: #fefefe;
}

.form-registration .form-registration-img {
  position: relative;
}

.form-registration .form-registration-img .form-registration-img-caption {
  position: absolute;
  padding: 0.5rem;
  text-align: center;
  width: 100%;
  bottom: 0;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(1, rgba(254, 254, 254, 0.3)),
    color-stop(0, #fefefe)
  );
}

.form-registration-group {
  padding: 1rem;
}

.form-registration-group .form-registration-input {
  border-radius: 0;
}

.form-registration-group .form-registration-input:focus {
  border: 2px solid #1779ba;
  box-shadow: 0 0 5px #1779ba;
}

.form-registration-group .form-registration-submit-button {
  text-transform: uppercase;
  margin-bottom: 0;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 1rem 0;
  padding: 0.85em 1em;
  -webkit-appearance: none;
  border: 1px solid transparent;
  border-radius: 0;
  transition: background-color 0.25s ease-out, color 0.25s ease-out;
  font-size: 0.9rem;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  background-color: #1779ba;
  color: #fefefe;
  display: block;
  width: 100%;
  margin-right: 0;
  margin-left: 0;
  border-radius: 5000px;
}

[data-whatinput="mouse"]
  .form-registration-group
  .form-registration-submit-button {
  outline: 0;
}

.form-registration-group .form-registration-submit-button:hover,
.form-registration-group .form-registration-submit-button:focus {
  background-color: #126195;
  color: #fefefe;
}

.form-registration-group .form-registration-social-button {
  text-transform: uppercase;
  font-size: 16px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 1rem 0;
  padding: 0.85em 1em;
  -webkit-appearance: none;
  border: 1px solid transparent;
  border-radius: 0;
  transition: background-color 0.25s ease-out, color 0.25s ease-out;
  font-size: 0.9rem;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  border: 1px solid #3b5998;
  color: #3b5998;
  display: block;
  width: 100%;
  margin-right: 0;
  margin-left: 0;
  border-radius: 5000px;
}

[data-whatinput="mouse"]
  .form-registration-group
  .form-registration-social-button {
  outline: 0;
}

.form-registration-group .form-registration-social-button,
.form-registration-group .form-registration-social-button:hover,
.form-registration-group .form-registration-social-button:focus {
  background-color: transparent;
}

.form-registration-group .form-registration-social-button:hover,
.form-registration-group .form-registration-social-button:focus {
  border-color: #1e2d4c;
  color: #1e2d4c;
}

.form-registration-group .form-registration-social-button .fa {
  vertical-align: text-top;
  margin-right: 0.5rem;
}

.form-registration-group .form-registration-member-signin {
  text-align: center;
  font-weight: bold;
  font-size: 14px;
}

.form-registration-group .form-registration-member-signin a {
  margin-left: 0.25rem;
}

.form-registration-group .form-registration-terms {
  text-align: center;
  font-size: 12px;
}

.form-registration-group .form-registration-terms a:first-child {
  margin-right: 0.25rem;
}

.form-registration-group .form-registration-terms a:last-child {
  margin-left: 0.25rem;
}

.form-registration-group .or-divider {
  position: relative;
  margin: 1.5rem 0px;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  height: 0px;
  border: 1px solid #e6e6e6;
}

.form-registration-group .or-divider span {
  color: #8a8a8a;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  top: -12px;
  background-color: #fefefe;
  padding: 0 8px;
}
</style>
