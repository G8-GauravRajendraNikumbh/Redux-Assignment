import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.list);
  const lastUser = users[users.length - 1];
  console.log({ lastUser });
  return (
    <div>
      {lastUser ? (
        <div>
          <h1>Last User Added</h1>
          <div>First Name: {lastUser.firstName}</div>
          <div>Last Name: {lastUser.lastName}</div>
          <div>Address: {lastUser.address}</div>
          <div>Contact Number: {lastUser.contactNumber}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
