/** "ЭВАКУ" in white + "АТОР" in yellow, as on the banners. */
export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`wordmark ${className}`.trim()}>
      ЭВАКУ<span className="wordmark__accent">АТОР</span>
    </span>
  );
}
