export default function Sotopia({ className }: { className?: string }) {
  return (
    <div className={className}>
    <svg className="h-10 w-10 dark:text-sky-300 dark:drop-shadow-[0_3px_10px_#bae6fd]"
      viewBox="0 0 300 300"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M250,200c-55.23,0-100-44.77-100-100S194.77,0,250,0" />
      <path d="M50,100c55.23,0,100,44.77,100,100S105.23,300,50,300" />
      <path d="M50,0l100,0c0,55.23-44.77,100-100,100" />
      <path d="M250,300l-100,0c0-55.23,44.77-100,100-100" />
    </svg>
    </div>
  );
}