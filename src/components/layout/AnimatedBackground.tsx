import React from 'react';
import Image from 'next/image';

export const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Light mode background */}
    <div className="dark:hidden absolute inset-0 w-full h-full opacity-30 transition-opacity duration-500">
      <Image
        src="/images/light_mode_image.png"
        alt="Background Light"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        quality={90}
        priority
      />
      {/* Soft gradient fade so content is always crystal clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" />
    </div>

    {/* Dark mode background */}
    <div className="hidden dark:block absolute inset-0 w-full h-full opacity-35 transition-opacity duration-500">
      <Image
        src="/images/dark_mode_background.png"
        alt="Background Dark"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        quality={90}
        priority
      />
      {/* Soft dark gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </div>
  </div>
);
