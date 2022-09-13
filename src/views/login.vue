<template>
    <div class="box">
      <div class="login-top">
        <h1>智慧园区管理平台</h1>
      </div>
      <div class="login-main">
        <div class="login-left">
          <img src="../../public/images/u2.png" alt="">
        </div>
        <!-- 登陆界面 -->
        <div class="login">
          <img src="../../public/images/u8.svg" alt="">
          <el-form ref="loginFormRef" :model="loginForm" class="login-content">
            <!-- 账号 -->
            <el-form-item>
              <e-row>
                <e-col :span="2"><img src="../../public/images/u9.svg" class="usrname" alt=""></e-col>
                <e-col :span="22">
                  <el-input class="loginInput" v-model="loginForm.usrname" placeholder="请输入账号" />
                </e-col>
              </e-row>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item>
              <e-row>
                <e-col :span="2"><img src="../../public/images/u10.svg" class="pwd" alt=""></e-col>
                <e-col :span="22">
                  <el-input class="loginInput" v-model="loginForm.pwd" type="password" placeholder="请输入密码"
                    show-password />
                </e-col>
              </e-row>
            </el-form-item>
            <!-- 记住密码 -->
            <el-form-item class="remember">
              <e-row>
                <e-col :span="22">
                  <el-checkbox class="rememberBtn" v-model="loginForm.remember" size="large" />
                </e-col>
                <e-col :span="2"><span>记住用户名</span></e-col>
              </e-row>
            </el-form-item>
            <el-form-item>
              <el-button class="loginBtn" @click="goLogin">登 录</el-button>
            </el-form-item>
  
          </el-form>
        </div>
        <!-- <button @click="sendAxios">发送aixos</button> -->
        <div class="login-right">
          <img src="../../public/images/u3.png" alt="">
        </div>
      </div>
      <div class="login-bottom">
        <img src="../../public/images/u4.png" alt="">
      </div>
    </div>
  </template>
  <script setup>
  import { onMounted, reactive, ref } from 'vue'
  import { ElMessage } from "element-plus";
  import { useRouter } from 'vue-router';
  
  import axios from 'axios'
  // 设置默认请求头
  axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
  
  const router = useRouter();
  
  
  const loginInput1 = document.querySelectorAll('input')[0];
  console.log('loginInput1', loginInput1);
  const loginInput2 = document.querySelectorAll('input')[1];
  const loginForm = reactive({
    usrname: '',
    pwd: '',
    remember: false
  })
  
  
  
  // 登陆
  const goLogin = () => {
    // 记住密码
    if (loginForm.remember) {
      window.sessionStorage.setItem('usrname', loginForm.usrname)
    }
    let parms = new URLSearchParams()
    parms.append('name', loginForm.usrname)
    parms.append('password', loginForm.pwd)
    // 发送请求
    axios({
      method: 'post',
      url: 'http://132.232.110.185/wisdomPark-1.0-SNAPSHOT/login',
      data: parms
    }).then(data => {
      console.log('后台返回的结果', data);
      if (data.data.code == 0) {
        ElMessage.error(data.data.msg)
      } else if (data.data.code == 1) {
        ElMessage({
          message: data.data.msg,
          type: 'success',
        })
        router.push('/index')
      }
    })
  
    if (!loginForm.remember) {
      loginForm.usrname = '';
    }
    loginForm.pwd = '';
    loginForm.remember = false;
  }
  onMounted(() => {
    loginForm.usrname = window.sessionStorage.getItem('usrname')
  })
  
  </script>
  
  
  <style scoped>
  .box {
    width: 100%;
    height: 100vh;
    background-image: url('../../public/images/u1.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  
  .login-main {
    width: 100%;
  }
  
  .login-left {
    position: absolute;
    top: 60px;
    left: 50px;
  }
  
  .login-left img {
    width: 100%;
    height: 600px
  }
  
  .login-right {
    position: absolute;
    top: 60px;
    right: 50px;
  }
  
  .login-right img {
    width: 100%;
    height: 600px
  }
  
  .login-top {
    width: 100%;
    height: 110px;
    line-height: 100px;
    background-image: url('../../public/images/u5.png');
    background-position: center center;
    background-size: cover;
    font-size: 20px;
    color: #fff;
    text-align: center;
  }
  
  .login-bottom {
    position: absolute;
    bottom: 34px;
    width: 100%;
  }
  
  .login-bottom img {
    width: 100%;
    height: 100%;
  }
  
  .login {
    position: absolute;
    top: calc(50% - 220px);
    left: calc(50% - 200px);
    text-align: center;
  }
  
  .login img {
    width: 100%;
    height: 440px;
  }
  
  .login-content {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    top: 80px;
    left: 56px;
    text-align: center;
  }
  
  .login-content div {
    margin: 20px 0;
  }
  
  .login-content img {
    width: 40px;
    height: 40px;
  }
  
  .loginInput {
    position: relative;
    left: 20px;
    top: 0;
    width: 200px;
    height: 24px;
    background: transparent;
    border-color: transparent;
    border-bottom: 2px solid rgb(153, 153, 153) !important;
  }
  
  .usrname {
    position: relative;
    top: 14px;
    left: 2px;
  }
  
  .pwd {
    position: relative;
    top: 14px;
    left: 2px;
  }
  
  .remember {
    position: relative;
    width: 100%;
    top: -20px;
    left: 20px;
    color: #666666;
    text-align: left;
  }
  
  .rememberBtn {
  
    width: 30px;
    height: 30px;
  }
  
  
  .loginBtn {
    position: relative;
    top: 0;
    left: 0;
    width: 280px;
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    background-color: rgba(58, 245, 255, 1);
    color: #fff;
    border: 0;
  }
  </style>
  