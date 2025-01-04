import { Html } from "@elysiajs/html";
import { PropsWithChildren, Component } from "@kitajs/html";

type DialogProps = {
  isOpen?: boolean;
};

type DialogContentProps = {
  className?: string;
};

export const Dialog = ({
  children,
  isOpen = false,
}: PropsWithChildren<DialogProps>) => (
  <div
    class={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}
    role="dialog"
    aria-modal="true"
  >
    {/* Backdrop */}
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>

    {/* Dialog positioning */}
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
      {children}
    </div>
  </div>
);

export const DialogContent = ({
  children,
  className = "",
}: PropsWithChildren<DialogContentProps>) => (
  <div
    class={`relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6 
            transform transition-all ${className}`}
  >
    {children}
  </div>
);

export const DialogTrigger = ({ children }: { children: JSX.Element }) => (
  <div class="inline-block">{children}</div>
);

export const DialogClose = ({ children }: { children: JSX.Element }) => (
  <button
    class="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
    aria-label="Close dialog"
  >
    {children}
  </button>
);

// Helper component for Dialog Header
export const DialogHeader: Component<{ title: string }> = ({ title }) => (
  <div class="mb-4">
    <h2 class="text-lg font-semibold text-gray-900" safe>
      {title}
    </h2>
  </div>
);

// Helper component for Dialog Footer
export const DialogFooter = ({ children }: PropsWithChildren) => (
  <div class="mt-6 flex justify-end space-x-2">{children}</div>
);
