"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlacingOrderOverlay } from "@/components/placing-order-overlay";

export default function OrderPage() {
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const handlePlaceOrder = () => {
    setIsPlacingOrder(true);
    // Simulate order processing
    setTimeout(() => {
      setIsPlacingOrder(false);
      // Here you would typically navigate to an order confirmation page
      alert("Order placed successfully!");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Your Order</h1>
        <Button onClick={handlePlaceOrder}>Place Order</Button>
      </div>
      <PlacingOrderOverlay isVisible={isPlacingOrder} />
    </div>
  );
}
