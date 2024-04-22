import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../utils/supabase';
const CourseView = () => {
    const { courseId, subCourseId } = useParams();
    const [course, setCourse] = useState(null);
    const [subCourse, setSubCourse] = useState(null);
    const [lessons, setLessons] = useState([]);
    const [currentLesson, setCurrentLesson] = useState(null);
    useEffect(() => {
        // Obtener el curso
        supabase
            .from('cursos')
            .select('*')
            .eq('id_curso', courseId)
            .then((response) => {
                if (response.data.length > 0) {
                    setCourse(response.data[0]);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [courseId]);

    useEffect(() => {
        if (!subCourseId && course) {
            supabase
                .from('subcursos')
                .select('*')
                .eq('id_curso', courseId)
                .then((response) => {
                    if (response.data.length > 0) {
                        setSubCourse(response.data[0]);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [subCourseId, course]);
    useEffect(() => {
        if (!lessons && subCourse) {
            supabase
                .from('videos')
                .select('*')
                .eq('id_subcurso', subCourseId)
                .then((response) => {
                    if (response.data.length > 0) {
                        set(response.data);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [lessons, subCourse]);
    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1 flex flex-col">
                <div>
                    <h2 className="text-lg font-bold">Cursos</h2>
                    {subCourse && (
                        <p>{subCourse.nombre_subcurso}</p>
                    )}
                </div>
                <li>

                </li>
            </div>
            <div className="col-span-3">
                
            </div>
        </div>
    );
}

export default CourseView;