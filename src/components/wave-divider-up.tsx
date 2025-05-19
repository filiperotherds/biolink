interface WaveDividerUpProps {
  from: string
  to: string
  className?: string
}

export function WaveDividerUp({ from, to, className = "" }: WaveDividerUpProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ backgroundColor: from }}>
      <svg
        className="absolute top-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: "100px" }}
      >
        <path
          fill={to}
          fillOpacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,53.3C1120,53,1280,43,1360,37.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  )
}
