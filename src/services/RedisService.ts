import { createClient, RedisClientType } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

class RedisService {
  private client: RedisClientType;
  private isConnected: boolean = false;

  constructor() {
    this.client = createClient({
      url: `redis://${process.env.REDIS_HOST || 'localhost'}:${process.env.REDIS_PORT || '6379'}`,
      password: process.env.REDIS_PASSWORD,
    });

    this.client.on('error', (err) => {
      console.error('Redis Client Error', err);
      this.isConnected = false;
    });

    this.client.on('connect', () => {
      console.log('Redis client connected');
      this.isConnected = true;
    });
  }

  /**
   * Connect to Redis
   */
  async connect(): Promise<void> {
    if (!this.isConnected) {
      await this.client.connect();
    }
  }

  /**
   * Disconnect from Redis
   */
  async disconnect(): Promise<void> {
    if (this.isConnected) {
      await this.client.disconnect();
      this.isConnected = false;
    }
  }

  /**
   * Set a key-value pair with optional expiry
   */
  async set(key: string, value: string, expiryInSeconds?: number): Promise<void> {
    await this.connect();
    if (expiryInSeconds) {
      await this.client.set(key, value, { EX: expiryInSeconds });
    } else {
      await this.client.set(key, value);
    }
  }

  /**
   * Get a value by key
   */
  async get(key: string): Promise<string | null> {
    await this.connect();
    return this.client.get(key);
  }

  /**
   * Delete a key
   */
  async del(key: string): Promise<void> {
    await this.connect();
    await this.client.del(key);
  }

  /**
   * Set a hash field
   */
  async hSet(key: string, field: string, value: string): Promise<void> {
    await this.connect();
    await this.client.hSet(key, field, value);
  }

  /**
   * Get a hash field
   */
  async hGet(key: string, field: string): Promise<string | null> {
    await this.connect();
    return this.client.hGet(key, field);
  }

  /**
   * Get all hash fields
   */
  async hGetAll(key: string): Promise<Record<string, string>> {
    await this.connect();
    const result = await this.client.hGetAll(key);
    // Convert to Record<string, string> to ensure type compatibility
    return result as Record<string, string>;
  }

  /**
   * Add to a set
   */
  async sAdd(key: string, ...members: string[]): Promise<void> {
    await this.connect();
    await this.client.sAdd(key, members);
  }

  /**
   * Get set members
   */
  async sMembers(key: string): Promise<string[]> {
    await this.connect();
    return this.client.sMembers(key);
  }
}

export default new RedisService();
