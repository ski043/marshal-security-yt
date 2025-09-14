"use client";

import DOMPurify from "dompurify";

interface SafePreviewProps {
  content: string;
}

export default function SafePreview({ content }: SafePreviewProps) {
  // Sanitize the HTML content using DOMPurify
  const sanitizedContent = DOMPurify.sanitize(content, {
    // Only allow specific HTML tags
    ALLOWED_TAGS: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "b",
      "i",
      "em",
      "strong",
      "a",
      "ul",
      "ol",
      "li",
    ],
    // Only allow specific attributes
    ALLOWED_ATTR: ["href", "class"],
    // Prevent usage of DOM clobbering
    SANITIZE_DOM: true,
    // Don't allow data: URIs as they can be used for XSS
    ALLOW_DATA_ATTR: false,
  });

  return (
    <div className="space-y-4">
      <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-md">
        <h3 className="text-md font-semibold text-green-700 dark:text-green-400">
          ✅ Safe Rendering
        </h3>
        <p className="text-sm">
          This component uses DOMPurify to sanitize HTML before rendering it
          with dangerouslySetInnerHTML. This approach allows safe HTML while
          preventing XSS attacks.
        </p>
      </div>

      <div className="border border-dashed border-green-300 p-4 rounded-md">
        <h4 className="text-sm font-medium mb-2">Sanitized HTML Output:</h4>
        {/* Safe usage of dangerouslySetInnerHTML with sanitized content */}
        <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
      </div>
    </div>
  );
}
