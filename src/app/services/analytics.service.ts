import { Injectable } from '@angular/core';

declare var createAnalytics: (analyticsTrackingId: string) => void;

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  init() {
    const analyticsTrackingId = 'G-MP7Z0TZZXG';
    createAnalytics(analyticsTrackingId);
  }
}