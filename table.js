class Table {

    constructor(tableName) {
        this.tableName = tableName;
        this.column = 0;
        this.type = 'desc';
        this.table = [];
        this.columns = []
        this.rows = '';

        this.selectedTable = document.querySelector(this.tableName + " tbody");
        this.tableRows = this.selectedTable.querySelectorAll("tr");
    }

    table_serialize() {
        
        this.tableRows.forEach((v, k) => {
            this.table.push(v);
        })

        this.table.forEach((v, k) => {
            let idx = v.children[this.column].innerHTML;
            
            this.columns.push({
                idx: idx,
                columns: [...v.children]
            })
        })
        
        this.columns.sort((a, b) => {

            let isNumeric = Number(a['idx'].replace(/[,.]/g, '')) && Number(b['idx'].replace(/[,.]/g, ''))

            if(isNumeric) {
                if(this.type == 'desc') {
                    return parseInt(b['idx'].replace(/[,.]/g, ''), 10) - parseInt(a['idx'].replace(/[,.]/g, ''), 10)
                } else if(this.type == 'asc') {
                    return parseInt(a['idx'].replace(/[,.]/g, ''), 10) - parseInt(b['idx'].replace(/[,.]/g, ''), 10)
                }
            } else {
                if(this.type == 'desc') {
                    return a['idx'] < b['idx']
                } else if(this.type == 'asc') {
                    return a['idx'] > b['idx']
                }
            }
            
        })

        
    }

    do_sort() {
        this.columns.forEach(el => {
            this.rows += '<tr>';
            for(let i = 0; i < el.columns.length; i++) {
                this.rows += el.columns[i].outerHTML;
            }
            this.rows += '</tr>';
        });
        
        this.selectedTable.innerHTML = this.rows;

        this.columns = [];
        this.table = [];
        this.rows = '';
    }

    sort(column, type) {
        this.column = column;
        this.type = type;

        this.table_serialize();

        this.do_sort();
    }
}

module.exports = Table;