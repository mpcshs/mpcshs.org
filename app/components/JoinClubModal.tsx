import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface JoinClubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinClubModal = ({ isOpen, onClose }: JoinClubModalProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] bg-gray-800/95 border-green-500/20 backdrop-blur-sm z-50 p-0" showCloseButton={false}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10" />
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-white text-xl">Join CSHS Application</DialogTitle>
              <DialogDescription className="text-gray-400 mt-1">
                Complete the application form below to join the Computer Science Honor Society
              </DialogDescription>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700/50 rounded-lg"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </DialogHeader>

        <div className="relative flex-1 min-h-[600px]">
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm z-10 rounded-b-lg"
              >
                <div className="text-center">
                  <Loader2 className="h-8 w-8 animate-spin text-green-400 mx-auto mb-4" />
                  <p className="text-gray-300">Loading application form...</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScZpRgg0M54iwI0iA8fcXn-LxQWhDYf3DSf5wt7F-OIu4vpfQ/viewform?usp=dialog"
            className="w-full h-[600px] border-0 rounded-b-lg"
            onLoad={handleIframeLoad}
            title="CSHS Join Application"
            allow="autoplay"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JoinClubModal;
