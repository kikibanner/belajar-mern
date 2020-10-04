import React from "react";

const Filter = (props) => {
    return(
      <div>
        Cari berdasarkan nama :
        <input
          value={props.value}
          onChange={props.handleFilterChange}
          placeholder="Masukkan nama..."/>
      </div>
    )
}

export default Filter;