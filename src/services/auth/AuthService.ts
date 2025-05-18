import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User, UserRole } from '@/models/interfaces/User';

class AuthService {
  private readonly jwtSecret: string;
  private readonly jwtExpiration: string;

  constructor() {
    this.jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret_key_here';
    this.jwtExpiration = process.env.JWT_EXPIRATION || '24h';
  }

  /**
   * Hash a password
   */
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  /**
   * Verify password against hash
   */
  async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  /**
   * Generate a JWT token for the user
   */
  generateToken(user: Omit<User, 'passwordHash'>): string {
    const payload = {
      userId: user.id,
      email: user.email,
      role: user.role,
      agencyId: user.agencyId,
      companyId: user.companyId,
    };

    return jwt.sign(payload, this.jwtSecret, {
      expiresIn: this.jwtExpiration,
    });
  }

  /**
   * Verify a JWT token
   */
  verifyToken(token: string): any {
    try {
      return jwt.verify(token, this.jwtSecret);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  /**
   * Check if user has required role
   */
  checkRole(user: User, requiredRoles: UserRole[]): boolean {
    return requiredRoles.includes(user.role);
  }
}

export default new AuthService();
