import { BaseModel } from './BaseModel';
import { VoterGuideContent, VoterGuideSection, VoterGuideMetadata } from '@/types';

/**
 * VoterGuide model representing the complete voter information guide
 */
export class VoterGuide extends BaseModel implements VoterGuideContent {
  public title: string;
  public description: string;
  public sections: VoterGuideSection[];
  public metadata: VoterGuideMetadata;

  constructor(data: Partial<VoterGuideContent> = {}) {
    super(data);
    this.title = data.title || '';
    this.description = data.description || '';
    this.sections = data.sections || [];
    this.metadata = data.metadata || this.getDefaultMetadata();
  }

  private getDefaultMetadata(): VoterGuideMetadata {
    return {
      electionDate: '2026-04-21',
      issueTitle: 'Virginia Redistricting Amendment',
      jurisdiction: 'Virginia',
      lastUpdated: new Date(),
    };
  }

  public validate(): boolean {
    return !!(
      this.title &&
      this.description &&
      this.sections.length > 0 &&
      this.metadata.electionDate &&
      this.metadata.issueTitle
    );
  }

  public getSectionsByType(type: VoterGuideSection['type']): VoterGuideSection[] {
    return this.sections.filter(section => section.type === type);
  }

  public getSectionById(id: string): VoterGuideSection | undefined {
    return this.sections.find(section => section.id === id);
  }

  public addSection(section: VoterGuideSection): void {
    this.sections.push(section);
    this.sections.sort((a, b) => a.order - b.order);
    this.touch();
  }

  public updateSection(id: string, data: Partial<VoterGuideSection>): boolean {
    const section = this.getSectionById(id);
    if (!section) return false;

    Object.assign(section, data);
    this.touch();
    return true;
  }

  public removeSection(id: string): boolean {
    const index = this.sections.findIndex(s => s.id === id);
    if (index === -1) return false;

    this.sections.splice(index, 1);
    this.touch();
    return true;
  }

  public toJSON(): Record<string, any> {
    return {
      ...super.toJSON(),
      title: this.title,
      description: this.description,
      sections: this.sections,
      metadata: {
        ...this.metadata,
        lastUpdated: this.metadata.lastUpdated.toISOString(),
      },
    };
  }
}
