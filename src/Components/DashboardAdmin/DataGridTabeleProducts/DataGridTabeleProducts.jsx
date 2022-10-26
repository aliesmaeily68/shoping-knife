import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function ProductsComponent() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://knifeshop-b9f2f-default-rtdb.firebaseio.com/product.json")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          let Products = [];
          Object.entries(data)[0][1].map((item) =>
            item.Info.map((info) =>
              info.MainInfo.map((product) => Products.push(product))
            )
          );
          setAllProducts(Products);
        }
      });
  });

  const columns = [
    {
      field: "title&productImgName",
      headerName: "نام محصول",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 350,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`../Image/${params.row.productImgName}`}
            alt="عکس محصول"
            style={{
              width: "3.5em",
              height: "3.5em",
              borderRadius: "50%",
              border: "none",
              marginLeft: "1.5em",
            }}
          />
          <div style={{ fontSize: "1.2em" }}>{params.row.title}</div>
        </div>
      ),
    },
    {
      field: "price",
      headerName: "مبلغ",
      width: 150,
      editable: true,
    },
    {
      field: "stock",
      headerName: "موجودی",
      width: 150,
      editable: true,
    },
    {
      field: "genus",
      headerName: "جنس",
      width: 150,
      editable: true,
    },
    {
      field: "Weight",
      headerName: "وزن",
      width: 150,
      editable: true,
    },
    {
      field: "usage",
      headerName: "کاربرد",
      width: 150,
      editable: true,
    },
  ];

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={allProducts}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </>
  );
}
