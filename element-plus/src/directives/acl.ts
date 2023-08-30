import { useAuthStore } from "~/stores/auth";

const vzAcl = {
    beforMount:()=>{}
}

/*
1. 路由守卫;
2. 组件指令;
3. v-if 函数调用判断;

acl 参数 string[]
acl 修饰符：
    - all of，全部（默认） 
    - any of，任一

*/