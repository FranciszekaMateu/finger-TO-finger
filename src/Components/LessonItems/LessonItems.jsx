import React from 'react';

const LessonItem = ({ title }) => {
  return (
    <div className="border p-4 rounded mb-4">
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  );
};
export default LessonItem;