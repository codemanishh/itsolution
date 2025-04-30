import { useState, useEffect } from 'react';
import { 
  Monitor, Keyboard, Printer, Briefcase, Paintbrush, 
  Headphones, Code, Image, Calculator, HelpCircle 
} from 'lucide-react';
import jobRolesData from '../data/jobRoles.json';

interface JobRole {
  title: string;
  icon: string;
}

const IconMap = {
  "monitor": Monitor,
  "keyboard": Keyboard,
  "printer": Printer,
  "briefcase": Briefcase,
  "paintbrush": Paintbrush,
  "headphones": Headphones,
  "code": Code,
  "image": Image,
  "calculator": Calculator,
  "helpCircle": HelpCircle
};

const JobRoles = () => {
  const [jobRoles, setJobRoles] = useState<JobRole[]>([]);

  useEffect(() => {
    setJobRoles(jobRolesData);
  }, []);

  const getIcon = (iconName: string) => {
    const Icon = IconMap[iconName as keyof typeof IconMap] || HelpCircle;
    return <Icon className="h-5 w-5" />;
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Career Opportunities After Completion</h2>
        <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">Our ADCA/DCA courses prepare you for various professional roles in the IT industry</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {jobRoles.map((role, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-4 text-center hover:shadow-md transition hover:bg-slate-100">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                {getIcon(role.icon)}
              </div>
              <h3 className="font-medium">{role.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobRoles;
