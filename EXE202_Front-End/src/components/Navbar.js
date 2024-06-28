import React, { useState, useEffect, useRef } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { SidebarData } from "./SidebarData";
import "../App.css";
import { IconContext } from "react-icons";
import phone_case_icon from "../image/phone_case_icon.png";
import charm_icon from "../image/charm_image/charm_icon.png";
import charm_icon_2 from "../image/charm_image/charm_2.png";
import charm_icon_3 from "../image/charm_image/charm_3.png";
import picture_icon from "../image/picture_icon.png";
import iphone_case from "../image/blueprint of phone case (iPhone).png";
import samsung_case from "../image/SamSung.png";
import xiaomi_note8_case from "../image/Xiaomi_Note_8.png";
import Oppo from "../image/Oppo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import html2canvas from "html2canvas";

import charm_icon_1 from "../image/charm_image/charm_icon.png";
import charm_icon_17 from "../image/charm_image/charm_17.png";
import charm_icon_4 from "../image/charm_image/charm_4.png";
import charm_icon_5 from "../image/charm_image/charm_5.png";
import charm_icon_6 from "../image/charm_image/charm_6.png";
import charm_icon_7 from "../image/charm_image/charm_7.png";
import charm_icon_8 from "../image/charm_image/charm_8.png";
import charm_icon_9 from "../image/charm_image/charm_9.png";
import charm_icon_10 from "../image/charm_image/charm_10.png";
import charm_icon_11 from "../image/charm_image/charm_11.png";
import charm_icon_12 from "../image/charm_image/charm_12.png";
import charm_icon_13 from "../image/charm_image/charm_13.png";
import charm_icon_14 from "../image/charm_image/charm_14.png";
import charm_icon_15 from "../image/charm_image/charm_15.png";
import charm_icon_16 from "../image/charm_image/charm_16.png";
import charm_icon_18 from "../image/charm_image/charm_18.png";
import charm_icon_19 from "../image/charm_image/charm_19.png";
import charm_icon_20 from "../image/charm_image/charm_20.png";
import remove_icon from "../image/charm_image/remove_icon.png";
function Navbar() {
  let elementCLicked = "";
  let newX = 0,
    newY = 0,
    startX = 0,
    startY = 0;
  let idMoveCharm = 0;
  const [uploadImageId, setUploadImageId] = useState(100);
  let srcImage = "";
  let idImageCurrent = "";
  let cornerCLicked = "";
  let isCtrlPressed = false;
  let isShiftPressed = false;
  let initialMouseX = 0;
  let initialMouseY = 0;
  let initialWidth = 0;
  let initialHeight = 0;
  let initialLeft = 0;
  let initialTop = 0;
  let minMoveTop = 0;
  let minMoveRight = 0;
  let minMoveLeft = 0;
  let isClickCorner = false;
  let idTopLeft = "";
  let idTopRight = "";
  let idBottomLeft = "";
  let idBottomRight = "";
  const [sidebar, setSidebar] = useState(false);
  const [charm, setCharm] = useState(false);
  const [phoneCase, setPhoneCase] = useState(false);
  let [idDiVCharm, setidDivCharm] = useState(0);
  let [rotateValue, setRotateValue] = useState(0);
  const [value, setValue] = useState("");
  const [test, setTest] = useState("");
  const [ischarm, setIsCharm] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const showSidebar = (e) => {
    let menuBar = document.querySelector(".menu-bars");
    if (true) {
      console.log(menuBar.color);
    }

    setSidebar(!sidebar);
  };
  const showCharm = () => setCharm(!charm);
  const showPhoneCase = () => setPhoneCase(!phoneCase);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  let checkTypePhoneCase = "Iphone";
  const displayPhoneCaseDes = (e) => {
    console.log(idDiVCharm + "    This is IDDIVCHARM");
    if (e.target.id === "Iphone") {
      let image = document.querySelector(".phone_case_sample");
      image.src = iphone_case;
      image.style.width = "300px";
    } else if (e.target.id === "SamSung") {
      let image = document.querySelector(".phone_case_sample");
      image.style.width = "280px";
      image.src = samsung_case;
    } else if (e.target.id === "Xiaomi") {
      let image = document.querySelector(".phone_case_sample");
      image.style.width = "280px";
      image.src = xiaomi_note8_case;
    } else {
      let image = document.querySelector(".phone_case_sample");
      image.style.width = "280px";
      image.src = Oppo;
    }
  };

  const createCharm = (e) => {
    setidDivCharm((idDiVCharm += 1));
    let charm = document.createElement("img");
    charm.src = e.target.src;
    charm.id = e.target.id + "_design";
    charm.style.width = "60px";
    charm.style.height = "65px";
    charm.className = "charm";
    let div_charm = document.createElement("div");
    div_charm.id = idDiVCharm;
    div_charm.style.position = "fixed";
    div_charm.appendChild(charm);
    document.body.appendChild(div_charm);
    charm.addEventListener("mousedown", function (e) {
      // setIdMoveCharm(charm.parentElement.id);
      console.log(e);
      idMoveCharm = +charm.parentElement.id;
      console.log(
        typeof idMoveCharm +
          "    This is idMoveCharm    " +
          typeof charm.parentElement.id
      );
      if (idMoveCharm !== 0) {
        console.log("OKKKKKKKKk");
        const card = document.getElementById(idMoveCharm);
        card.addEventListener("mousedown", mousedown);

        function mousedown(e) {
          e.preventDefault();
          // document.addEventListener("keydown", function (e) {
          //   if (e.key === "Delete") {
          //     card.remove();
          //   }
          // });
          console.log(e.target.id);
          startX = e.clientX;
          startY = e.clientY;
          document.addEventListener("mousemove", mouseMove);
          document.addEventListener("mouseup", mouseUp);
        }

        function mouseMove(e) {
          newX = startX - e.clientX;
          newY = startY - e.clientY;
          startX = e.clientX;
          startY = e.clientY;

          card.style.top = card.offsetTop - newY + "px";
          card.style.left = card.offsetLeft - newX + "px";
          console.log(typeof +card.style.top.replace("px", ""));
          let topTest = +card.style.top.replace("px", "") + "px";
          let leftTest = +card.style.left.replace("px", "") + "px";
        }
        let deleteIDCharm = null;
        function setNewIDCharm(newID) {
          deleteIDCharm = newID;
        }
        function mouseUp(e) {
          console.log("Mouse UPPPPPPPPPPPPP");
          document.removeEventListener("mousemove", mouseMove);
          console.log(e.target.parentElement.id);
          setTest(e.target.parentElement.id);
          console.log("This is setTest state:  " + test);
          setIsCharm(true);
          setNewIDCharm(e.target.parentElement.id);
        }
        document.addEventListener("keydown", function (e) {
          if (e.key === "Delete") {
            document.getElementById(deleteIDCharm).remove();
          }
        });
      }
    });
    console.log(idMoveCharm + "       Part 1");
  };
  useEffect(() => {
    if (test) {
      setTest(test);
      console.log(test + "         This is stateIdMoveCharm !!!!!!!!");
    }
  }, [test]);

  const imageRotateRef = useRef(null);
  useEffect(() => {
    const handleInput = (event) => {
      const rotate = event.target.value;
      console.log(test + " Day la test");
      let tempId = test;
      console.log(tempId + "Day la temp ID");
      if (!test.includes("test")) {
        console.log(test);
        document.getElementById(
          test
        ).firstChild.style.transform = `rotate(${rotate}deg)`;
      } else {
        document.getElementById(test).style.transform = `rotate(${rotate}deg)`;
        setRotateValue(rotate);
      }
      document.getElementById("rotateValue").innerText = rotate + "°";
    };

    const element = imageRotateRef.current;
    if (element) {
      element.addEventListener("input", handleInput);
    }
    return () => {
      if (element) {
        element.removeEventListener("input", handleInput);
      }
    };
  }, [test]);

  const [testImage, setImage] = useState("");
  let resizableElement = "";
  function uploadedImage() {
    document
      .getElementById("imageUpload")
      .addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const imgElement = document.getElementById("uploadedImage");
            imgElement.src = e.target.result;
            setImage(e.target.result);
            imgElement.style.width = "100px";
            imgElement.style.height = "100px";
          };
          reader.readAsDataURL(file);
        }
      });
  }
  let idDivDesignMove = "";
  function adjust_Image() {
    setUploadImageId(uploadImageId + 1);
    let imageUpload = document.createElement("img");
    imageUpload.id = uploadImageId;
    imageUpload.style.position = "fixed";
    imageUpload.className = "imageUpload";
    imageUpload.src = testImage;
    let div_design = document.createElement("div");
    div_design.className = "design";
    div_design.id = "test" + uploadImageId.toString();
    let div_corner = document.createElement("div");
    div_corner.id = "corners";
    let div_topRight = document.createElement("div");
    let div_topLeft = document.createElement("div");
    let div_bottomRight = document.createElement("div");
    let div_bottomLeft = document.createElement("div");
    div_topRight.className =
      div_topLeft.className =
      div_bottomRight.className =
      div_bottomLeft.className =
        "resizer";

    div_topRight.id = "top-right" + uploadImageId.toString();
    div_topRight.style.top = "-5px";
    div_topRight.style.right = "-5px";
    div_topRight.style.cursor = "grab";

    div_topLeft.id = "top-left" + uploadImageId.toString();
    div_topLeft.style.top = "-5px";
    div_topLeft.style.left = "-5px";
    div_topLeft.style.cursor = "grab";

    div_bottomRight.id = "bottom-right" + uploadImageId.toString();
    div_bottomRight.style.bottom = "-5px";
    div_bottomRight.style.right = "-5px";
    div_bottomRight.style.cursor = "grab";

    div_bottomLeft.id = "bottom-left" + uploadImageId.toString();
    div_bottomLeft.style.bottom = "-5px";
    div_bottomLeft.style.left = "-5px";
    div_bottomLeft.style.cursor = "grab";

    div_corner.appendChild(div_bottomLeft);
    div_corner.appendChild(div_bottomRight);
    div_corner.appendChild(div_topLeft);
    div_corner.appendChild(div_topRight);
    div_design.appendChild(imageUpload);
    div_design.appendChild(div_corner);

    document.body.appendChild(div_design);
    imageUpload.addEventListener("mousedown", function (e) {
      idImageCurrent = e.target.id;
      console.log(idImageCurrent + " Day là id của image current");
      idDivDesignMove = e.target.parentElement.id;
      idBottomLeft = document
        .getElementById(idDivDesignMove)
        .querySelector("#corners").firstChild.id;
      idBottomRight = document
        .getElementById(idDivDesignMove)
        .querySelector("#corners").firstChild.nextSibling.id;
      idTopLeft = document
        .getElementById(idDivDesignMove)
        .querySelector("#corners").firstChild.nextSibling.nextSibling.id;
      idTopRight = document
        .getElementById(idDivDesignMove)
        .querySelector("#corners").firstChild.nextSibling.nextSibling
        .nextSibling.id;

      console.log(
        "bottom left    " +
          idBottomLeft +
          "    bottom right     " +
          idBottomRight +
          "      top left     " +
          idTopLeft +
          "     top right     " +
          idTopRight
      );
      resizableElement = document.getElementById(idDivDesignMove);
      //Move Image (Start)
      const card = document.getElementById(idDivDesignMove);
      card.addEventListener("mousedown", mousedown);

      function mousedown(e) {
        e.preventDefault();
        if (isClickCorner == true) {
          return;
        }
        startX = e.clientX;
        startY = e.clientY;
        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseup", mouseUp);
      }

      function mouseMove(e) {
        newX = startX - e.clientX;
        newY = startY - e.clientY;
        startX = e.clientX;
        startY = e.clientY;

        card.style.top = card.offsetTop - newY + "px";
        card.style.left = card.offsetLeft - newX + "px";
        console.log(typeof +card.style.top.replace("px", ""));
        let topTest = +card.style.top.replace("px", "") + "px";
        let leftTest = +card.style.left.replace("px", "") + "px";
      }
      let deleteID = null;
      function setNewID(newID) {
        deleteID = newID;
      }
      function mouseUp(e) {
        console.log("Mouse UPPPPPPPPPPPPP");
        document.removeEventListener("mousemove", mouseMove);
        console.log(e.target.parentElement.id);
        setNewID(e.target.parentElement.id);
      }
      document.addEventListener("keydown", function (e) {
        if (e.key === "Delete") {
          document.getElementById(deleteID).remove();
        }
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Control") {
          isCtrlPressed = true;
        }
        if (e.key === "Shift") {
          isShiftPressed = true;
        }
        if (isCtrlPressed && isShiftPressed) {
          initialHeight = initialWidth;
        }
      });

      document.addEventListener("keyup", (e) => {
        if (e.key === "Control") {
          isCtrlPressed = false;
        }
        if (e.key === "Shift") {
          isShiftPressed = false;
        }
      });

      document.getElementById(idTopLeft).addEventListener("mousedown", (e) => {
        isClickCorner = true;
        cornerCLicked = "topLeft";
        initialMouseX = e.clientX;
        initialMouseY = e.clientY;
        initialWidth = resizableElement.offsetWidth;
        initialHeight = resizableElement.offsetHeight;
        initialLeft = resizableElement.offsetLeft;
        initialTop = resizableElement.offsetTop;
        minMoveTop = initialTop + initialHeight;
        minMoveRight = initialLeft + initialWidth;

        e.target.style.backgroundColor = "blue";
        document.addEventListener("mousemove", mouseMove_Design);
        document.addEventListener("mouseup", mouseUp_Design);
      });

      document.getElementById(idTopRight).addEventListener("mousedown", (e) => {
        cornerCLicked = "topRight";
        isClickCorner = true;
        initialMouseX = e.clientX;
        initialMouseY = e.clientY;
        initialWidth = resizableElement.offsetWidth;
        initialHeight = resizableElement.offsetHeight;
        initialLeft = resizableElement.offsetLeft;
        initialTop = resizableElement.offsetTop;
        minMoveTop = initialTop + initialHeight;
        e.target.style.backgroundColor = "blue";
        document.addEventListener("mousemove", mouseMove_Design);
        document.addEventListener("mouseup", mouseUp_Design);
      });

      document
        .getElementById(idBottomLeft)
        .addEventListener("mousedown", (e) => {
          cornerCLicked = "bottomLeft";
          isClickCorner = true;
          initialMouseX = e.clientX;
          initialMouseY = e.clientY;
          initialWidth = resizableElement.offsetWidth;
          initialHeight = resizableElement.offsetHeight;
          initialLeft = resizableElement.offsetLeft;
          initialTop = resizableElement.offsetTop;
          minMoveTop = initialTop + initialWidth;
          minMoveRight = initialLeft + initialWidth;
          e.target.style.backgroundColor = "blue";
          document.addEventListener("mousemove", mouseMove_Design);
          document.addEventListener("mouseup", mouseUp_Design);
        });

      document
        .getElementById(idBottomRight)
        .addEventListener("mousedown", (e) => {
          cornerCLicked = "bottomRight";
          isClickCorner = true;
          initialMouseX = e.clientX;
          initialMouseY = e.clientY;
          initialWidth = resizableElement.offsetWidth;
          initialHeight = resizableElement.offsetHeight;
          initialLeft = resizableElement.offsetLeft;
          initialTop = resizableElement.offsetTop;
          minMoveTop = initialTop + initialWidth;
          e.target.style.backgroundColor = "blue";
          document.addEventListener("mousemove", mouseMove_Design);
          document.addEventListener("mouseup", mouseUp_Design);
        });

      function mouseMove_Design(e) {
        const currentMouseX = e.clientX;
        const currentMouseY = e.clientY;
        if (cornerCLicked === "topLeft") {
          const deltaX = initialMouseX - currentMouseX;
          const deltaY = initialMouseY - currentMouseY;
          let newWidth = initialWidth + deltaX;
          let newHeight = initialHeight + deltaY;
          const newTop = initialTop - deltaY;
          const newLeft = initialLeft - deltaX;
          if (isCtrlPressed && isShiftPressed) {
            newHeight = newWidth;
          }
          if (newTop >= minMoveTop || newLeft >= minMoveRight) {
            console.log(newTop + "This is new top");
            console.log(newLeft + "This is newLeft");
            console.log("Cannot go more!!!!!!!!!");
          } else {
            resizableElement.style.width = newWidth + "px";
            resizableElement.style.height = newHeight + "px";
            resizableElement.style.left = newLeft + "px";
            resizableElement.style.top = newTop + "px";
            console.log(idImageCurrent + "        id image current");
            document.getElementById(idImageCurrent).style.width =
              newWidth + "px";
            document.getElementById(idImageCurrent).style.height =
              newHeight + "px";
          }
        }
        if (cornerCLicked === "topRight") {
          const deltaX = currentMouseX - initialMouseX;
          const deltaY = initialMouseY - currentMouseY;
          let newWidth = initialWidth + deltaX;
          let newHeight = initialHeight + deltaY;
          const newTop = initialTop - deltaY;
          const newRight = deltaX - initialLeft;

          if (isCtrlPressed && isShiftPressed) {
            newHeight = newWidth;
          }
          if (newTop >= minMoveTop) {
            console.log(newTop + "This is new top");
            console.log("Cannot go more!!!!!!!!!");
          } else {
            resizableElement.style.width = newWidth + "px";
            resizableElement.style.height = newHeight + "px";
            resizableElement.style.right = newRight + "px";
            resizableElement.style.top = newTop + "px";
            document.getElementById(idImageCurrent).style.width =
              newWidth + "px";
            document.getElementById(idImageCurrent).style.height =
              newHeight + "px";
          }
        }
        if (cornerCLicked === "bottomLeft") {
          const deltaX = initialMouseX - currentMouseX;
          const deltaY = currentMouseY - initialMouseY;
          let newWidth = initialWidth + deltaX;
          let newHeight = initialHeight + deltaY;
          const newTop = initialTop;
          const newLeft = initialLeft - deltaX;

          if (isCtrlPressed && isShiftPressed) {
            newHeight = newWidth;
          }
          if (newLeft >= minMoveRight) {
            console.log(newTop + "This is new top");
            console.log("Cannot go more!!!!!!!!!");
          } else {
            resizableElement.style.width = newWidth + "px";
            resizableElement.style.height = newHeight + "px";
            resizableElement.style.left = newLeft + "px";
            resizableElement.style.top = newTop + "px";
            document.getElementById(idImageCurrent).style.width =
              newWidth + "px";
            document.getElementById(idImageCurrent).style.height =
              newHeight + "px";
          }
        }
        if (cornerCLicked === "bottomRight") {
          const deltaX = currentMouseX - initialMouseX;
          const deltaY = currentMouseY - initialMouseY;
          let newWidth = initialWidth + deltaX;
          let newHeight = initialHeight + deltaY;
          const newTop = initialTop;
          const newLeft = initialLeft;

          if (isCtrlPressed && isShiftPressed) {
            newHeight = newWidth;
          }
          if (newTop >= minMoveTop) {
            console.log(newTop + "This is new top");
            console.log("Cannot go more!!!!!!!!!");
          } else {
            // Set new width and left position
            resizableElement.style.width = newWidth + "px";
            resizableElement.style.height = newHeight + "px";
            resizableElement.style.left = newLeft + "px";
            resizableElement.style.top = newTop + "px";
            document.getElementById(idImageCurrent).style.width =
              newWidth + "px";
            document.getElementById(idImageCurrent).style.height =
              newHeight + "px";
          }
        }
      }

      function mouseUp_Design(e) {
        document.removeEventListener("mousemove", mouseMove_Design);
        document
          // .querySelector(".top-left")
          .getElementById(idTopLeft)
          .style.removeProperty("background-color");
        document
          .getElementById(idTopRight)
          .style.removeProperty("background-color");
        document
          .getElementById(idBottomLeft)
          .style.removeProperty("background-color");
        document
          .getElementById(idBottomRight)
          .style.removeProperty("background-color");
        isClickCorner = false;
      }
      //Design(End)
    });
  }
  function DownloadImage() {
    document.getElementById("download").addEventListener("click", function () {
      this.classList.add("hidden");
      html2canvas(document.documentElement, {
        scale: window.devicePixelRatio,
        logging: true,
        useCORS: true,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      }).then((canvas) => {
        var image = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        var link = document.createElement("a");
        link.download = "screenshot.png";
        link.href = image;
        link.click();
        this.classList.remove("hidden");
      });
    });
  }
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <button id="download" onClick={DownloadImage}>
            Download Image
          </button>
        </div>
        <img src={iphone_case} className="phone_case_sample" />
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle" onClick={showSidebar}>
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li
              className="nav-text "
              onClick={showPhoneCase}
              style={{ cursor: "pointer" }}
            >
              <img
                style={{ width: "35px", height: "35px" }}
                src={phone_case_icon}
                alt="phone case icon"
              />
              <span>Phone Case</span>
            </li>
            {phoneCase ? (
              <li>
                <button
                  id="Iphone"
                  onClick={displayPhoneCaseDes}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: 0,
                    marginBottom: "10px",
                    marginLeft: "35px",
                    borderBottom: "1px solid black",
                    cursor: "pointer",
                  }}
                >
                  Iphone Phone Case Sample
                </button>
                <button
                  id="SamSung"
                  onClick={displayPhoneCaseDes}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: 0,
                    marginBottom: "10px",
                    marginLeft: "35px",
                    cursor: "pointer",
                    borderBottom: "1px solid black",
                  }}
                >
                  SamSung Phone Case Sample
                </button>
                <button
                  id="Xiaomi"
                  onClick={displayPhoneCaseDes}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: 0,
                    marginBottom: "10px",
                    marginLeft: "35px",
                    cursor: "pointer",
                    borderBottom: "1px solid black",
                  }}
                >
                  Xiaomi Phone Case Sample
                </button>
                <button
                  id="Oppo"
                  onClick={displayPhoneCaseDes}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: 0,
                    marginBottom: "10px",
                    marginLeft: "35px",
                    cursor: "pointer",
                    borderBottom: "1px solid black",
                  }}
                >
                  Oppo Phone Case Sample
                </button>
              </li>
            ) : (
              ""
            )}

            <li
              className="nav-text"
              onClick={showCharm}
              style={{ cursor: "pointer" }}
            >
              <img
                style={{ width: "30px", height: "40px" }}
                src={charm_icon}
                alt="charm icon"
              />
              <span>Charms</span>
            </li>
            {charm ? (
              <li style={{ marginRight: "25px" }}>
                <Slider {...sliderSettings}>
                  <div>
                    <img
                      id="charm_2"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "56px", height: "auto" }}
                      src={charm_icon_2}
                      alt="phone case icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_1"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "65px", height: "auto" }}
                      src={charm_icon}
                      alt="charm icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_3"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_3}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_4"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_4}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_5"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_5}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_6"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_6}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_7"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_7}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_8"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_8}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_9"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_9}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_10"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_10}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_11"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_11}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_12"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_12}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_13"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_13}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_14"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_14}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_15"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_15}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_16"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_16}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_17"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_17}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_18"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_18}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_19"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_19}
                      alt="picture_icon"
                    />
                  </div>
                  <div>
                    <img
                      id="charm_20"
                      onClick={(e) => createCharm(e)}
                      style={{ width: "60px", height: "auto" }}
                      src={charm_icon_20}
                      alt="picture_icon"
                    />
                  </div>
                </Slider>
              </li>
            ) : (
              ""
            )}

            <li className="nav-text">
              <img
                style={{ width: "30px", height: "40px" }}
                src={picture_icon}
                alt="picture_icon"
              />
              <span>Image Uploaded</span>
            </li>
            <li>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onClick={uploadedImage}
              />{" "}
              <br />
              <br />
              <div id="imageContainer" onClick={adjust_Image}>
                <img id="uploadedImage" src="" alt="Uploaded Image" />
              </div>
            </li>
            <li>
              <label htmlFor="imageRotate">Rotate:</label>
              <input
                ref={imageRotateRef}
                type="range"
                id="imageRotate"
                min="0"
                max="360"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <span id="rotateValue">0°</span>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;