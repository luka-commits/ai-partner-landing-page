import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      const lang = document.documentElement.lang || "de";
      const isDE = lang === "de";

      return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-white mb-3">
              {isDE ? "Etwas ist schiefgelaufen" : "Something went wrong"}
            </h1>
            <p className="text-neutral-400 mb-8">
              {isDE
                ? "Die Seite konnte nicht geladen werden. Bitte versuche es erneut."
                : "The page could not be loaded. Please try again."}
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 transition-all cursor-pointer"
            >
              {isDE ? "Seite neu laden" : "Reload page"}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
