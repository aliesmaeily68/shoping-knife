import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
let editUserHandler = async () => {
  console.log("ali");
  //   let newUserObject = {
  //     name,
  //     userJob,
  //     email,
  //     imgurl,
  //     pricetransaction,
  //     datatransaction,
  //     pricetransaction,
  //     statustransaction,
  //     statusactive,
  //   };
  //   await fetch(
  //     `https://dashboard-35c87-default-rtdb.firebaseio.com/users/${userId}.json`,
  //     {
  //       method: "PUT",
  //       body: JSON.stringify(newUserObject),
  //     }
  //   ).then((res) => console.log(res));
  //   setShowEditmodal(false);
  //   setGetData((prev) => !prev);
};

// useEffect(() => {
//   let userInfo = users.find((user) => user[0] == userId);
//   if (userInfo) {
//     setName(userInfo[1].name);
//     setUserJob(userInfo[1].userJob);
//     setEmail(userInfo[1].email);
//     setImgurl(userInfo[1].imgurl);
//     setDataTransaction(userInfo[1].datatransaction);
//     setPriceTransaction(userInfo[1].pricetransaction);
//     setStatusTransaction(userInfo[1].statustransaction);
//     setStatusActive(userInfo[1].statusactive);
//   }
// }, [userId]);
export default function EditUserModal(props) {
    console.log(props);
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
            ویرایش کاربر
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>نام ونام خانوادگی :</Form.Label>
              <Form.Control
                type="text"
                placeholder="نام و نام خانوادگی"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ایمیل : </Form.Label>
              <Form.Control
                type="email"
                placeholder="Email "
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>شغل :</Form.Label>
              <Form.Control
                type="text"
                placeholder="شغل"
                value={userJob}
                onChange={(event) => setUserJob(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>آدرس عکس :</Form.Label>
              <Form.Control
                type="text"
                placeholder="آدرس عکس"
                value={imgurl}
                onChange={(event) => setImgurl(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>مبلغ تراکنش :</Form.Label>
              <Form.Control
                type="text"
                placeholder="مبلغ تراکنش"
                value={pricetransaction}
                onChange={(event) => setPriceTransaction(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>تاریخ تراکنش :</Form.Label>
              <Form.Control
                type="text"
                placeholder="تاریخ تراکنش"
                value={datatransaction}
                onChange={(event) => setDataTransaction(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>وضعیت تراکنش: </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(event) => setStatusTransaction(event.target.value)}
              >
                <option>انتخاب تراکنش </option>
                <option value="پرداخت شد">پرداخت شده</option>
                <option value="درحال پرداخت">درحال پرداخت</option>
                <option value="پرداخت نشده">پرداخت نشده</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>وضعیت فعالیت: </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(event) => setStatusActive(event.target.value)}
              >
                <option>انتخاب وضعیت </option>
                <option value=" فعال"> فعال</option>
                <option value=" غیر فعال">غیرفعال </option>
              </Form.Select>
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", alignSelf: "center" }}>
          <Button onClick={() => editUserHandler()}>ویرایش</Button>
          <Button onClick={() => props.setShowEditmodal(false)}>
            بستن مدال
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
