<template>
  <div>
    login
    <el-button>登录</el-button>
  </div>
</template>

<script lang="ts">
import { _hello } from '../api/user/index';
export default {
  created() {
    console.log(111, this.$store.state.count);
    this.$store.commit('increment')
    console.log(111, this.$store.state.count);

    _hello().then(res => {
      console.log('res', res);
    }).catch(err => {
      console.log(err);
      
    })

    
  }
}
</script>