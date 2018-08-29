<template>
   <f7-page theme-dark>
    <AppHeader></AppHeader>
 
    <f7-block>
      <f7-button raised big fill @click="loginScreenOpened = true">Log In</f7-button>
    </f7-block>
    <f7-block>
      <f7-button raised big fill @click="signupScreenOpened = true">Sign Up</f7-button>
    </f7-block>
 
    <f7-login-screen class="login-screen" :opened="loginScreenOpened" @loginscreen:closed="loginScreenOpened = false">
      <f7-page login-screen>
        <f7-login-screen-title>DartParse</f7-login-screen-title>
        <f7-list form>
          <f7-list-item>
            <f7-label>Username</f7-label>
            <f7-input type="text" placeholder="Your username" @input="username = $event.target.value"></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>Password</f7-label>
            <f7-input type="password" placeholder="Your password" @input="password = $event.target.value"></f7-input>
          </f7-list-item>
        </f7-list>
        <f7-list>
          <f7-list-button @click="signIn">Sign In</f7-list-button>
          <f7-block-footer>Welcome to DartParse</f7-block-footer>
        </f7-list>
      </f7-page>
    </f7-login-screen>
    <f7-login-screen class="signup-screen" :opened="signupScreenOpened" @loginscreen:closed="signupScreenOpened = false">
      <f7-page login-screen>
        <f7-login-screen-title>DartParse</f7-login-screen-title>
        <f7-list form>
          <f7-list-item>
            <f7-label>Email</f7-label>
            <f7-input type="text" placeholder="Your email" @input="email = $event.target.value"></f7-input>
            <f7-label>Username</f7-label>
            <f7-input type="text" placeholder="Your username" @input="username = $event.target.value"></f7-input>
            <f7-label>Password</f7-label>
            <f7-input type="password" placeholder="Your password" @input="password = $event.target.value"></f7-input>
            <f7-label>Password (Confirm)</f7-label>
            <f7-input type="password" placeholder="Your password" @input="password_confirm = $event.target.value"></f7-input>
          </f7-list-item>
        </f7-list>
        <f7-list>
          <f7-list-button @click="signUp">Sign Up</f7-list-button>
          <f7-block-footer>Welcome to DartParse</f7-block-footer>
        </f7-list>
      </f7-page>
    </f7-login-screen>
  </f7-page>
</template>
<script>
import AppHeader from '../components/AppHeader.vue'
export default {
  name: 'LoginPage',
  components:{
    AppHeader
  },
  data() {
   
   
    return {
      loginScreenOpened: false,
      signupScreenOpened: false,
     
    };
  },
  methods: {
      signIn() {
        const self = this;
        const app = self.$f7;
 
        app.dialog.alert(`Username: ${self.username}<br>Password: ${self.password}`, () => {
          app.loginScreen.close();
        });
      },
      signUp() {
        const self = this;
        const app = self.$f7;
 
        app.dialog.alert(`Email: ${self.email}<br>Username: ${self.username}<br>Password: ${self.password}`, () => {
          app.loginScreen.close();
        });
      },
    },
};
</script>