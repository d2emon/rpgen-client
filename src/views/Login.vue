<template lang="pug">
  v-layout
    v-flex(xs12 pt-5 class="content-section")
      // utils.flashed_messages()
      .center
        h1 Login to your account
        br
        v-form(v-model="valid" class="pt-2")
          v-text-field(
            label="Username"
            v-model="username"
            :rules="usernameRules"
            required
          )
          v-text-field(
            label="Password"
            v-model="password"
            :rules="passwordRules"
            required
            type="password"
          )
          v-btn(
            flat
            outline
            @click="submit"
            :disabled="!valid"
          ) Login
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      username: '',
      usernameRules: [
        v => !!v || 'Username is required',
        v => v.length <= 10 || 'Username must be less than 10 characters'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ]
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        /* axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
        }) */
      }
    }
  },
  name: 'login'
}
</script>
