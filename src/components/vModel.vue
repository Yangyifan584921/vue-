<template>
  <div class="vModel">
    <!--输入框-->
    <input type="text" v-model="textInput" >
    <button @click="query">提交</button>
    <!--文本框-->
    <textarea v-model="textArea" id="" cols="30" rows="10" @click="submit"></textarea>
    <!--多选按钮：得到的是value值-->
    <div>
      <input id="one" type="checkbox" value="one" v-model="checkNames">
      <label for="one">1</label>

      <input id="two" type="checkbox" value="two" v-model="checkNames">
      <label for="two">2</label>

      <input id="three" type="checkbox" value="three" v-model="checkNames">
      <label for="three">3</label>

      <p>选择的有{{checkNames}}</p>
    </div>
    <!--单选按钮-->
    <div>
      <input type="radio" id="man" value="man" v-model="radioName">
      <label for="man">男</label>

      <input type="radio" id="woman" value="woman" v-model="radioName">
      <label for="woman">女</label>

      <p>选择的是{{radioName}}</p>
    </div>
    <!--选择列表:单选-->
    <div>
      <select v-model="selectName">
        <option disabled value="">请选择</option>
        <option >A</option>
        <option >B</option>
        <option >C</option>
      </select>

      <p>选择的是{{selectName}}</p>
    </div>
    <!--选择列表：多选-->
    <div>
      <select v-model="selectNames" multiple>
        <option disabled value="">请选择</option>
        <option >A</option>
        <option >B</option>
        <option >C</option>
      </select>

      <p>选择的是{{selectNames}}</p>
    </div>


    <!--修饰符-->
    <!--.lazy相当于change事件，当输入框失去焦点的时候，改变状态-->
    <input type="text" v-model.lazy="AA">
    <p>现在输入的内容为：{{AA}}</p>
    <!--.trim去掉输入框中内容的前后空格，及时更新输入框中的内容-->
    <input type="text" v-model.trim="msg">
    <p>现在输入的内容为：{{msg}}</p>
  </div>
</template>

<script>
  export default {
    name:'vModel',
    data(){
      return{
        textInput:'',
        textArea:'',
        checkNames:[],
        radioName:'',
        selectName:'',
        selectNames:[],


        AA:'',
        msg:''
      }
    },
    methods:{
      query(event){
        console.log(this.textInput,'textInput')
      },
      submit(){

        console.log(this.textArea,'textArea')
      }
    }
  }
</script>
