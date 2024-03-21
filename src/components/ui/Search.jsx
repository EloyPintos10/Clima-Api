import React from "react";
import { Form } from "react-bootstrap";

const Search = ({ onSubmit, setCiudad, ciudad }) => {
  return (
    <Form onSubmit={onSubmit}>
      <input
        type="search"
        className=" form-control form-control-dark text-dark"
        placeholder="Buscar Ciudad"
        aria-label="Search"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
      />
      <button type="submit" className="btn btn-buscar">
        Buscar
      </button>
    </Form>
  );
};

export default Search;
