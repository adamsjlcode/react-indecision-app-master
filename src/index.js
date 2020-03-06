import React, { Component } from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./js/components/IndecisionApp";
import "normalize.css/normalize.css";
import "./css/style.scss";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<IndecisionApp />, wrapper) : false;
