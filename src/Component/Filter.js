import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter">
      <div class="filter__select">
        <select>
          <option value="0">Country</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Hai</option>
        </select>
      </div>
      <br />
      <div class="filter__select">
        <select>
          <option value="0">Cities</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Hai</option>
        </select>
      </div>
      <br />
      <div class="filter__select">
        <select>
          <option value="0">Tour Dates</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Hai</option>
        </select>
      </div>
      <br />
      <div class="filter__select">
        <select>
          <option value="0">Room</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Hai</option>
        </select>
      </div>
      <br />
      <div class="filter__select">
        <select>
          <option value="0">Adults</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Hai</option>
        </select>
      </div>
      <br />
      <div class="filter__select">
        <select>
          <option value="0">Children</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Hai</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
