// import React, { useState } from "react";
// import useFetch from "../../../hooks/useFetch";
// import Box from "@mui/material/Box";
// import { DataGrid } from "@mui/x-data-grid";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Modal, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export default function UsersComponent() {
//   const [userId, setuserId] = useState("");
//   const [showdeleteuserModal, setShowdeleteuserModal] = useState("");
//   const [getuserData, setGetuserData] = useState(false);

//   const { posts } = useFetch(
//     "https://shopingknife-default-rtdb.firebaseio.com/user.json",
//     getuserData
//   );
//   let Alluser = posts.map((user, index) => {
//     let newusers = { ...user[1], id: index + 1, userId: user[0] };
//     return newusers;
//   });
//   console.log(Alluser);
//   let removeuser = async () => {
//     await fetch(
//       `https://shopingknife-default-rtdb.firebaseio.com/user/${userId}.json`,
//       {
//         method: "DELETE",
//       }
//     ).then((res) => console.log(res));

//     setShowdeleteuserModal(false);
//     setGetuserData((prev) => !prev);
//   };

//   const columns = [
//     { field: "id", headerName: "شماره", width: 70 },
  
//     {
//       field: "price",
//       headerName: "نام و نام خانوادگی",
//       width: 130,
//       editable: true,
//     },
//     {
//         field: "price",
//         headerName: "سمت کاربر",
//         width: 100,
//         editable: true,
//       },
//     {
//       field: "price",
//       headerName: "نام کاربری",
//       width: 130,
//       editable: true,
//     },
//     {
//       field: "price",
//       headerName: "رمز عبور",
//       width: 130,
//       editable: true,
//     },
//     {
//       field: "price",
//       headerName: "شماره تماس",
//       width: 130,
//       editable: true,
//     },
 
//     {
//       field: "action",
//       headerName: "ویرایش",
//       description: "This column has a value getter and is not sortable.",
//       width: 160,
//       renderCell: (params) => (
//         <div
//           className="action"
//           style={{
//             width: "100%",
//             display: "flex",
//             justifyContent: "space-evenly",
//           }}
//         >
//           <Link to={`/user/${params.row.userId}`}>
//             <button
//               className="editUser"
//               style={{
//                 backgroundcolor: "rgb(202, 246, 231)",
//                 border: "none",
//                 color: "rgb(4, 187, 4)",
//                 cursor: "pointer",
//                 padding: ".2em .3em",
//                 borderRadius: "1em",
//               }}
//             >
//               Edit
//             </button>
//           </Link>
//           <DeleteIcon
//             style={{ color: "rgb(255, 50, 50)", cursor: "pointer" }}
//             onClick={() => {
//               setuserId(params.row.userId);
//               setShowdeleteuserModal(true);
//             }}
//           />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <>
//       <Box sx={{ height: 400, width: "100%" }}>
//         <DataGrid
//           rows={Alluser}
//           columns={columns}
//           pageSize={5}
//           rowsPerPageOptions={[5]}
//           checkboxSelection
//           disableSelectionOnClick
//         />
//       </Box>
//       {/* ////delete modal/// */}
//       <Modal
//         show={showdeleteuserModal}
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header
//           onClick={() => setShowdeleteuserModal(false)}
//           style={{ color: "red" }}
//           closeButton
//         >
//           <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>آیا از حذف کاربر مطمئنید؟</p>
//         </Modal.Body>
//         <Modal.Footer style={{ display: "flex", alignSelf: "center" }}>
//           <Button
//             style={{
//               color: "#fff",
//               border: "none",
//               borderRadius: ".5em",
//               backgroundColor: "#1e1ef7",
//             }}
//             onClick={removeuser}
//           >
//             بله, حذف شود
//           </Button>
//           <Button
//             style={{
//               color: "#fff",
//               border: "none",
//               borderRadius: ".5em",
//               backgroundColor: "#1e1ef7",
//             }}
//             onClick={() => setShowdeleteuserModal(false)}
//           >
//             نه, بستن مدال
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
