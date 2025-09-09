import { HashLoader } from "react-spinners";

export function GlobalLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <HashLoader color="green" size={30} />
    </div>
  );
}
