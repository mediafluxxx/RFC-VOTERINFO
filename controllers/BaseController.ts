import { IController } from '@/types';

/**
 * Abstract base controller class implementing common CRUD operations
 * All controllers should extend this class
 */
export abstract class BaseController<T> implements IController<T> {
  protected data: Map<string, T>;

  constructor() {
    this.data = new Map();
  }

  public async get(id: string): Promise<T | null> {
    return this.data.get(id) || null;
  }

  public async getAll(): Promise<T[]> {
    return Array.from(this.data.values());
  }

  public async create(data: Partial<T>): Promise<T> {
    const item = await this.createInstance(data);
    const id = this.getId(item);
    this.data.set(id, item);
    return item;
  }

  public async update(id: string, data: Partial<T>): Promise<T> {
    const existing = await this.get(id);
    if (!existing) {
      throw new Error(`Item with id ${id} not found`);
    }
    const updated = this.mergeData(existing, data);
    this.data.set(id, updated);
    return updated;
  }

  public async delete(id: string): Promise<boolean> {
    return this.data.delete(id);
  }

  protected abstract createInstance(data: Partial<T>): Promise<T>;
  protected abstract getId(item: T): string;
  protected abstract mergeData(existing: T, updates: Partial<T>): T;

  /**
   * Find items matching a predicate
   */
  public async find(predicate: (item: T) => boolean): Promise<T[]> {
    const all = await this.getAll();
    return all.filter(predicate);
  }

  /**
   * Find first item matching a predicate
   */
  public async findOne(predicate: (item: T) => boolean): Promise<T | null> {
    const all = await this.getAll();
    return all.find(predicate) || null;
  }

  /**
   * Check if an item exists
   */
  public async exists(id: string): Promise<boolean> {
    return this.data.has(id);
  }

  /**
   * Get count of items
   */
  public async count(): Promise<number> {
    return this.data.size;
  }

  /**
   * Clear all data
   */
  public async clear(): Promise<void> {
    this.data.clear();
  }
}
