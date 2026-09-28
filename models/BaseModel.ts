import { IModel } from '@/types';

/**
 * Abstract base model class implementing common model functionality
 * All domain models should extend this class
 */
export abstract class BaseModel implements IModel {
  public id: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(data: Partial<IModel> = {}) {
    this.id = data.id || this.generateId();
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  /**
   * Generate a unique ID for the model
   */
  protected generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Update the model's updatedAt timestamp
   */
  protected touch(): void {
    this.updatedAt = new Date();
  }

  /**
   * Convert model to plain object
   */
  public toJSON(): Record<string, any> {
    return {
      id: this.id,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
    };
  }

  /**
   * Validate model data
   */
  public abstract validate(): boolean;

  /**
   * Clone the model
   */
  public clone(): this {
    const Constructor = this.constructor as new (data: any) => this;
    return new Constructor(this.toJSON());
  }
}
