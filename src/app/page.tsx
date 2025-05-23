
"use client"; // This directive marks the component as a Client Component

import FiscalNavigatorForm from '@/components/fiscal-navigator-form';
import { Heart } from 'lucide-react';
import React from 'react';


export default function HomePage() { // Explicitly accept params and searchParams
  const [isFeedbackDialogOpen, setIsFeedbackDialogOpen] = React.useState(false);

  // You can log params and searchParams here if needed for debugging,
  // but they are not used in the component's logic.
  // console.log('HomePage params:', params);
  // console.log('HomePage searchParams:', searchParams);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <FiscalNavigatorForm />
      </main>
      <footer className="p-6 text-center border-t bg-card text-card-foreground">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="text-sm text-muted-foreground md:text-left">
            Un outil proposé par{' '}
            <a
              href="https://www.linkedin.com/in/jonas-millet/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              jonasmillet.dev
            </a>
          </div>
          <div className="text-sm text-muted-foreground md:text-right">
            Soutenir ce projet :{' '}
            <a
              href="https://buy.stripe.com/cNi9ATdpsbNt9COdi19fW00" // TODO: Replace with actual Stripe link
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
            >
              Faire un don <Heart size={16} className="text-red-500" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
