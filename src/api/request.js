
import { ElMessage } from 'element-plus'

import axios from "axios";
const service = axios.create({

baseURL: 'http://132.232.110.185/wisdomPark-1.0-SNAPSHOT',  
timeout: 3000 
})
  // 导出供外界使用
  export default service

