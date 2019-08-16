<template>
 <div class="css-exercise-one">
    1、练习居中
    <div style="background-color:gray;height:60px;width:500px;display:flex;justify-content:space-between;align-items:center;padding:10px">
      <div style="display:flex;">
      <div style="height: 40px;line-height: 40px;width: 50px;"> <span>警员</span></div>
      <el-input v-model="inputValue"></el-input>
      </div>
      <div>
         <el-button type="primary">查询</el-button>
         <el-button type="primary" plain>重置</el-button>
      </div>
    </div>
    <br/>
    2、多列布局
     <div  style="width:500px;height:500px;column-count: 3;column-gap: 40px;">
        由第一章至第四章是第一个单元，写方鸿渐在上海和家乡（江南某县）的生活情景，以写上海为主。在这个单元中，方鸿渐和苏文纨的“爱情”纠葛占了重要的分量。苏文纨的倾心相与和方鸿渐的另有所欢，使他们演出了不少半真半假、女真男假的滑稽戏。暴露了苏文纨官宦小姐矜持自负、自作多情、因而落得空对镜花水月的尴尬相，也暴露了方鸿渐纨绔子弟优柔寡断、不更世事而又玩世不恭的浮华相。围绕着他们，作者还写了十里洋场社交生活的各种人物，在美国人花旗洋行里做买办、喜欢人们唤他Jimmy的张吉民，外表时髦、骨子里守旧的董斜川，“对雌雄性别，最有研究”的青年哲学家褚慎明，满肚子不老实、自我标榜是“新古典主义”的诗人曹元朗，以及暗中把方鸿渐当做情敌、枉费了心思的赵辛楣，甚至还有生得漂亮、头脑乖巧的唐晓芙等等，他们都在作者笔下显示了各自的性格和色相。他们宴饮会客、谈诗论文以及各种应酬交际是那样的内心空虚、百无聊赖以及庸俗不堪，这种生活不会培植健康的爱情，更不会培植健康的理想，本身就是一个有待冲破的“围城”。
     </div>
 </div>
</template>
<script>
export default {
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>
<style lang="scss">
.css-exercise-one{
   height: 100%;
    width:100%;
    padding: 20px;
  box-sizing: border-box;
}
</style>
