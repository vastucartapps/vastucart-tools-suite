'use client';

import { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './button';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  locale?: 'en' | 'hi';
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

const ERROR_MESSAGES = {
  en: {
    title: 'Something went wrong',
    description: 'An error occurred while processing your request. Please try again.',
    retry: 'Try Again',
  },
  hi: {
    title: 'कुछ गलत हो गया',
    description: 'आपके अनुरोध को संसाधित करते समय एक त्रुटि हुई। कृपया पुन: प्रयास करें।',
    retry: 'पुनः प्रयास करें',
  },
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    // In production, you could send to error tracking service
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const locale = this.props.locale || 'en';
      const messages = ERROR_MESSAGES[locale];

      return (
        <div className="bg-white rounded-2xl shadow-card p-8 text-center" role="alert">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-red-600" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {messages.title}
          </h3>
          <p className="text-gray-600 mb-6">
            {messages.description}
          </p>
          <Button
            onClick={this.handleRetry}
            variant="secondary"
            leftIcon={<RefreshCw className="w-5 h-5" />}
          >
            {messages.retry}
          </Button>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="mt-4 text-left">
              <summary className="cursor-pointer text-sm text-gray-500">
                Error details (dev only)
              </summary>
              <pre className="mt-2 p-4 bg-gray-100 rounded-lg text-xs overflow-auto">
                {this.state.error.message}
                {'\n'}
                {this.state.error.stack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Hook-based error boundary wrapper for functional components
 */
interface CalculatorErrorBoundaryProps {
  children: ReactNode;
  locale?: 'en' | 'hi';
  toolName?: string;
}

export function CalculatorErrorBoundary({
  children,
  locale = 'en',
  toolName,
}: CalculatorErrorBoundaryProps) {
  return (
    <ErrorBoundary locale={locale}>
      {children}
    </ErrorBoundary>
  );
}
