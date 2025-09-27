'use client';

import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

interface WebVitalsProps {
  onPerfEntry?: (metric: Metric) => void;
}

export default function WebVitals({ onPerfEntry }: WebVitalsProps) {
  useEffect(() => {
    // Report web vitals to analytics or console
    const reportWebVitals = (metric: Metric) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vitals:', metric);
      }

      // Call custom handler if provided
      if (onPerfEntry) {
        onPerfEntry(metric);
      }

      // Send to analytics (you can integrate with your analytics service)
      // Example: sendToAnalytics(metric);
    };

    // Measure and report Core Web Vitals
    onCLS(reportWebVitals);
    onINP(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
  }, [onPerfEntry]);

  return null; // This component doesn't render anything
}