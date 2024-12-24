import React, { useState } from "react";

const FormComponent = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [length, setLength] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      alert("Text cannot be empty!");
      return;
    }
    if (!length || isNaN(length) || length <= 0) {
      alert("Please provide a valid summary length!");
      return;
    }

    onSubmit({ text, length });
    setText("");
    setLength("");
  };

  return (
    <div className="font-montserrat flex justify-center items-center min-h-screen bg-gray-50 w-full">
      <div className="w-2/4 p-6 shadow-lg rounded-lg bg-gray-100">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div>
            <label htmlFor="text" className="block text-lg font-medium text-gray-700">
              Enter Text to Summarize:
            </label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows="8"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              placeholder="Paste your text here..."
            />
          </div>

          <div>
            <label htmlFor="length" className="block text-lg font-medium text-gray-700">
              Desired Summary Length (words):
            </label>
            <input
              id="length"
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              placeholder="Enter number of words"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-700 text-white font-bold py-3 rounded-md transition duration-300"
          >
            Summarize
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
