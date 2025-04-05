import React, { useState } from "react";
import "./ContacForm.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowDownLong } from "react-icons/fa6";

import main_img from "../../assets/contact.svg";

const ContacForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [text, settext] = useState("");

  const submit = (event) => {
    const data = document.getElementById("data");
    event.preventDefault();
    if (data) {
      data.style.display = "block";
    }
    setname(event.target[0].value);
    setemail(event.target[1].value);
    settext(event.target[2].value);
    console.log({
      name: name,
      email: email,
      text: text,
    });
  };
  return (
    <section className="container1">
      <div className="contact_form">
        <div className="top_btn">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize={"24px"} />}
          />
          <Button text="VIA CALL" icon={<IoCall fontSize={"24px"} />} />
        </div>
        <Button
          isOutline={true}
          text="VIA CALL"
          icon={<MdOutlineMailOutline fontSize={"24px"} />}
        />

        <form onSubmit={submit}>
          <div className="form_control">
            <label htmlFor="">Name</label>
            <input type="text" name="name" />
          </div>

          <div className="form_control">
            <label htmlFor="">Email</label>
            <input type="email" name="email" />
          </div>

          <div className="form_control">
            <label htmlFor="">Message</label>
            <textarea name="text" rows={8}></textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="Submit" type="submit"></Button>
          </div>

          <div id="data" style={{ display: "none" }}>
            {" "}
            Your data: <FaArrowDownLong />
            <br /> <br /> {"Name: " + name} <br /> <br />{"Email: " + email}
            <br /><br />
            {"Message :" + text}
          </div>
        </form>
      </div>
      <div className="image_container">
        <img src={main_img} alt="" className="img" height={"450px"}/>
      </div>
    </section>
  );
};

export default ContacForm;
