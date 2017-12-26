<template>
  <div class="event">
    <button v-on:click="add">add 1</button>
    <button @click.enter="_alert">alert</button>
    <button @keyup.13="_key">13按键</button>
    <button @click.once="_number">触发一次</button>
    <div>现在的数量为：{{count}}</div>
  </div>
</template>

<script>
  export default {
    name:'event',
    data(){
      return{
        count:0,
        number:0
      }
    },
    methods:{
      add(){
        this.count+=1;
      },
      _alert(){
        alert('enter')
      },
      _key(){
        alert('13')
      },
      _number(){
        alert(this.number+=1)
      }
    }
  }
</script>
