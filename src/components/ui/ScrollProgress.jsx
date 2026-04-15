import { useScrollProgress } from '../../hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px]">
      <div
        className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 transition-transform duration-150 origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
