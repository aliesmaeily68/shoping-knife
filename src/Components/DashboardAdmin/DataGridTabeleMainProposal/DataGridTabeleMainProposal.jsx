import React, { useContext, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Modal, Button } from "react-bootstrap";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Link } from "react-router-dom";
import { AllProductContext } from "../../../Contexts/ProductContext";
import EditMainProposalModal from "./EditMainProposalModal/EditMainProposalModal";

export default function MainProposalProductsComponent() {
  const DataProductContext = useContext(AllProductContext);

  const [productId, setProductId] = useState("");
  const [showdeleteModal, setShowdeleteModal] = useState("");
  const [showEditmodal, setShowEditmodal] = useState(false);

  const { posts } = useFetch(
    "https://aaaa-f46f5-default-rtdb.firebaseio.com//mainProposalProduct.json",
    DataProductContext.getData
  );

  let Products = [...posts];

  const AllProduct = posts.map((product, index) => {
    let newProducts = { ...product[1], id: index + 1, productId: product[0] };
    return newProducts;
  });

  let removeProduct = async () => {
    await fetch(
      `https://aaaa-f46f5-default-rtdb.firebaseio.com//mainProposalProduct/${productId}.json`,
      {
        method: "DELETE",
      }
    ).then((res) => console.log(res));

    setShowdeleteModal(false);
    DataProductContext.setGetData((prev) => !prev);
  };

  const columns = [
    { field: "id", headerName: "شماره", width: 90 },
    {
      field: "title&productImgName",
      headerName: "نام محصول",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 260,
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
      field: "action",
      headerName: "ویرایش",
      description: "This column has a value getter and is not sortable.",
      width: 160,
      renderCell: (params) => (
        <div
          className="action"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <ModeEditIcon
            style={{ color: "rgb(4, 187, 4)", cursor: "pointer" }}
            onClick={() => {
              setShowEditmodal(true);
              setProductId(params.row.productId);
            }}
          />

          <DeleteIcon
            style={{ color: "rgb(255, 50, 50)", cursor: "pointer" }}
            onClick={() => {
              setProductId(params.row.productId);
              setShowdeleteModal(true);
            }}
          />

        </div>
      ),
    },
  ];

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={AllProduct}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
      {/* ////delete modal/// */}
      <Modal
        show={showdeleteModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          onClick={() => setShowdeleteModal(false)}
          style={{ color: "red" }}
          closeButton
        >
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>آیا از حذف محصول مطمئنید؟</p>
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", alignSelf: "center" }}>
          <Button
            style={{
              color: "#fff",
              border: "none",
              borderRadius: ".5em",
              backgroundColor: "#1e1ef7",
            }}
            onClick={removeProduct}
          >
            بله, حذف شود
          </Button>
          <Button
            style={{
              color: "#fff",
              border: "none",
              borderRadius: ".5em",
              backgroundColor: "#1e1ef7",
            }}
            onClick={() => setShowdeleteModal(false)}
          >
            نه, بستن مدال
          </Button>
        </Modal.Footer>
      </Modal>

      {/**edit modal */}
      <EditMainProposalModal
        setProductId={setProductId}
        productId={productId}
        setShowEditmodal={setShowEditmodal}
        showEditmodal={showEditmodal}
        Products={Products}
      />
    </>
  );
}
