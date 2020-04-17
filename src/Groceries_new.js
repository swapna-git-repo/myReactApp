
import React, { Component } from "react";
import { ExcelExport, ExcelExportColumn, ExcelExportColumnGroup } from '@progress/kendo-react-excel-export';
import products from './products.json';

 const data = products;

class Groceries extends Component {
  _exporter;
    export = () => {
        this._exporter.save();
    }
  render() {
          return (
            <div>
                      <button className="k-button" onClick={this.export}>Export to Excel </button>

                      <ExcelExport data={data} fileName="Products.xlsx" ref={(exporter) => { this._exporter = exporter; }}>
                        
                              <ExcelExportColumn field="ProductID" title="Product ID"/>
                              <ExcelExportColumn field="ProductName" title="Product Name" />
                              <ExcelExportColumnGroup title="Availability" headerCellOptions={{ textAlign: 'center' }}/>
                              <ExcelExportColumn field="UnitPrice" title="Unit Price"/>
                              <ExcelExportColumn field="UnitsOnOrder" title="Units On Order"/>
                              <ExcelExportColumn field="UnitsInStock" title="Units In Stock"/>

                         </ExcelExport>

              </div>
          );
        }
}
 
export default Groceries;




