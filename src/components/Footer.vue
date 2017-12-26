<template>
  <div class="footer">
    <h1>技术支持</h1>
    <ul>
      <li v-for="arr in array"><a href="" v-text="arr"></a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'footer',
    data(){
      return{
        array:['小朋友','小兔几','大灰狼']
      }
    }
  }
</script>
