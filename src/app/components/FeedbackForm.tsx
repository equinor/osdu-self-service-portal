"use client";
import { useState } from "react";

const FeedbackForm = () => {
  // Initial state for the form
  const initialFormData = {
    feedbackType: "comments", // Default feedback type
    description: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  // feedback and questions form
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);

    // Reset form after submission
    setFormData(initialFormData);

    /*// Send data to the server or API
    const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Form submitted successfully!");
    } else {
      console.error("Form submission failed.");
    }*/
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <h1 className="text-xl font-bold">Feedback Form</h1>

      {/* Feedback Type */}
      <fieldset>
        <legend className="block text-sm font-medium">Feedback Type</legend>
        <div className="space-y-2">
          {["comments", "suggestions", "error"].map((type) => (
            <label key={type} className="block">
              <input
                type="radio"
                name="feedbackType"
                value={type}
                checked={formData.feedbackType === type}
                onChange={() =>
                  setFormData((prev) => ({ ...prev, feedbackType: type }))
                }
                className="mr-2"
              />
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              description: value.target.value,
            }))
          }
          className="border rounded px-3 py-2 w-full"
          rows={5}
          required
        ></textarea>
      </div>

      {/* First and Last Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                firstName: value.target.value,
              }))
            }
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                lastName: value.target.value,
              }))
            }
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              email: value.target.value,
            }))
          }
          className="border rounded px-3 py-2 w-full"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
