import { useCustomization } from "@/stores";
import { computed, ref, watch } from "vue"
// import { hasClass, toggleClass } from "@/utils"



export const useTags = () => {
    const customization = useCustomization()

    const tabs = computed(() => {
        return customization.openTabs;
    })

    const hoverIndex = ref("");
    const activeIndex = ref("")

    const iconIsActive = computed(() => {
        return (index: string) => {
            if (activeIndex.value == index) { return true }
            return index == hoverIndex.value
        };
    });

    function onMouseLeave(index: string) {
        hoverIndex.value = ""
    }

    const onMouseEnter = (index: string) => {
        if (index) hoverIndex.value = index;
    }

    const onActiveTab = (index: any) => {
        if (index == activeIndex.value) return
        activeIndex.value = index
    }

    watch(customization.openTabs, (n, o) => {
        if (n.length >= 1 && activeIndex.value == "") {
            activeIndex.value == n[0].id
        }

        if (n.length == 0 && activeIndex.value != "") {
            activeIndex.value = ""
        }

    })

    return {
        tabs, activeIndex,
        iconIsActive,
        hoverIndex, onMouseEnter, onMouseLeave, onActiveTab
    }

}