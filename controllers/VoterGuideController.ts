import { BaseController } from './BaseController';
import { VoterGuide } from '@/models/VoterGuide';
import { VoterGuideContent } from '@/types';

/**
 * Controller for managing VoterGuide operations
 */
export class VoterGuideController extends BaseController<VoterGuide> {
  private static instance: VoterGuideController;

  private constructor() {
    super();
    this.initializeDefaultGuide();
  }

  /**
   * Singleton pattern - get controller instance
   */
  public static getInstance(): VoterGuideController {
    if (!VoterGuideController.instance) {
      VoterGuideController.instance = new VoterGuideController();
    }
    return VoterGuideController.instance;
  }

  protected async createInstance(data: Partial<VoterGuideContent>): Promise<VoterGuide> {
    return new VoterGuide(data);
  }

  protected getId(item: VoterGuide): string {
    return item.id;
  }

  protected mergeData(existing: VoterGuide, updates: Partial<VoterGuideContent>): VoterGuide {
    const merged = new VoterGuide({
      ...existing.toJSON(),
      ...updates,
    });
    return merged;
  }

  /**
   * Initialize with default voter guide data
   */
  private async initializeDefaultGuide(): Promise<void> {
    const defaultGuide = new VoterGuide({
      title: "Virginia's April 21, 2026 Redistricting Amendment",
      description: "Richmond First Voter Information Guide",
      sections: [
        {
          id: 'hero',
          title: 'Vote on April 21, 2026',
          content: 'Important information about Virginia\'s redistricting amendment',
          order: 1,
          type: 'hero',
        },
        {
          id: 'overview',
          title: 'What is This About?',
          content: 'Learn about the redistricting amendment and what it means for Virginia',
          order: 2,
          type: 'overview',
        },
      ],
      metadata: {
        electionDate: '2026-04-21',
        issueTitle: 'Virginia Redistricting Amendment',
        jurisdiction: 'Virginia',
        lastUpdated: new Date(),
      },
    });

    await this.create(defaultGuide.toJSON());
  }

  /**
   * Get the primary voter guide (assumes single guide per jurisdiction)
   */
  public async getPrimaryGuide(): Promise<VoterGuide | null> {
    const guides = await this.getAll();
    return guides[0] || null;
  }

  /**
   * Update primary guide content
   */
  public async updatePrimaryGuide(updates: Partial<VoterGuideContent>): Promise<VoterGuide> {
    const guide = await this.getPrimaryGuide();
    if (!guide) {
      throw new Error('No primary guide found');
    }
    return this.update(guide.id, updates);
  }
}

// Export singleton instance
export const voterGuideController = VoterGuideController.getInstance();
