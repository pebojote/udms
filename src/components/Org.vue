<template>
    <div class="p-2">
        <div class="p-0" ref="tree"></div>
    </div>
</template>

<script>
import OrgChart from '@balkangraph/orgchart.js'

export default {

    name: 'tree',
    data() {
        return {
                nodes: [
                    { id: 1, name: "John Arcel S. Padilla", title: "Chairman and CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
                    { id: 2, pid: 1, name: "Francisco N. Balan", title: "President and COO", img: "https://cdn.balkan.app/shared/3.jpg" },
                    { id: 3, pid: 2, name: "Gian Paolo Montano", title: "Consultant", img: "https://cdn.balkan.app/shared/4.jpg" },
                    { id: 4, pid: 3, name: "Joseph Ledesma", title: "Chief Technology Officer", img: "https://cdn.balkan.app/shared/5.jpg" },
                    { id: 5, pid: 4, name: "Christian Visaya", title: "Development Director", img: "https://cdn.balkan.app/shared/6.jpg" },
                    { id: 6, pid: 3, name: "Shaira L. Bautista", title: "VP of Internal Marketing & Communication", img: "https://cdn.balkan.app/shared/7.jpg" },
                    { id: 7, pid: 3, name: "Fidemar Hernado", title: "VP of Sales and Distribution", img: "https://cdn.balkan.app/shared/8.jpg" },
                    { id: 8, pid: 6, name: "Grace Manalo", title: "Senior Social Media Expert", img: "https://cdn.balkan.app/shared/8.jpg" },
                    { id: 9, pid: 6, name: "Sherilyn Ledesma", title: "Creative and Social Media Expert", img: "https://cdn.balkan.app/shared/8.jpg" },
                    { id: 10, pid: 7, name: "Ferdinand Callueng", title: "Sales Manager", img: "https://cdn.balkan.app/shared/8.jpg" },
                ]
            }
        },

    methods: {
        oc: function(domEl, x) {
            this.chart = new OrgChart(domEl, {
            nodes: x,
            enableSearch: false,
            collapse: {
                level: 3
            },
            nodeBinding: {
                field_0: "name",
                field_1: "title",
                img_0: "img"
            }
            });
        }
    },

    mounted()   {
        this.oc(this.$refs.tree, this.nodes)
    }
}
</script>