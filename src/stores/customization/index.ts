import { defineStore } from "pinia";
import { markRaw, reactive, ref, type Component } from "vue";

import WorkSpace from "@/layout/Navigation/components/WorkSpace.vue"
import Environment from "@/layout/Navigation/components/Environment.vue"
import Toolbox from "@/layout/Navigation/components/Toolbox.vue"


type TabsType = "post" | "get" | "websocket" | "socket"
export interface Tabs {
    name: string
    type: TabsType
    id: string
}


export const useCustomization = defineStore("customization", () => {

    const openTabs = ref<Array<Tabs>>([])


    const state = reactive<{
        expanded: boolean,
        component: Component | undefined
    }>({
        expanded: false,
        component: undefined
    })

    const menus = [
        { name: "work", icon: "mdi-dots-grid", tooltip: "工作台(F1)", component: markRaw(WorkSpace) },
        { name: "variable", icon: "mdi-variable", tooltip: "环境变量(F2)", component: markRaw(Environment) },
        { name: "tools", icon: "mdi-tools", tooltip: "工具箱(F3)", component: markRaw(Toolbox) },
    ]


    const onSelectNav = (val: any) => {
        Object.assign(state, {
            expanded: val != undefined,
            component: val != undefined ? menus[val].component : state.component,
        })

    }

    return {
        openTabs,
        menus,
        state,
        onSelectNav
    }
})

