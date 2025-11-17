import { useState } from "react";
import { send } from "@emailjs/browser";

const EmailJSTest = () => {
  const [status, setStatus] = useState<string>("");
  
  const testEmailJS = async () => {
    setStatus("Testing...");
    
    try {
      // Log environment variables
      console.log("Environment Variables:", {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      });
      
      // Check if environment variables exist
      if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || 
          !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 
          !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
        throw new Error("Missing environment variables");
      }
      
      // Send test email
      const result: any = await send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: "Test User",
          from_name: "Test User",
          from_email: "test@example.com",
          company: "Test Company",
          subject: "Test Subject",
          message: "This is a test message",
          time: new Date().toLocaleString(),
          to_name: "Build2Automate Team",
          year: new Date().getFullYear(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      console.log("EmailJS Result:", result);
      setStatus(`Success! Status: ${result.status}, Text: ${result.text}`);
    } catch (error: any) {
      console.error("EmailJS Test Error:", error);
      setStatus(`Error: ${error.message || "Unknown error"}`);
    }
  };
  
  const testNetwork = async () => {
    setStatus("Testing network connectivity...");
    
    try {
      // Test a simple fetch request to see if there are network issues
      const response = await fetch('https://httpbin.org/get');
      if (response.ok) {
        setStatus("Network connectivity test passed");
      } else {
        setStatus(`Network test failed with status: ${response.status}`);
      }
    } catch (error: any) {
      console.error("Network Test Error:", error);
      setStatus(`Network Error: ${error.message || "Unknown error"}`);
    }
  };
  
  return (
    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
      <h2 className="text-xl font-bold mb-4">EmailJS Test</h2>
      <div className="flex gap-2 mb-4">
        <button 
          onClick={testEmailJS}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Test EmailJS
        </button>
        <button 
          onClick={testNetwork}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Test Network
        </button>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p>Status: {status}</p>
      </div>
    </div>
  );
};

export default EmailJSTest;