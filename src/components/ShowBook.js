import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationCall from "../service/RegistrationCall";
import "../style/showbook.css";
export default function ShowBook() {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();
  navigate("/nav");
  useEffect(() => {
    RegistrationCall.showbook()
      .then((response) => {
        if (response.data !== undefined || response.data !== "undefined") {
          
          setBooks(response.data);
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
      <h2>All Books</h2>
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
            <tr key={book.id}>
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
