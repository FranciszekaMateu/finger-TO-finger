import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase';
import CourseCard from '../../Components/CourseCard/CourseCard';
import Searcher from '../../Components/Searcher/Searcher';
const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    supabase
      .from('cursos')
      .select('*')
      .then((response) => {
        setCourses(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='flex flex-col items-center bg-gray-100'>
     <Searcher />
    <div className="flex flex-col items-center pt-10 h-screen ">
      {courses.length > 0 && courses.map((curso) => (
        <CourseCard key={curso.id_curso} id={curso.id_curso} title={curso.nombre_curso} />
      ))}
    </div>
  </div>
  );
};
export default Home;