
// ✅ rcc -> React Class Component
// ✅ rce -> React class Component Export


import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error Caught in ErrorBoundary:", error);
    console.error("Component Info:", info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="card">
          <h2>⚠️ Something went wrong!</h2>
          <p>Please refresh or try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;