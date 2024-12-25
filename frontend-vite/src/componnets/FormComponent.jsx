import { useState } from "react";

const FormComponent = ({ onSubmit, summary, loading }) => {
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
    <div className="flex w-full h-full">
      {/* Left Side - Input Section */}
      <div className="w-1/2 p-4 border-r border-gray-200">
        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <div className="flex-grow">
            <label
              htmlFor="text"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Enter text to summarize:
            </label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows="10"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Paste your text here..."
            />
          </div>

          <label
            htmlFor="length"
            className="block text-lg font-medium text-gray-700 mb-2 mt-4"
          >
            Length of summary (in characters):
          </label>
          <input
            type="number"
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter length"
          />

          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Summarize
          </button>
        </form>
      </div>

      {/* Right Side - Response Section */}
      <div className="w-1/2 p-4">
        <h2 className="text-lg font-medium text-gray-700 mb-2">Summary:</h2>
        <div className="w-full h-auto p-3 border border-gray-300 rounded-md bg-gray-50 overflow-y-auto mb-4">
          {loading ? (
            <p className="text-gray-500">{summary}</p>
          ) : (
            <p>{summary}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
