import { defineStore } from "pinia";
import { reactive, ref, type Component } from "vue";

import WorkSpace from "@/layout/Navigation/components/WorkSpace.vue"
import Environment from "@/layout/Navigation/components/Environment.vue"
import Toolbox from "@/layout/Navigation/components/Toolbox.vue"


export const useCustomization = defineStore("customization", () => {

    const state = reactive<{
        expanded: boolean,
        component: Component | undefined
    }>({
        expanded: false,
        component: undefined
    })

    const menus = [
        { name: "work", icon: "mdi-dots-grid", tooltip: "工作台(F1)", component: WorkSpace },
        { name: "variable", icon: "mdi-variable", tooltip: "环境变量(F2)", component: Environment },
        { name: "tools", icon: "mdi-tools", tooltip: "工具箱(F3)", component: Toolbox },
    ]


    const onSelectNav = (val: any) => {
        Object.assign(state, {
            expanded: val != undefined,
            component: val != undefined ? menus[val].component : state.component,
        })

    }

    return {
        menus,
        state,
        onSelectNav
    }
})

