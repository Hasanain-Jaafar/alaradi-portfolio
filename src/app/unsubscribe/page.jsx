import { Suspense } from "react";
import UnsubscribeClient from "./UnsubscribeClient";

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <UnsubscribeClient />
    </Suspense>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 md:p-12 shadow-2xl">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mb-6"></div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Loading...
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
