import React from "react";
import Box from "@mui/material/Box";
import { Item } from "../components/ContentBox";

export function Syllabus() {
  return (
    <div>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        MERN Stack
      </h3>
      <Box
        style={{
          width: "auto",
          margin: "10px auto",
          padding: "20px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        <Item style={{ width: "400px" }}>
          <h5 style={{ padding: 5, color: "black" }}>
            <span>Module-1</span>
            <br />
            (JavaScript basics)
          </h5>
          <hr />
          <p>
            <ul style={{ listStyleType: "none" }}>
              <li>Introduction to web</li>
              <li>What is JavaScript</li>
              <li>Data types</li>
              <li>window and Document object</li>
              <li>Array and JSON iteration</li>
              <li>function and return keyword</li>
              <li>Types of function</li>
              <li>MRF- array method</li>
              <li>OOP, this, rest & spread operator</li>
              <li>Array & object destructuring</li>
              <li>Arrow functions</li>
            </ul>
          </p>
        </Item>
        <Item style={{ width: "400px" }}>
          <h5 style={{ padding: 5, color: "black" }}>
            <span>Module-2</span>
            <br />
            <span>(HTML5, CSS3, Bootstrap )</span>
          </h5>
          <hr />
          <p>
            <ul style={{ listStyleType: "none" }}>
              <li>HTML Basic tags</li>
              <li>Inline vs block element</li>
              <li>HTML forms</li>
              <br />
              <li>CSS property vs value</li>
              <li>Selector : tag vs class vs id</li>
              <li>Box model</li>
              <li>Flex</li>
              <li>Media Query</li>
              <br />
              <li> Bootstrap - Layout,grid</li>
              <li>Responsive web design</li>
            </ul>
          </p>
        </Item>
        <Item style={{ width: "400px" }}>
          <h5 style={{ padding: 5, color: "black" }}>
            <span>Module-3</span>
            <br />
            (DOM)
          </h5>
          <hr />
          <p>
            <ul style={{ listStyleType: "none" }}>
              <li>DOM Manipulation</li>
              <li>Document object vs Window object</li>
              <li>Methods in document object</li>
              <li>Methods in window object</li>
              <li>Events</li>
            </ul>
          </p>
        </Item>
        <Item style={{ width: "400px" }}>
          <h5 style={{ padding: 5, color: "black" }}>
            <span>Module-4</span>
            <br />
            (Advanced JS)
          </h5>
          <hr />
          <p>
            <ul style={{ listStyleType: "none" }}>
              <li>Callback</li>
              <li>Promise</li>
              <li>Async / Await</li>
            </ul>
          </p>
        </Item>
        <Item style={{ width: "400px" }}>
          <h5 style={{ padding: 5, color: "black" }}>
            <span>Module-5</span>
            <br />
            (Reactjs)
          </h5>
          <hr />
          <p>
            <ul style={{ listStyleType: "none" }}>
              <li>ReactJs Introduction</li>
              <li>Components, states, props, lifecycle</li>
              <li>Conditionals, hooks, router, Axios</li>
            </ul>
          </p>
        </Item>
        <Item style={{ width: "400px" }}>
          <h5 style={{ padding: 5, color: "black" }}>
            <span>Module-6</span>
            <br />
            (Database & Nodejs)
          </h5>
          <hr />
          <p>
            <ul style={{ listStyleType: "none" }}>
              <li>MySQL & MongoDB</li>
              <li>NodeJS - connecting with MongoDB</li>
              <li>Routes, Auth, JWT</li>
            </ul>
          </p>
        </Item>
      </Box>
    </div>
  );
}
