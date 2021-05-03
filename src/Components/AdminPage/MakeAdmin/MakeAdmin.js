import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="row mt-5">
      <div className="col-md-3"></div>
      <div className="col-md-6 gx-3 gy-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-center">Make Admin</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Admin Email"
            />
            <button
              className="btn btn-danger"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
};
export default MakeAdmin;
