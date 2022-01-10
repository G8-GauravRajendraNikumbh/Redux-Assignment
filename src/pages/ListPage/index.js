import React from "react";
import { useSelector } from "react-redux";

function List() {
  const users = useSelector((state) => state.user.list);
   return (
    <div>
      {users.map((user) => {
        return <div style={{ display: "flex" }}>
          <div>First Name: {user.firstName}</div>
          <div>Last Name: {user.lastName}</div>
          <div>Address: {user.address}</div>
          <div>Contact Number: {user.contactNumber}</div>
        </div>;
      })}
    </div>
  );
}

export default List;
