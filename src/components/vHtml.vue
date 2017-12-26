<template>
  <!--v-html这个指令不安全，容易引起xss攻击，不建议使用-->
  <div class="vHtml">
    <div v-html="html"></div>
    <div v-html>{{html}}</div>
  </div>
</template>

<script>
  export default {
    name:'vHtml',
    data(){
      return{
        html:'<strong>这是一个加粗字体</strong>'
      }
    }
  }
</script>
