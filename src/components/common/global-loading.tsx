import { HashLoader } from "react-spinners";

export function GlobalLoading() {
  return (
    <div className="min-h-[calc(100vh-13rem)] flex items-center justify-center">
      <HashLoader color="green" size={30} />
    </div>
  );
}
