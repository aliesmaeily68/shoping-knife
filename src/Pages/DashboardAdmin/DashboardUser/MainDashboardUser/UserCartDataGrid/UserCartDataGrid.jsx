import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import "./UserCartDataGrid.css";

export default function UserCartDataGrid(props) {
  const columns = [
    { field: "id", headerName: "آی دی محصول", width: 300 },
    {
      field: "title",
      headerName: "عنوان محصول",
      width: 300,
      editable: true,
    },
    {
      field: "productImgName",
      headerName: "عکس محصول",
      width: 100,
      editable: true,
      renderCell: (params) => (
        <img
          src={`../Image/${params.row.productImgName}`}
          alt="عکس محصول"
          style={{
            width: "3.5em",
            height: "3.5em",
            borderRadius: "50%",
            border: "none",
          }}
        />
      ),
    },
    {
      field: "conter",
      headerName: "تعداد ",
      width: 70,
      editable: true,
    },
    {
      field: "price",
      headerName: "مبلغ محصول",
      width: 130,
      editable: true,
    },
  ];
  return (
    <div className="Container-UserCartDataGrid">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={props.userCart}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
      <div className="Total-Counters-UserCartDataGrid">
        <div className="Total-UserCartDataGrid">
          <h5>جمع مبلغ :</h5>
          {props.total}
          تومان
        </div>
        <div className="Counters-UserCartDataGrid">
          <h5>تعداد کل محصولات انتخاب شده :</h5>
          {props.cartConter}
        </div>
      </div>
    </div>
  );
}
