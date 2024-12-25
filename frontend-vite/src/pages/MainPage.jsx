import React, { useState } from "react";
import FormComponent from "../componnets/FormComponent";

const MainPage = () => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (data) => {
    setLoading(true);
    setSummary("Generating summary...");

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
        setSummary(result.summary);
      })
      .catch((error) => {
        setLoading(false);
        setSummary(`Error: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 font-montserrat">
      <div className="w-2/3 h-1/2 bg-white shadow-lg rounded-lg p-6">
        <FormComponent onSubmit={handleFormSubmit} summary={summary} loading={loading} />
      </div>
    </div>
  );
};

export default MainPage;
