<template>
  <div class="container">
    <div class="local-switcher">
      <LocalSwitcher />
    </div>
    <section class="page centre">
      <section class="base">
        <BaseAppImage :width="{ width: '130px' }" />
        <section class="base-content">
          <article class="base-auth-text-container mt-20 mb-20">
            <span class="base-auth-text md-size mb-5">{{
              $t("auth.the_notes_app")
            }}</span>
            <span class="base-auth-text sm-size">{{
              $t("auth.write_notes_every_day")
            }}</span>
          </article>
          <form @submit.prevent="onSubmit" class="base-auth-form">
            <BaseAppInput
              :invalid="invalidForm"
              :parent-value="form.email"
              v-model="form.email"
              input-type="email"
              input-name="email"
              :placeholder="$t('auth.email')"
            />
            <BaseAppInput
              :invalid="invalidForm"
              :parent-value="form.password"
              v-model="form.password"
              input-type="password"
              input-name="password"
              :placeholder="$t('auth.password')"
            />
            <BaseAppButton
              :isLoading="isLoading"
              :disabled="isLoading"
              type="submit"
              :title="$t('auth.sign_in')"
            />
          </form>
          <article class="base-auth-text-container mt-20 mb-20">
            <div class="register-link">
              <span class="base-auth-text font-open-sans sm-size mr-5"
                >{{
                  $t("auth.click_on_the_link_to_get_your_login_details")
                }}
                -</span
              >
              <span
                class="base-link font-open-sans sm-size mr-5"
                @click="getLogin"
                >{{ $t("auth.receive") }}</span
              >
            </div>
            <span class="base-auth-text"> </span>
          </article>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import { mapActions} from "vuex";
import BaseAppButton from "../../components/BaseAppButton";
import BaseAppInput from "../../components/BaseAppInput";
import BaseAppImage from "../../components/BaseAppImage";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import LocalSwitcher from "../../components/LocalSwitcher";

export default {
  name: "Login",
  mixins: [validationMixin],
  components: { BaseAppInput, BaseAppButton, BaseAppImage, LocalSwitcher },
  data() {
    return {
      submitError: null,
      isLoading: false,
      form: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    invalidForm() {
      return this.submitError;
    },
  },
  methods: {
    ...mapActions({
      isAuth: "auth/changeIsAuth"
    }),
    getLogin() {
      this.form.email = "front@mail.com";
      this.form.password = "admin";
    },
    onSubmit() {
      this.submitError = null;
      this.$v.form.$touch();
      if (
        !this.$v.form.$invalid &&
        this.form.email === "front@mail.com" &&
        this.form.password === "admin"
      ) {
        this.isAuth(true)
        this.$router.push("/");
      } else {
        this.submitError = true;
        this.isLoading = false;
        this.$notify({
          group: "auth",
          type: "error",
          title: this.$t("main.error"),
          text: this.$t("main.email_or_password_invalid"),
        });
      }
    },
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../theme/theme";
@import "./auth";

.local-switcher {
  display: flex;
  justify-content: right;
  margin: 10px 20px 0 0;
}
</style>
