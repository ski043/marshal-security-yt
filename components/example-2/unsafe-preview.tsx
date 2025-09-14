"use client";

interface UnsafePreviewProps {
  content: string;
}

export default function UnsafePreview({ content }: UnsafePreviewProps) {
  return (
    <div className="space-y-4">
      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-md">
        <h3 className="text-md font-semibold text-red-700 dark:text-red-400">⚠️ Unsafe Rendering</h3>
        <p className="text-sm">
          This component uses dangerouslySetInnerHTML which can lead to XSS attacks.
          Never use this in production without proper sanitization!
        </p>
      </div>
      
      <div className="border border-dashed border-red-300 p-4 rounded-md">
        <h4 className="text-sm font-medium mb-2">Raw HTML Output:</h4>
        {/* SECURITY RISK: Using dangerouslySetInnerHTML without sanitization */}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      
      <div className="border border-dashed border-green-300 p-4 rounded-md">
        <h4 className="text-sm font-medium mb-2">Safe Text Output:</h4>
        {/* This is safe - React escapes the content automatically */}
        <div>{content}</div>
      </div>
    </div>
  );
}
