"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChromeIcon as Browser, Smartphone, Monitor } from "lucide-react"; // Lucide icons
import { useIsMobile } from "@/lib/useIsMobile";

const LOCAL_STORAGE_KEY = "v0_mobile_hint_shown";

export function MobileHintDialog() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show the dialog if it's a mobile device and it hasn't been shown before
    if (isMobile && !localStorage.getItem(LOCAL_STORAGE_KEY)) {
      setIsOpen(true);
    }
  }, [isMobile]);

  const handleClose = () => {
    setIsOpen(false);
    // Mark the hint as shown in local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, "true");
  };

  if (!isMobile) {
    return null; // Don't render anything if not on mobile
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="rounded-lg p-6 sm:max-w-[425px]">
        <DialogHeader className="text-center">
          <DialogTitle className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
            <Smartphone className="h-6 w-6 text-blue-500" />
            Mobile Experience Notice
          </DialogTitle>
          <DialogDescription className="mt-2 text-gray-600 dark:text-gray-400">
            Please be aware of the following for the best experience:
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4 text-gray-700 dark:text-gray-300">
          <div className="flex items-start gap-3">
            <Browser className="h-5 w-5 flex-shrink-0 text-purple-500" />
            <p className="text-sm">
              Some browsers may not fully support the advanced color schema. For
              optimal display, we recommend using{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Chrome
              </span>
              ,{" "}
              <span className="font-semibold text-orange-600 dark:text-orange-400">
                Firefox
              </span>
              , or{" "}
              <span className="font-semibold text-red-600 dark:text-red-400">
                Opera
              </span>
              .
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Monitor className="h-5 w-5 flex-shrink-0 text-green-500" />
            <p className="text-sm">
              To enhance performance on mobile devices, some features and
              animations are intentionally disabled. For the full interactive
              experience, please view on a{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">
                desktop computer
              </span>
              .
            </p>
          </div>
        </div>
        <DialogFooter className="flex justify-center pt-4">
          <Button
            onClick={handleClose}
            className="bg-gray-900 text-white transition-colors duration-300 hover:bg-gray-800 dark:bg-[#3ABF94] dark:hover:bg-[#2f9977]"
          >
            Got it!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
