import { useState, useEffect } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import certificatesData from '../data/certificates.json';

interface Certificate {
  certificateNumber: string;
  name: string;
  course: string;
  percentage: string;
}

const CertificateValidator = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [certificateNumber, setCertificateNumber] = useState('');
  const [searchResult, setSearchResult] = useState<{
    found: boolean;
    certificate?: Certificate;
  } | null>(null);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    setCertificates(certificatesData);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!certificateNumber.trim()) return;
    
    const foundCertificate = certificates.find(
      cert => cert.certificateNumber.toLowerCase() === certificateNumber.toLowerCase()
    );
    
    setSearchResult({
      found: !!foundCertificate,
      certificate: foundCertificate
    });
    
    setIsSearched(true);
  };

  return (
    <section id="certificate" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Certificate Validation</h2>
          <p className="text-slate-600 text-center mb-8">
            Verify the authenticity of your certificate by entering the certificate number
          </p>
          
          <div className="bg-black rounded-xl shadow-md p-6 md:p-8">
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="mb-6">
                <label htmlFor="certificateNumber" className="block text-sm font-medium text-slate-700 mb-2">
                  Certificate Number
                </label>
                <Input
                  type="text"
                  id="certificateNumber"
                  placeholder="e.g. ITS20241001"
                  value={certificateNumber}
                  onChange={(e) => setCertificateNumber(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <p className="mt-2 text-xs text-slate-500">
                  Enter the certificate number printed on your certificate document
                </p>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition"
              >
                Verify Certificate
              </Button>
            </form>
            
            {/* Certificate Result */}
            {isSearched && (
              <div className="mt-6">
                {searchResult?.found ? (
                  <div>
                    {/* Valid Certificate Result */}
                    <div className="border border-green-200 rounded-lg bg-green-50 p-4 mb-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-green-800">Valid Certificate</h3>
                          <div className="mt-2 text-sm text-green-700">
                            <p>This certificate has been verified in our records.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Certificate Details */}
                    <div>
                      <h4 className="font-medium text-lg mb-4 text-slate-800">Certificate Details</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-slate-500 mb-1">Student Name</p>
                          <p className="font-medium">{searchResult.certificate?.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 mb-1">Certificate Number</p>
                          <p className="font-medium">{searchResult.certificate?.certificateNumber}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 mb-1">Course</p>
                          <p className="font-medium">{searchResult.certificate?.course}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 mb-1">Percentage</p>
                          <p className="font-medium">{searchResult.certificate?.percentage}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Invalid Certificate Result */
                  <div className="border border-red-200 rounded-lg bg-red-50 p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <XCircle className="h-5 w-5 text-red-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">Invalid Certificate</h3>
                        <div className="mt-2 text-sm text-red-700">
                          <p>
                            We couldn't find this certificate in our records. Please check the number 
                            and try again, or contact our office for assistance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateValidator;
