import { Injectable } from '@angular/core';

import { Topic } from './types/topic';
import { TOPICS } from './moc-topics';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  constructor() {}

  getTopics(): Topic[] {
    return TOPICS;
  }
}
