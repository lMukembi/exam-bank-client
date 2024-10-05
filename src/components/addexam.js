import React from "react";

export const addexam = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="unit code"
          required
          placeholder="Enter unit code"
        />
        <input
          type="text"
          name="unit name"
          required
          placeholder="Enter unit name"
        />
        <input type="" required placeholder="Upload file" />

        <button>Add Exam</button>
      </form>
    </div>
  );
};
