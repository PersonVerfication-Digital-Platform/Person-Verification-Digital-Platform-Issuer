import React from "react";
import { Form } from "react-bootstrap";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import bg1 from "../../assets/images/Data_security_05.jpg";
import bg2 from "../../assets/images/Tiny cartoon business people reading legal document.jpg";
import { HiHome } from "react-icons/fa";
import { Button } from "bootstrap";
import { useState } from "react";

function UsrReg() {
  const [person, setPerson] = useState({
    first_name: "",
    last_name: "",
    status: "Married",
    nationality: "Sinhalese",
    nic: "",
    dob: "",
    nic_photo_id: "123",
    bc_photo_id: "456",
    email: "",
    password: "XXXXX",
    address: "",
    contact_number: "",
    role: "wallet_owner",
    isAccepted: "0",
  });

  const [validated, setValidated] = useState(false); //form validation
  const navigate = useNavigate();

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "f_name") {
      setPerson((prev_val) => {
        return { ...prev_val, first_name: value };
      });
    } else if (name === "last_name") {
      setPerson((prev_val) => {
        return { ...prev_val, last_name: value };
      });
    } else if (name === "last_name") {
      setPerson((prev_val) => {
        return { ...prev_val, last_name: value };
      });
    } else if (name === "nic") {
      setPerson((prev_val) => {
        return { ...prev_val, nic: value };
      });
    } else if (name === "dob") {
      setPerson((prev_val) => {
        return { ...prev_val, dob: value };
      });
    } else if (name === "contact_number") {
      setPerson((prev_val) => {
        return { ...prev_val, contact_number: value };
      });
    } else if (name === "address") {
      setPerson((prev_val) => {
        return { ...prev_val, address: value };
      });
    } else if (name === "email") {
      setPerson((prev_val) => {
        return { ...prev_val, email: value };
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    //form validation
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    //console.log(person)

    const formData = new FormData();

    formData.append("first_name", person.first_name);
    formData.append("last_name", person.last_name);
    formData.append("status", person.status);
    formData.append("nationality", person.nationality);
    formData.append("nic", person.nic);
    formData.append("dob", person.dob);
    formData.append("nic_photo_id", person.nic_photo_id);
    formData.append("bc_photo_id", person.bc_photo_id);
    formData.append("email", person.email);
    formData.append("password", person.password);
    formData.append("address", person.address);
    formData.append("contact_number", person.contact_number);
    formData.append("role", person.role);
    formData.append("isAccepted", person.isAccepted);

    Axios.post("http://localhost:3001/api/v1/user/addUser", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        // 'x-auth-token': authService.getUserToken(),
      },
    }).then((res) => {
      if (!res.data.success) {
        alert("Error occured !!");
      } else {
        //console.log("success");
        navigate('/');
      }
    });
  }

  return (
    <MDBContainer fluid>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <MDBCard
          className="text-black m-5 firstPage"
          style={{ borderRadius: "25px" }}
        >
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <h2
                  classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                  style={{ color: "blue", marginBottom: "20px" }}
                >
                  Register as a User
                </h2>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBInput
                    label="First Name"
                    id="form1"
                    type="text"
                    style={{ width: "250px" }}
                    name="f_name"
                    onChange={handleChange}
                    value={person.first_name}
                    required
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBInput
                    label="Last Name"
                    id="form2"
                    type="text"
                    style={{ width: "250px" }}
                    name="last_name"
                    onChange={handleChange}
                    value={person.last_name}
                    required
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBInput
                    label="NIC Number"
                    id="form3"
                    type="text"
                    style={{ width: "250px" }}
                    name="nic"
                    onChange={handleChange}
                    value={person.nic}
                    required
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBInput
                    label="DOB"
                    id="form4"
                    type="date"
                    style={{ width: "250px" }}
                    name="dob"
                    onChange={handleChange}
                    value={person.dob}
                    required
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBInput
                    label="Phone Number"
                    id="form5"
                    type="text"
                    style={{ width: "250px" }}
                    name="contact_number"
                    onChange={handleChange}
                    value={person.contact_number}
                    required
                  />
                </div>

                <button
                  type="button"
                  class="btn btn-warning btn-lg ms-2"
                  onClick={() => {
                    document.querySelector(".firstPage").style.display = "none";
                    document.querySelector(".secondPage").style.display =
                      "block";
                  }}
                >
                  Next Page
                </button>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage src={bg1} fluid />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

        <MDBCard
          className="text-black m-5 secondPage"
          style={{ borderRadius: "25px", display: "none" }}
        >
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p
                  classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                  style={{ color: "red" }}
                >
                  * Do not submit forged documents *
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBInput
                    label="Address"
                    id="form6"
                    type="text"
                    style={{ width: "300px" }}
                    name="address"
                    onChange={handleChange}
                    value={person.address}
                    required
                  />
                </div>

                <div className="d-flex flex-column align-items-center mb-4">
                  <MDBInput
                    type="file"
                    class="form-control"
                    id="customFile1"
                    style={{ width: "300px" }}
                    name="nic_photo_id"
                    onChange={(e) => {
                      setPerson((prev_val) => {
                        return { ...prev_val, nic_photo_id: e.target.files[0] };
                      });
                    }}
                    required
                  />
                  <p style={{ color: "blue" }}>upload copy of NIC</p>
                </div>

                <div className="d-flex flex-column align-items-center mb-4">
                  <MDBInput
                    type="file"
                    class="form-control"
                    id="customFile2"
                    style={{ width: "300px" }}
                    name="bc_photo_id"
                    onChange={(e) => {
                      setPerson((prev_val) => {
                        return { ...prev_val, bc_photo_id: e.target.files[0] };
                      });
                    }}
                    required
                  />
                  <p style={{ color: "blue" }}>upload Birth Certificate copy</p>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBInput
                    label="email"
                    id="form7"
                    type="email"
                    style={{ width: "300px" }}
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <button
                    type="button"
                    class="btn btn-warning btn-lg ms-2"
                    onClick={() => {
                      document.querySelector(".firstPage").style.display =
                        "block";
                      document.querySelector(".secondPage").style.display =
                        "none";
                    }}
                  >
                    Prev Page
                  </button>
                  <button type="submit" class="btn btn-primary btn-lg ms-2">
                    Submit
                  </button>
                </div>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage src={bg2} fluid />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </Form>
    </MDBContainer>
  );
}

export default UsrReg;