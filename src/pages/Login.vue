<template>
  <div>
    <el-card id="card">
      <el-form style="width:400px;height:400px;margin:0 auto;">
        <h1 id="title" >智慧社区系统</h1>
        <el-form-item label="用户名">
          <el-input v-model="username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="用户密码">
          <el-input v-model="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="danger">注册</el-button>
      </el-form>
    </el-card>
  </div>
</template>
<style type="scss">
#title{
  margin-top:100px;
}
#card{
  margin-top:160px;
}
</style>
<script>
import {} from "../../config/http";
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    login() {}
  }
};
</script>
