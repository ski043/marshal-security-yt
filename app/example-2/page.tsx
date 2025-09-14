import SimpleForm from "@/components/example-2/simple-ui";

export const metadata = {
  title: "Example 2: Form Validation & Security",
  description:
    "Demonstrating form validation, sanitization, and the risks of dangerouslySetInnerHTML",
};

export default function Example2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Form Security Example</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This example demonstrates the importance of input validation and
            sanitization, as well as the risks of using dangerouslySetInnerHTML
            in React applications.
          </p>
        </div>

        <div className="bg-card shadow-lg rounded-lg py-10 border overflow-hidden">
          <SimpleForm />
        </div>

        <div className="mt-12 p-6 bg-card shadow-sm rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">
            Security Best Practices:
          </h2>
          <ul className="list-disc pl-5 space-y-3">
            <li>Always validate user input on both client and server sides</li>
            <li>Sanitize HTML content before rendering it</li>
            <li>Avoid using dangerouslySetInnerHTML whenever possible</li>
            <li>
              Use libraries like DOMPurify when you need to render
              user-generated HTML
            </li>
            <li>Implement Content Security Policy (CSP) headers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
