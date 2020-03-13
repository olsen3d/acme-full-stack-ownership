import React from "react";
import ReactDOM from "react-dom";
const { useState, useEffect } = React;

import UserThingForm from "./user-thing-form";
import UserForm from "./user-form";
import ThingForm from "./thing-form";
import Things from "./things";
import Users from "./users";
import App from "./app";

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
