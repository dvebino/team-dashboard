import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Page,
  Filter,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Toolbar,
  Search
} from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";

import { Header } from '../components'

function Orders() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp" 
        dataSource={ordersData}
        allowPaging={true}
        allowSorting={true}
        toolbar={['Search']}
      >
        <ColumnsDirective>
          {ordersGrid.map((item,idx) => (
            <ColumnDirective
              key={idx}
              {...item}
            />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Page, Filter, ExcelExport, Edit, PdfExport, Search, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Orders;