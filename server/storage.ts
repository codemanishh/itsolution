import { users, type User, type InsertUser, certificates, type Certificate, type InsertCertificate } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Certificate methods
  getCertificateByNumber(number: string): Promise<Certificate | undefined>;
  getAllCertificates(): Promise<Certificate[]>;
  addCertificate(certificate: InsertCertificate): Promise<Certificate>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private certificates: Map<string, Certificate>;
  private currentUserId: number;
  private currentCertificateId: number;

  constructor() {
    this.users = new Map();
    this.certificates = new Map();
    this.currentUserId = 1;
    this.currentCertificateId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Certificate methods
  async getCertificateByNumber(number: string): Promise<Certificate | undefined> {
    return this.certificates.get(number);
  }

  async getAllCertificates(): Promise<Certificate[]> {
    return Array.from(this.certificates.values());
  }

  async addCertificate(insertCertificate: InsertCertificate): Promise<Certificate> {
    // Check if certificate with the same number already exists
    if (this.certificates.has(insertCertificate.certificateNumber)) {
      throw new Error('Certificate with this number already exists');
    }

    const id = this.currentCertificateId++;
    const certificate: Certificate = { 
      ...insertCertificate, 
      id 
    };
    
    this.certificates.set(insertCertificate.certificateNumber, certificate);
    return certificate;
  }
}

export const storage = new MemStorage();
