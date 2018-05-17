import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import faker from 'faker';

class Grid extends Component {
    constructor() {
        super();
        this.createRows();
        this._columns = [
            { key: 'id', name: 'ID' },
            { key: 'avatar', name: 'Avatar' },
            { key: 'username', name: 'Username' },
            { key: 'first', name: 'First Name' },
            { key: 'last', name: 'Last Name' },
            { key: 'email', name: 'Email' },
        ];
    
        this.state = null;
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

    render(){
        return (
            <section className="grid-holder">
                <ReactDataGrid
                    columns={this._columns}
                    rowGetter={this.rowGetter}
                    rowsCount={this._rows.length}
                    minHeight={500} 
                />
                
            </section>
        )
    }
}

export default Grid;