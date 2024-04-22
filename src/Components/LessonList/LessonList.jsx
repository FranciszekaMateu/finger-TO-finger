import React from 'react';

const LessonList = ({ children }) => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {children}
      </div>
    );
  };

  export default LessonList;
  