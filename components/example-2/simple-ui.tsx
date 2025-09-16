/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import UnsafePreview from "./unsafe-preview";
import SafePreview from "./safe-preview";
import { validateFormData } from "./schema";

type FormData = {
  name: string;
  email: string;
  content: string;
};

export default function SimpleForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    content: "",
  });
  const [submittedContent, setSubmittedContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No validation or sanitization yet - this will be added later
    setSubmittedContent(formData.content);

    const result = validateFormData(formData);
    console.log(result);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">⚠️ Security Warning</h2>
        <p>
          This example demonstrates why validation and sanitization are critical
          for web security. Try entering HTML or script tags in the form below.
        </p>
      </div>

      <div className="border rounded-md p-6 bg-card">
        <h1 className="text-2xl font-bold mb-4">Content Submission Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name:
              </label>
              <input
                id="name"
                name="name"
                className="w-full p-2 border rounded-md"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full p-2 border rounded-md"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-1">
              Enter your content:
            </label>
            <textarea
              id="content"
              name="content"
              className="w-full min-h-[100px] p-2 border rounded-md"
              value={formData.content}
              onChange={handleChange}
              placeholder="Enter some text, HTML, or even a script tag..."
            />
            <p className="text-xs text-muted-foreground mt-1">
              Try entering:{" "}
              <code>&lt;img src="x" onerror="alert('XSS')"&gt;</code> or{" "}
              <code>&lt;h1 class="text-3xl"&gt;Hello World&lt;/h1&gt;</code>
            </p>
          </div>
          <Button type="submit">Submit Content</Button>
        </form>
      </div>

      {submittedContent && (
        <div className="border rounded-md p-6 bg-card">
          <h2 className="text-xl font-semibold mb-4">Content Preview:</h2>
          <div className="border-l-4 border-blue-500 pl-4">
            {/* <UnsafePreview content={submittedContent} /> */}

            <SafePreview content={submittedContent} />
          </div>
        </div>
      )}
    </div>
  );
}
