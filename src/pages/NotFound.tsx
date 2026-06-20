import { Link } from "react-router-dom";

interface NotFoundProps {
  /** Where the "back" button should link to. Defaults to the app root. */
  homeTo?: string;
  /** Label for the back button. */
  homeLabel?: string;
}

export default function NotFound({
  homeTo = "/",
  homeLabel = "Back to dashboard",
}: NotFoundProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-[#E6E1F2] bg-white p-8 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A24B]">
          Error 404
        </p>
        <h1 className="font-display mt-2 text-3xl font-bold text-[#3B1D6E]">
          Page not found
        </h1>
        <p className="mt-3 text-[#6B6580]">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          to={homeTo}
          className="mt-6 inline-block rounded-full bg-[#3B1D6E] px-6 py-2.5 font-semibold text-white transition-colors hover:bg-[#4A2487]"
        >
          {homeLabel}
        </Link>
      </div>
    </div>
  );
}
