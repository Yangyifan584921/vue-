<template>
  <div class="vBind">
    <img :src="src" alt="">
    <div :class="{isred:active}">张根硕</div>
    <div :class="[classA,classB]">撒浪嘿</div>
    <div :style="{color:'pink'}">你是我的眼</div>
  </div>
</template>

<script>
  export default {
    name:'vBind',
    data(){
      return{
        classA:'strong',
        classB:'isGreen',
        active:true,
        src:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1531952725,2352197872&fm=27&gp=0.jpg'
      }
    }
  }

</script>

<style>
  .isred{
    color:red
  }
  .strong{
    font-weight: bolder;
  }
  .isGreen{
    color:green
  }
</style>
