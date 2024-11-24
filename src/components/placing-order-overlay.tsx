import { Loader2 } from "lucide-react";

interface PlacingOrderOverlayProps {
  isVisible: boolean;
}

export function PlacingOrderOverlay({ isVisible }: PlacingOrderOverlayProps) {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6 max-w-sm w-full mx-4 space-y-4">
        <div className="flex justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
        <h2 className="text-2xl font-semibold text-center">
          Placing Your Order
        </h2>
        <p className="text-center text-muted-foreground">
          Please wait while we process your order. This may take a few moments.
        </p>
      </div>
    </div>
  );
}
