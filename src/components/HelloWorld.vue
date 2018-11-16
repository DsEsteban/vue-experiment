<template>
  <div class="hello">
     
    <p> Valor padre {{ oldNumberToDisplay }}</p>  
    <ButtonAccept :number.sync="numberToDisplay"/>
    
    <input type="text" v-model="inputText">
    <input type="text" v-model="oldInputText" ref="myTesting">
    <p>inputText: {{ inputText }}</p>
    <p>counting: {{ myNewMethod(seconds) }}</p>

    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import ButtonAccept from './ButtonAccept'

  export default {
    name: 'HelloWorld',
    components: {
      ButtonAccept
    },
    data () {
      return {
        numberToDisplay : 1,
        oldNumberToDisplay : 0,
        inputText : 'helloWorld',
        oldInputText : '',
        msg: 'Welcome to Your Vue.js App',
        greetee: 'HelloWorld',
        path: location.pathname,
        seconds : 0,
        oldSeconds : 0,
        numbersArray: [1,2,3]
      }
    }, 
    created() {
      setInterval(() => {
        this.seconds++;
      }, 1000);
    }, 
    methods: {
      myNewMethod(seconds){
        console.log(this.numbersArray[seconds % 3]);
        console.log(seconds % 3);
        return seconds + this.numbersArray[seconds % 3];
      }
    },
    watch: {
      inputText(){
        const newValue = this.inputText;
        setTimeout(() => {
          this.oldInputText = newValue;
        }, 5000);
      },
      numberToDisplay(){
        const newValue = this.numberToDisplay;
        setTimeout(() => {
          this.oldNumberToDisplay = newValue;
        }, 1100);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
