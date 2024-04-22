// components/Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';
const CourseCard = ({ title, description, id }) => {
  return (
    <div className="max-w-xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center p-5">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
      <Link to={`cursos/${id}`} class="inline-flex items-center px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Mirar
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </Link>
    </div>
  );
};

export default CourseCard;
