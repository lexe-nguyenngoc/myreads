import React from "react";
import PropTypes from "prop-types";

import "./BookCard.scss";

const BookCard = ({ data }) => {
  console.log(data);
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${data.imageLinks.thumbnail}")`
            }}
          ></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{data.title}</div>
        <div className="book-authors">{data.authors.join(", ")}</div>
      </div>
    </li>
  );
};

BookCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default BookCard;
