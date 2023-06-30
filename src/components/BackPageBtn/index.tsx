import { useRouter } from "next/router";
import { Button } from "vcc-ui";
import { ChevronCircled } from "../../../docs/ChevronCircledIcon";
interface BackBtnProps {
  navigate: string;
}

export function BackBtn({ navigate }: BackBtnProps) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(navigate);
  };
  return (
    <div role="button" className="back-btn" tabIndex={1} onClick={handleNavigate}>
      <ChevronCircled />
    </div>
  );
}
