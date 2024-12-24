import React, { useState } from "react";
import FormComponent from "../componnets/FormComponent";

const MainPage = () => {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (data) => {
    setLoading(true);
    fetch("/api/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to generate summary");
        }
        return response.json();
      })
      .then((result) => {
        setLoading(false);
        console.log("Summary:", result.summary);
        alert("Generated Summary: " + result.summary);
      })
      .catch((error) => {
        setLoading(false);
        alert(`Error: ${error.message}`); 
        console.error("Error:", error);
      });
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center font-montserrat">
      {loading && <p className="text-blue-500">Generating summary...</p>}
      <FormComponent onSubmit={handleFormSubmit} />
    </div>
  );
};

export default MainPage;
