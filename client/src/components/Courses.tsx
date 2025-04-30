import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import coursesData from '../data/courses.json';

interface CourseFeature {
  text: string;
}

interface Course {
  name: string;
  title: string;
  duration: string;
  description: string;
  color: string;
  features: CourseFeature[];
}

interface CoursesData {
  computerCourses: Course[];
  typingCourses: Course[];
}

const Courses = () => {
  const [activeTab, setActiveTab] = useState<'computer' | 'typing'>('computer');
  const [courses, setCourses] = useState<CoursesData>({ computerCourses: [], typingCourses: [] });

  useEffect(() => {
    setCourses(coursesData);
  }, []);

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Our Courses</h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive programs designed to build your skills and advance your career
        </p>
        
        {/* Course Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button 
              type="button" 
              className={`px-6 py-3 text-sm font-medium rounded-l-lg focus:z-10 focus:outline-none ${
                activeTab === 'computer' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
              }`}
              onClick={() => setActiveTab('computer')}
            >
              Computer Courses
            </button>
            <button 
              type="button" 
              className={`px-6 py-3 text-sm font-medium rounded-r-lg focus:z-10 focus:outline-none ${
                activeTab === 'typing' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
              }`}
              onClick={() => setActiveTab('typing')}
            >
              Typing Courses
            </button>
          </div>
        </div>
        
        {/* Computer Courses */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${activeTab === 'computer' ? 'block' : 'hidden'}`}>
          {courses.computerCourses.map((course, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <div className={`h-48 ${course.color} flex items-center justify-center text-white`}>
                <h3 className="text-4xl font-bold">{course.name}</h3>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold">{course.title}</h4>
                  <span className="bg-primary-100 text-primary-800 text-xs px-3 py-1 rounded-full font-medium">
                    {course.duration}
                  </span>
                </div>
                <p className="text-slate-600 mb-4">{course.description}</p>
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className={`inline-block w-full text-center ${course.color} text-white font-medium py-3 px-4 rounded-lg transition`}
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Typing Courses */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${activeTab === 'typing' ? 'block' : 'hidden'}`}>
          {courses.typingCourses.map((course, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <div className={`h-48 flex items-center justify-center text-white ${course.color}`}>
                <div className="text-center">
                  <i className="fas fa-keyboard text-4xl mb-2"></i>
                  <h3 className="text-2xl font-bold">{course.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4">{course.description}</p>
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className={`inline-block w-full text-center ${course.color.replace('bg-gradient-to-r', 'bg')} text-white font-medium py-3 px-4 rounded-lg transition`}
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
