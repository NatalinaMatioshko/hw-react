import _ from "lodash";
import $ from "jquery";
import "./main.css";
import { component_3 } from "./modules/component_3";
import helloStudent from "./modules/component_2";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

const block = document.querySelector(".block");

$(".btn").on("click", () => {
  alert(helloStudent());
});

block.appendChild(component_3());
document.body.appendChild(component());
