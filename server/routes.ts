import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to get all certificates
  app.get('/api/certificates', async (req, res) => {
    try {
      const certificates = await storage.getAllCertificates();
      res.json(certificates);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching certificates', error: String(error) });
    }
  });

  // API route to get a certificate by number
  app.get('/api/certificates/:number', async (req, res) => {
    try {
      const certificate = await storage.getCertificateByNumber(req.params.number);
      if (!certificate) {
        return res.status(404).json({ message: 'Certificate not found' });
      }
      res.json(certificate);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching certificate', error: String(error) });
    }
  });

  // Initialize data from JSON files if they exist
  const dataPath = path.join(process.cwd(), 'client', 'src', 'data');
  try {
    if (fs.existsSync(path.join(dataPath, 'certificates.json'))) {
      const certificatesData = JSON.parse(
        fs.readFileSync(path.join(dataPath, 'certificates.json'), 'utf8')
      );
      
      // Add certificates to storage
      for (const cert of certificatesData) {
        try {
          await storage.addCertificate({
            certificateNumber: cert.certificateNumber,
            studentName: cert.name,
            course: cert.course,
            percentage: cert.percentage
          });
        } catch (err) {
          console.log(`Skipping duplicate certificate: ${cert.certificateNumber}`);
        }
      }
    }
  } catch (error) {
    console.error('Error initializing data:', error);
  }

  const httpServer = createServer(app);

  return httpServer;
}
