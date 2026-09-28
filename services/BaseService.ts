import { IService } from '@/types';

/**
 * Abstract base service class for business logic operations
 */
export abstract class BaseService<TInput, TOutput> implements IService<TInput> {
  public async execute(data: TInput): Promise<TOutput> {
    await this.validate(data);
    const result = await this.process(data);
    return this.transform(result);
  }

  /**
   * Validate input data
   */
  protected abstract validate(data: TInput): Promise<void>;

  /**
   * Process the business logic
   */
  protected abstract process(data: TInput): Promise<any>;

  /**
   * Transform result to output format
   */
  protected abstract transform(result: any): Promise<TOutput>;

  /**
   * Handle errors
   */
  protected handleError(error: Error): never {
    console.error(`Service error: ${error.message}`, error);
    throw error;
  }
}
