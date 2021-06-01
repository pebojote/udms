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
                    { id: 1, name: "John Arcel S. Padilla", title: "Chairman and CEO", img: "https://user-images.githubusercontent.com/38276345/117926120-d9435900-b32a-11eb-8963-95221e0385b1.png" },
                    { id: 2, pid: 1, name: "Francisco N. Balan", title: "President and COO", img: "https://user-images.githubusercontent.com/38276345/117926134-dcd6e000-b32a-11eb-8aad-1443f5ea138c.png" },
                    { id: 3, pid: 2, name: "Gian Paolo Montano", title: "Consultant", img: "https://user-images.githubusercontent.com/38276345/117934256-10b70300-b335-11eb-8dde-fac21e98eb77.png" },
                    { id: 4, pid: 3, name: "Joseph Ledesma", title: "Chief Technology Officer", img: "https://user-images.githubusercontent.com/38276345/117934221-07c63180-b335-11eb-90bc-30789ea1582b.png" },
                    { id: 5, pid: 4, name: "Christian Visaya", title: "Development Director", img: "https://user-images.githubusercontent.com/38276345/117934245-0dbc1280-b335-11eb-90ce-a758dc758c14.png" },
                    { id: 6, pid: 3, name: "Fidemar Hernado", title: "VP of Sales and Distribution", img: "https://user-images.githubusercontent.com/38276345/117934239-0bf24f00-b335-11eb-9a74-fa41c048a838.png" },
                    { id: 7, pid: 6, name: "Grace Manalo", title: "Senior Social Media Expert", img: "https://user-images.githubusercontent.com/38276345/117934265-13b1f380-b335-11eb-8606-ee5b37faa2aa.png" },
                    { id: 8, pid: 6, name: "Sherilyn Ledesma", title: "Creative and Social Media Expert", img: "https://user-images.githubusercontent.com/38276345/117934268-14e32080-b335-11eb-9bdf-2b2af7a71495.png" },
                    { id: 9, pid: 7, name: "Ferdinand Callueng", title: "Sales Manager", img: "https://user-images.githubusercontent.com/38276345/117934275-16144d80-b335-11eb-88b7-7c2cc9b59177.png" },
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