import React, { useContext, useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { AllProductContext } from "../../../../Contexts/ProductContext";

import "./EditMainProposalModal.css";

export default function EditMainProposalModal(props) {
  const DataProductContext = useContext(AllProductContext);
  const [title, setTitle] = useState("");
  const [productImgName, setProductImgName] = useState("");
  const [price, setPrice] = useState("");
  const [producer, setProducer] = useState("");
  const [weight, setWeight] = useState("");
  const [discount, setDiscount] = useState("");
  const [genus, setGenus] = useState("");
  const [stock, setStock] = useState("");
  const [usage, setUsage] = useState("");
  let productInfo = props.Products.find((user) => user[0] == props.productId);

  let editUserHandler = async () => {
    let NewProductsObj = {
      id: productInfo[1].id,
      title,
      productImgName,
      price,
      Producer: producer,
      Weight: weight,
      discount,
      genus,
      stock,
      usage,
      conter: productInfo[1].conter,
    };

    await fetch(
      `https://knifeshop-b9f2f-default-rtdb.firebaseio.com/mainProposalProduct/${props.productId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(NewProductsObj),
      }
    ).then((res) => console.log(res));
    props.setShowEditmodal(false);
    DataProductContext.setGetData((prev) => !prev);
  };

  useEffect(() => {
    let productInfo = props.Products.find(
      (product) => product[0] == props.productId
    );
    if (productInfo) {
      setTitle(productInfo[1].title);
      setProductImgName(productInfo[1].productImgName);
      setPrice(productInfo[1].price);
      setProducer(productInfo[1].Producer);
      setWeight(productInfo[1].Weight);
      setDiscount(productInfo[1].discount);
      setGenus(productInfo[1].genus);
      setStock(productInfo[1].stock);
      setUsage(productInfo[1].usage);
    }
  }, [props.productId]);
  return (
    <div>
      {" "}
      <Modal
        show={props.showEditmodal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header onClick={() => props.setShowEditmodal(false)} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ویرایش محصول
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="EditProduct-GridForm">
            <Form.Group className="mb-1">
              <Form.Label className="Title-EditMainProposalProductGrid">
                عنوان :
              </Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="Title-EditMainProposalProductGrid">
                {" "}
                عکس :
              </Form.Label>
              <Form.Control
                type="text"
                value={productImgName}
                onChange={(event) => setProductImgName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="Title-EditMainProposalProductGrid">
                {" "}
                قیمت :
              </Form.Label>
              <Form.Control
                type="text"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="Title-EditMainProposalProductGrid">
                تولید کننده :
              </Form.Label>
              <Form.Control
                type="text"
                value={producer}
                onChange={(event) => setProducer(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="Title-EditMainProposalProductGrid">
                وزن (گرم) :
              </Form.Label>
              <Form.Control
                type="text"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="Title-EditMainProposalProductGrid">
                {" "}
                درصد تخفیف :
              </Form.Label>
              <Form.Control
                type="text"
                value={discount}
                onChange={(event) => setDiscount(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="Title-EditMainProposalProductGrid">
                {" "}
                نوع جنس :
              </Form.Label>
              <Form.Control
                type="text"
                value={genus}
                onChange={(event) => setGenus(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="Title-EditMainProposalProductGrid">
                موجودی انبار :
              </Form.Label>
              <Form.Control
                type="text"
                value={stock}
                onChange={(event) => setStock(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="Title-EditMainProposalProductGrid">
                کاربرد :
              </Form.Label>
              <Form.Control
                type="text"
                value={usage}
                onChange={(event) => setUsage(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", alignSelf: "center" }}>
          <Button onClick={(props) => editUserHandler(props)}>ویرایش</Button>
          <Button onClick={() => props.setShowEditmodal(false)}>
            بستن مدال
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
