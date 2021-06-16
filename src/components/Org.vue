<template>
    <div class="p-2">
        <!-- <div class="p-0" ref="tree"></div> -->
        <img src="https://user-images.githubusercontent.com/38276345/122142955-fe277080-ce82-11eb-81c5-0bb2030a7ec1.png" class="img-fluid" alt="...">
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
                    { id: 3, pid: 2, name: "Gian Paolo Montano", title: "Sales and Operations Consultant", img: "https://user-images.githubusercontent.com/38276345/117934256-10b70300-b335-11eb-8dde-fac21e98eb77.png" },
                    { id: 4, pid: 2, name: "William Gilbert Fajardo", title: "Marketing Consultant", img: "https://user-images.githubusercontent.com/38276345/117934256-10b70300-b335-11eb-8dde-fac21e98eb77.png" },
                    { id: 5, pid: 4, name: "Joseph Ledesma", title: "Chief Technology Officer", img: "https://user-images.githubusercontent.com/38276345/121829871-4c5b3900-ccf6-11eb-8b9e-a35eb9319d50.png" },
                    { id: 6, pid: 3, name: "Jamaica Mae Paz", title: "Chief Creative Officer", img: "https://user-images.githubusercontent.com/38276345/121829920-6b59cb00-ccf6-11eb-9a14-bea21f5fbfdd.png" },
                    { id: 7, pid: 6, name: "Fidemar Hernado", title: "VP of Sales and Distribution", img: "https://user-images.githubusercontent.com/38276345/121829965-83314f00-ccf6-11eb-8f7a-fee6a4b7c195.png" },
                    { id: 8, pid: 5, name: "Sherilyn Ledesma", title: "VP of Social Media Management", img: "https://user-images.githubusercontent.com/38276345/121830037-b96ece80-ccf6-11eb-9aec-754ea3ef97cb.png" },
                    { id: 9, pid: 8, name: "Paul Albert Baltazar", title: "Social Media Director", img: "https://user-images.githubusercontent.com/38276345/117934275-16144d80-b335-11eb-88b7-7c2cc9b59177.png" },
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
