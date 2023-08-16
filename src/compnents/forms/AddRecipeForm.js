import React, { useState } from "react";

const AddRecipeForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [exp, setExp] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log({
          name:name,
          image:image,
          exp:exp
      });
      setName("");
      setImage("");
      setExp("")
  };

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          recipe name:
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="image" className="form-label">
          recipe image:
        </label>
        <input
          type="file"
          className="form-file-input"
          name="image"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="explinaition" className="form-label">
          recipe image:
        </label>
        <textarea
          type="file"
          className="form-textarea"
          name="explinaition"
          id="explinaition"
          value={exp}
          onChange={(e) => setExp(e.target.value)}
        />
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddRecipeForm;
