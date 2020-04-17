import React, { Component } from "react";
import { ExcelExport, ExcelExportColumn, ExcelExportColumnGroup } from '@progress/kendo-react-excel-export';
import products from './products.json';
const data = products;
 
class Groceries extends Component {
    _exporter;
    export = () => {
        this._exporter.save();
    }
    constructor(props){
        super(props);
        this.state = {            
            products :products            
        };
    }
  render() {
    return (
      
      <div>
      <ol className="item">
                {
                    products.map(products => (
                        <li key={products.ProductID} align="start">
                            <div>
                                <p className="title">{products.ProductName}</p>
                                <p className="UnitPrice">{products.UnitPrice}</p>
                                <p className="status">{products.status}</p>
                            </div>
                        </li>
                    ))
                }
                </ol>
      <button className="k-button" onClick={this.export}>Export to Excel </button>
      <ExcelExport data={data} fileName="Products.xlsx" ref={(exporter) => { this._exporter = exporter; }}>
       <ExcelExportColumn field="ProductID" title="Product ID"/>
       <ExcelExportColumn field="ProductName" title="Product Name" />
       <ExcelExportColumn field="UnitPrice" title="Unit Price"/>
       </ExcelExport>

        <h2>Groceries</h2>
        </div>
        
    );
  }
}
 
export default Groceries;