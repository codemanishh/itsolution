import Hero from '@/components/Hero';
import JobRoles from '@/components/JobRoles';
import Hoardings from '@/components/Hoardings';
import Courses from '@/components/Courses';
import Campus from '@/components/Campus';
import CertificateValidator from '@/components/CertificateValidator';
import Contact from '@/components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <JobRoles />
      <Hoardings />
      <Courses />
      <Campus />
      <CertificateValidator />
      <Contact />
    </main>
  );
};

export default Home;
