import React, { useContext, useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { UsersContext } from "../../../../Contexts/UsersContext";

import "./EditUserModal.css";

export default function EditUserModal(props) {
  const DataUsersContext = useContext(UsersContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");
  const [city, setCity] = useState("");
  const [addressName, setAddressName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [tellNumber, setTellNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [post, setPost] = useState("");
  let userInfo = props.users.find((user) => user[0] == props.userId);

  let editUserHandler = async () => {
    let NewUsersObj = {
      token: userInfo[1].token,
      firstName,
      lastName,
      companyName,
      countryName,
      stateName,
      city,
      addressName,
      postalCode,
      tellNumber,
      email,
      password,
      moreInfo: userInfo[1].moreInfo,
      userName,
      post,
      userDatas: {
        cartConter: userInfo[1].userDatas.cartConter,
        favoritesConter: userInfo[1].userDatas.favoritesConter,
        comparisonConter: userInfo[1].userDatas.comparisonConter,
        total: userInfo[1].userDatas.total,
        userCart: userInfo[1].userDatas.userCart,
        userFavorites: userInfo[1].userDatas.userFavorites,
        userComparison: userInfo[1].userDatas.userComparison,
      },
    };

    await fetch(
      `https://myknife-2e73f-default-rtdb.firebaseio.com/users/${props.userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(NewUsersObj),
      }
    ).then((res) => console.log(res));
    props.setShowEditmodal(false);
    DataUsersContext.setGetuserData((prev) => !prev);
  };

  useEffect(() => {
    let userInfo = props.users.find((user) => user[0] == props.userId);
    if (userInfo) {
      setFirstName(userInfo[1].firstName);
      setLastName(userInfo[1].lastName);
      setCompanyName(userInfo[1].companyName);
      setCountryName(userInfo[1].countryName);
      setStateName(userInfo[1].stateName);
      setCity(userInfo[1].city);
      setAddressName(userInfo[1].addressName);
      setPostalCode(userInfo[1].postalCode);
      setTellNumber(userInfo[1].tellNumber);
      setEmail(userInfo[1].email);
      setPassword(userInfo[1].password);
      setUserName(userInfo[1].userName);
      setPost(userInfo[1].post);
    }
  }, [props.userId]);
  return (
    <div>
      {" "}
      <Modal
        show={props.showeditmodal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header onClick={() => props.setShowEditmodal(false)} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ???????????? ??????????
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="EditUser-GridForm">
            <Form.Group className="mb-3">
              <Form.Label>?????????? ?????????? : </Form.Label>
              <Form.Select
                value={post}
                onChange={(event) => setPost(event.target.value)}
              >
                <option value="??????????">??????????</option>
                <option value="????????"> ????????</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> ?????? ???????????? :</Form.Label>
              <Form.Control
                type="text"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> ???????????? :</Form.Label>
              <Form.Control
                type="text"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> ?????????? :</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>?????? :</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>?????? ???????????????? :</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> ???????? :</Form.Label>
              <Form.Control
                type="text"
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>???????? : </Form.Label>
              <Form.Select
                value={countryName}
                onChange={(event) => setCountryName(event.target.value)}
              >
                <option value="??????????">??????????</option>
                <option value="????????????"> ????????????</option>
                <option value="????????????"> ????????????</option>
                <option value="??????????"> ??????????</option>
                <option value="????????"> ????????</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>?????????? : </Form.Label>
              <Form.Select
                value={stateName}
                onChange={(event) => setStateName(event.target.value)}
              >
                <option value="??????????">??????????</option>
                <option value="??????????"> ??????????</option>
                <option value="??????????"> ??????????</option>
                <option value="????????????"> ????????????</option>
                <option value="??????????"> ??????????</option>
                <option value="??????????"> ??????????</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> ?????? :</Form.Label>
              <Form.Control
                type="text"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> ???????? :</Form.Label>
              <Form.Control
                type="text"
                value={addressName}
                onChange={(event) => setAddressName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>???????????? :</Form.Label>
              <Form.Control
                type="text"
                value={postalCode}
                onChange={(event) => setPostalCode(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> ?????????? ???????????? :</Form.Label>
              <Form.Control
                type="text"
                value={tellNumber}
                onChange={(event) => setTellNumber(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", alignSelf: "center" }}>
          <Button onClick={(props) => editUserHandler(props)}>????????????</Button>
          <Button onClick={() => props.setShowEditmodal(false)}>
            ???????? ????????
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
