import React from 'react';
import resume from '../static/pdf/resume.pdf';

const Resume = () => {
  return (
    <div className="page border-0 scrollbar py-0 overflow-y-hidden">
      {/* Embed the PDF, set it to full screen width and height with responsive classes */}
      <div className="w-full h-[90vh] md:h-screen flex justify-center items-center">
        <embed
          src={resume}
          width="100%"
          height="100%" 
          type="application/pdf"
          className="mb-4"
        />
      </div>
    </div>
  );
};

export default Resume;