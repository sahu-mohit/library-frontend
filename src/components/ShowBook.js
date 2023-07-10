import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import RegistrationCall from "../service/RegistrationCall";
import "../style/showbook.css";
import Navbar from "./Navbar";

export default function ShowBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log("Hello");
    RegistrationCall.showbook()
      .then((response) => {
        console.log(response);
        if (response.data !== undefined || response.data !== "undefined") {
          setBooks(response.data);

          // navigate("/nav");
        } else {
          // console.log("Error");
          // document.getElementById("msg").innerHTML = "Invalid Login! Please try again!";
          // alert("Invalid Login! Please try again!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    
    <div>
      <Navbar/>
      <h2>HTML Table</h2>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author Name</th>
            <th>Cell Number</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) =>
            <tr>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.cellno}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
