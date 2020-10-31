import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminUserChanged, adminDeleteUser } from "../../actions/admin";
import Swal from "sweetalert2";
import trashcan from "../../assets/trash-can.svg";
import toggleOff from "../../assets/toggle-off.svg";
import toggleOn from "../../assets/toggle-on.svg";

const AdminTable = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.admin);

  const handleToggle = (id, role, e) => {
    Swal.fire({
      title: "Do you want to change the role?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Yes`,
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(adminUserChanged(id, !role));
        Swal.fire("Change Done", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Canceled", "", "");
      }
    });
  };

  const handleDeleteUser = (id, e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(adminDeleteUser(id));
        Swal.fire("Deleted!", "User has been deleted.", "success");
      }
    });
  };

  const ponerFilas = () =>
    users.map(
      (user, index) =>
        user.isVerified && (
          <tr key={user._id}>
            <td>{[index + 1]}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>
              <button
                className="admin__toogle--button focus-style--button"
                type="button"
                title="toggle user-admin"
                onClick={(event) =>
                  handleToggle(user._id, user.isAdmin, event)
                }>
                <img
                  loading="lazy"
                  src={!user.isAdmin ? toggleOff : toggleOn}
                  alt="toggle"
                  className="admin__toggle--icon"
                />
              </button>
            </td>
            <td>
              <button
                className="admin__deleteUser--button focus-style--button"
                type="button"
                title="Delete users"
                onClick={(event) => handleDeleteUser(user._id, event)}>
                <img
                  loading="lazy"
                  src={trashcan}
                  alt="Delete user"
                  className="admin__delete--icon"
                />
              </button>
            </td>
          </tr>
        )
    );
  return (
    <div>
      <table className="admin__table">
        <thead>
          <tr>
            <th className="admin__th--first">Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Admin</th>
            <th className="admin__th--last">Delete</th>
          </tr>
        </thead>
        <tbody className="admin__list">{ponerFilas()}</tbody>
      </table>
    </div>
  );
};

export default AdminTable;
