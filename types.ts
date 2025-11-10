// Fix: Add global type definitions for the YouTube Iframe Player API to avoid TypeScript errors.
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

// This export statement is added to ensure this file is treated as a module.
export {};
