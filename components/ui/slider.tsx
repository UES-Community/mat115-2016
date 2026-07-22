'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={className}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-cobalt-panel border border-sapphire-hairline">
      <SliderPrimitive.Range className="absolute h-full bg-signal-blue" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full bg-frosted-lilac border border-white shadow-md focus:outline-none transition-transform hover:scale-110 cursor-pointer" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;
