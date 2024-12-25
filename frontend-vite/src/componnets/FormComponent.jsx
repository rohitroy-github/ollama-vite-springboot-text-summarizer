import { useState, useEffect } from "react";

const FormComponent = ({ onSubmit, summary, loading }) => {
  const [text, setText] = useState("");
  const [length, setLength] = useState("");
  const [typedSummary, setTypedSummary] = useState(""); // State for typed summary
  const [index, setIndex] = useState(0); // Current index of the summary to display
  const typingSpeed = 100; // Speed in milliseconds for each character

  // Effect to handle the typewriter effect
  useEffect(() => {
    if (loading && summary) {
      const interval = setInterval(() => {
        setTypedSummary((prev) => prev + summary[index]); // Add one character at a time
        setIndex((prevIndex) => prevIndex + 1); // Move to the next character
      }, typingSpeed);

      // Clear interval once all characters are typed
      if (index === summary.length) {
        clearInterval(interval);
      }

      return () => clearInterval(interval); // Cleanup on unmount or when loading changes
    }
  }, [loading, index, summary]); // Re-run effect when loading, index, or summary changes

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
    setTypedSummary(""); // Reset the typed summary before starting a new one
    setIndex(0);
  };

  return (
    <div className="flex w-full h-full text-base">
      {/* Left Side - Input Section */}
      <div className="w-1/2 p-4 border-r border-gray-200">
        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <div className="flex-grow">
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows="13"
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter text to summarize"
            />
          </div>

          <input
            type="text"
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mt-4"
            placeholder="Length of summary (in characters)"
          />

          <button
            type="submit"
            className="mt-4 bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-md"
          >
            Summarize
          </button>
        </form>
      </div>

      {/* Right Side - Response Section */}
      <div className="w-1/2 p-4">
        <div className="flex w-full min-h-[500px] p-4 border border-gray-300 rounded-md bg-gray-50 overflow-y-hidden text-base">
          {loading ? (
            <p className="text-gray-500">{typedSummary}</p>
          ) : summary ? (
            <p>{summary}</p> 
          ) : (
            <p className="text-gray-400">Generate your summary</p> 
          )}
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
