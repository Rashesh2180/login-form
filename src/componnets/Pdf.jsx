import React from "react";
const PrintPrevention = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div>
      <h1>Secure Print Demo</h1>
      <p>This content can be printed but should not be saved as a PDF.</p>
      <button onClick={handlePrint}>Print Page</button>
      {/* The print-specific CSS */}
      <style>
        {`
        @media print {
          /* Hide main content when saving as PDF */
          @media print and (color) {
            #printable-content {
              display: none !important;
            }
            body::after {
              content: "PDF saving is not allowed. Please use a physical printer.";
              font-size: 20px;
              font-weight: bold;
              color: red;
              display: block;
              text-align: center;
            }
          }
          /* Normal Print Behavior for Physical Printers */
          #printable-content {
            display: block;
          }
        }
        `}
      </style>
      {/* Content that should be printed */}
      <div id="printable-content">
        <h2>Important Document</h2>
        <p>This document should only be printed on a physical printer.</p>
      </div>
    </div>
  );
};
export default PrintPrevention;






