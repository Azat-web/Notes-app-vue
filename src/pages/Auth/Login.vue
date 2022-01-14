<template>
  <section class="page centre">
    <section class="base">
      <BaseAppImage
      :width="{width: '130px'}"
      />
      <section class="base-content">
        <article class="base-auth-text-container mt-20 mb-20">
          <span class="base-auth-text md-size mb-5">The notes app</span>
          <span class="base-auth-text sm-size">Write notes every day</span>
        </article>
        <form @submit.prevent="onSubmit" class="base-auth-form">
          <BaseAppInput
            :invalid="invalidForm"
            :parent-value="form.email"
            v-model="form.email"
            input-type="email"
            input-name="email"
            placeholder="Email"
          />
          <BaseAppInput
            :invalid="invalidForm"
            :parent-value="form.password"
            v-model="form.password"
            input-type="password"
            input-name="password"
            placeholder="Password"
          />
          <BaseAppButton
            :isLoading="isLoading"
            :disabled="isLoading"
            type="submit"
            title="sign in"
          />
        </form>
        <article class="base-auth-text-container mt-20 mb-20">
          <div class="register-link">
            <span class="base-auth-text font-open-sans sm-size mr-5">Click on the link to get your login details - </span>
            <span class="base-link font-open-sans sm-size mr-5" @click="getLogin">Receive</span>
          </div>
          <span class="base-auth-text">
        </span>
        </article>
      </section>
    </section>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import BaseAppButton from '../../components/BaseAppButton'
import BaseAppInput from '../../components/BaseAppInput'
import BaseAppImage from '../../components/BaseAppImage'
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  mixins: [validationMixin],
  components: { BaseAppInput, BaseAppButton, BaseAppImage },
  data () {
    return {
      submitError: null,
      isLoading: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    invalidForm () {
      return this.submitError
    }
  },
  methods: {
    ...mapActions({
      login: 'profile/login'
    }),
    getLogin () {
      this.form.email = "front@mail.com"
      this.form.password = "admin"
    },
    onSubmit () {
      this.submitError = null
      this.$v.form.$touch()
      if (!this.$v.form.$invalid && this.form.email === "front@mail.com" && this.form.password === "admin") {
          this.$router.push('/')
          }
          else { 
          this.submitError = true
          this.isLoading = false
          this.$notify({
          group: 'auth',
          type: 'error',
          title: 'Error',
          text: 'Email or password invalid'
        })
        }
      }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../theme/theme";
@import "./auth";
</style>