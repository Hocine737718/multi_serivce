<template>
    <div class="offers_body">
        <div class="offers_limit">
			<select id="limit" name="limit" class="offers_select" size="1" @change="handleChange($event)">
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10" selected="selected">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="0">Tout</option>
            </select>
		</div>
        <table class="offers_table">
            <thead>
                <tr>
                    <th class="offers_th" v-for="col in columns" :key="col.field" @click="sort(col.field,$event)">
                        <div>
                            {{col.title}}
                            <span class="icon-arrow">&UpArrow;</span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="lineSet.length==0">
                    <td class="offers_td" style="text-align: center;width:100%;min-width: 800px;" :colspan="columns.length">Aucun résultat trouvé.</td>
                </tr>
                <tr v-for="line in lineSet" :key="line.id">
                    <td class="offers_td" v-for="column in columns" :key="column.field">
                        <a v-if="column.field=='title'" :href="line['link']" class="offers_link" @click="click">{{ line[column.field] }}</a>
                        <span v-else-if="column.field=='clicks'" class="badge">{{ line[column.field] }}</span>
                        <span v-else>{{ line[column.field] }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    name:'OffersTableCmp',
    props:["lines","columns"],
    data(){
        return{
            limitLines: 10,
            sortColumn: null,
            sortOrder: 'asc',
        }
    },
    computed:{
        lineSet(){
             let lineSet=this.lines;
            if(this.limitLines!=0) lineSet=this.lines.slice(0, this.limitLines);
            if (this.sortColumn) {
                const orderFactor = this.sortOrder === 'asc' ? 1 : -1;
                lineSet = lineSet.sort((a, b) =>
                    (a[this.sortColumn] > b[this.sortColumn] ? 1 : -1) * orderFactor
                );
            }
            return lineSet;            
        }
    },
    methods:{
        handleChange(event){
            this.limitLines=event.target.value;
        },
        sort(column,event) {
            if(this.lines.length!=0){
                let index=this.columns.findIndex(item=>item.field==column);
                let head=event.currentTarget;
                if (column === this.sortColumn) {
                    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
                } 
                else {
                    this.sortColumn = column;
                    this.sortOrder = 'asc';
                }
                $('thead th').each(function(){
                    $(this).removeClass('active');
                });
                head.classList.add('active');
                $('td').each(function(){
                    $(this).removeClass('active');
                });
                $('tbody tr').each(function(){
                    $(this).find('td').each(function(i){
                        if(index==i){
                            $(this).addClass('active');
                        } 
                    });
                });
                head.classList.toggle('desc', this.sortOrder==="desc" );
            }
        },
        async click(){
            this.$store.dispatch('add_click',2);  
        }        
    }
}
</script>