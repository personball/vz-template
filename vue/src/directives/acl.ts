import { App, Directive } from "vue";
import { isGranted, isGrantedAnyOf } from "~/composables/acl";

export const vzAcl: Directive = (el, binding) => {

    let perms: string[] = []

    if (Array.isArray(binding.value)) {
        /* v-acl="['p1','p2']" */
        /* v-acl.any="['p1','p2']" */
        perms = binding.value
    } else {
        /* v-acl="'p1'" */
        perms.push(binding.value)
    }

    let mod_anyof = false
    if (binding.modifiers && binding.modifiers.any) {
        mod_anyof = true
    }

    if (mod_anyof) {
        if (!isGrantedAnyOf(...perms)) {
            el.parentNode.removeChild(el)
        }
    } else {
        if (!isGranted(...perms)) {
            el.parentNode.removeChild(el)
        }
    }
}

export const setup: any = (app: App<Element>) => {
    app.directive('acl', vzAcl)
}
/*

1. [x] 路由守卫;
2. [x] 组件指令;
3. [x] v-if 函数调用判断;

- [ ] Menu acl

// For navigator(Menu,top,float widget)  本身的 acl + route acl

acl 参数 string[]
acl 修饰符：
    - all of，全部（默认） 
    - any of，任一

- [x] acl-permission
- [ ] acl-feature

*/