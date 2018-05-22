// import update from 'immutability-helper';
import faker from 'faker';
import ReactDataGrid from 'react-data-grid';
import React, { Component } from 'react';
import { 
        // Editors,
        //  Toolbar, 
         Formatters 
        } from 'react-data-grid-addons';
// const { AutoComplete: AutoCompleteEditor, DropDownEditor } = Editors; 
const { ImageFormatter } = Formatters;

class Grid extends Component {
    constructor(props, context) {
        super(props, context);
        // this.createRows();
        this._columns = [
            { 
                key: 'id', 
                name: 'ID', 
                width: 60,  
                sortable:true,              
            },
            { 
                key: 'avatar', 
                name: 'Avatar',
                width: 60,
                formatter: ImageFormatter,
                resizable: true,
            },
            { 
                key: 'username',
                name: 'Username',
                width: 200,  
                sortable:true,                           
            },
            { 
                key: 'first',
                name: 'First Name',
                width: 200,                
                sortable:true,
            },
            { 
                key: 'last',
                name: 'Last Name', 
                width: 200,             
                sortable:true,
            },
            { 
                key: 'email',
                name: 'Email', 
                width: 250,
                sortable:true,                              
            },
        ];

        // let originalRows = this.createRows();
        // console.log("rows", originalRows)
        // let rows = originalRows.slice(0);
        // this.state = { originalRows, rows };
    }

    createRows = () => {
        let rows = [];
        for (let i = 1; i <= 10; i++) {
            rows.push({
                        id:i,
                        avatar:faker.internet.avatar(),
                        username:faker.internet.userName(),
                        first:faker.name.firstName(),
                        last:faker.name.lastName(),
                        email:faker.internet.email(),
                    });
        }

        this._rows = rows;
    };

    rowGetter = (i) => {
        return this._rows[i];
    };
    handleGridSort = (sortColumn, sortDirection) => {
        console.log("sortColumn", sortColumn);
        console.log("sortDirection", sortDirection);
        const comparer = (a, b) => {
            if (sortDirection === 'ASC') {
                return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
            } else if (sortDirection === 'DESC') {
                return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
            }
        };
        // console.log("this.state.originalRows.slice(0)",this.state.originalRows.slice(0))
        // const rows = (sortDirection === 'NONE') ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);
    
        // this.setState({ rows });
      };
    render() {
        return  (
            <ReactDataGrid
                onGridSort={this.handleGridSort}
                columns={this._columns}
                rowGetter={this.rowGetter}
                rowsCount={this._rows.length}
                minHeight={500} 
            />
        );
    }
}

export default Grid;