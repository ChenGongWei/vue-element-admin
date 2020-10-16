<template>

    <div class="app-container">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="商品名称">
          <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item label="商品价格">
          <el-input v-model.number="form.price"/>
        </el-form-item>

        <el-form-item label="商品库存">
          <el-input v-model.number="form.num"/>
        </el-form-item>

        <el-form-item label="商品状态">
          <el-radio-group v-model="form.status" @change="handleStatus">
            <el-radio-button :label="1">上架</el-radio-button>
            <el-radio-button :label="0">下架</el-radio-button>
          </el-radio-group>
        </el-form-item>

      </el-form>
      <div class="bottom">
        <el-button @click="handleChange">换一个</el-button>
      </div>
      
    </div>

</template>
<script>
export default {
  name: "app",
  components: {},
  data(){
    return {
    //   form: {
    //     name: '',
    //     price: '',
    //     num: '',
    //     status: 0
    //   }
    }
  },
  computed: {
    form() {
      return this.$store.getters.productInfo
    }
  },
  mounted(){
    this.getPrductInfo('123')
    console.log(123)
  },
  methods: {
    handleStatus() {
      console.log(this.form)
      console.log(this.$store.getters.productInfo)
    },
    handleChange() {
      let id = Math.floor(Math.random() * 500) + ''
      this.getPrductInfo(id)
    },
    async getPrductInfo(id) {
      let data = await this.$store.dispatch('product/getProductInfo', id)
      console.log(data)
      // this.form = this.$store.getters.productInfo
    }
  }
};
</script>
<style scoped>
.app-container{
  width: 80%;
}
.bottom{
  padding: 10px 50px;
}
</style>
