import React, { useContext, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UsersContext } from "../../../Contexts/UsersContext";
import EditUserModal from "./EditUserModal/EditUserModal";

export default function UsersComponent() {
  const DataUsersContext = useContext(UsersContext);
  const [userId, setUserId] = useState("");
  const [showdeleteuserModal, setShowdeleteuserModal] = useState("");
  const [showeditmodal, setShowEditmodal] = useState(false);

  const { posts } = useFetch(
    "https://aaaa-f46f5-default-rtdb.firebaseio.com//users.json",
    DataUsersContext.getuserData
  );

  let users = [...posts];
  let Alluser = users.map((user, index) => {
    let newusers = { ...user[1], id: index + 1, userId: user[0] };
    return newusers;
  });

  let removeuser = async () => {
    await fetch(
      `https://aaaa-f46f5-default-rtdb.firebaseio.com//users/${userId}.json`,
      {
        method: "DELETE",
      }
    ).then((res) => console.log(res));

    setShowdeleteuserModal(false);
    DataUsersContext.setGetuserData((prev) => !prev);
  };

  const columns = [
    { field: "id", headerName: "شماره", width: 70 },

    {
      field: "title&productImgName",
      headerName: "نام و نام خانوادگی",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <div style={{ display: "flex", gap: ".5em", alignItems: "center" }}>
          <div style={{ fontSize: "1.2em" }}>{params.row.firstName}</div>
          <div style={{ fontSize: "1.2em" }}>{params.row.lastName}</div>
        </div>
      ),
    },

    {
      field: "post",
      headerName: "سمت کاربر",
      width: 100,
      editable: true,
    },
    {
      field: "userName",
      headerName: "نام کاربری",
      width: 130,
      editable: true,
    },
    {
      field: "password",
      headerName: "رمز عبور",
      width: 130,
      editable: true,
    },
    {
      field: "tellNumber",
      headerName: "شماره تماس",
      width: 130,
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
            justifyContent: "space-between",
          }}
        >
          <ModeEditIcon
            style={{ color: "rgb(4, 187, 4)", cursor: "pointer" }}
            onClick={() => {
              setShowEditmodal(true);
              setUserId(params.row.userId);
            }}
          />

          <DeleteIcon
            style={{ color: "rgb(255, 50, 50)", cursor: "pointer" }}
            onClick={() => {
              setUserId(params.row.userId);
              setShowdeleteuserModal(true);
            }}
          />
          
          <Link to={`/dashboard-admin/${params.row.userId}`}>
            <MoreHorizIcon style={{ color: "darkblue", cursor: "pointer" }} />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={Alluser}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
      {/* ////delete modal/// */}
      <Modal
        show={showdeleteuserModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          onClick={() => setShowdeleteuserModal(false)}
          style={{ color: "red" }}
          closeButton
        >
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>آیا از حذف کاربر مطمئنید؟</p>
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", alignSelf: "center" }}>
          <Button
            style={{
              color: "#fff",
              border: "none",
              borderRadius: ".5em",
              backgroundColor: "#1e1ef7",
            }}
            onClick={removeuser}
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
            onClick={() => setShowdeleteuserModal(false)}
          >
            نه, بستن مدال
          </Button>
        </Modal.Footer>
      </Modal>

      {/**edit modal */}
      <EditUserModal
        setUserId={setUserId}
        userId={userId}
        setShowEditmodal={setShowEditmodal}
        showeditmodal={showeditmodal}
        users={users}
      />
    </>
  );
}
