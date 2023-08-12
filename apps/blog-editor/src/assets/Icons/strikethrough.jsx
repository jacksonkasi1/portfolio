export default function LucideStrikethrough(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="none"
        style={{ stroke: "var(--icon-fill)" }}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 4H9a3 3 0 0 0-2.83 4M14 12a4 4 0 0 1 0 8H6m-2-8h16"
      ></path>
    </svg>
  );
}
