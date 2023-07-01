import { useRouter } from "next/router";
import { useNavigateByTab } from "../../utils/navigateByTab";
import { ChevronCircled } from "../../../docs/ChevronCircledIcon";
interface BackBtnProps {
  navigate: string;
}

export function BackBtn({ navigate }: BackBtnProps) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(navigate);
  };
  const {handleNavigateByTab} = useNavigateByTab()

  return (
    <div
      role="button"
      onKeyDown={(e) => handleNavigateByTab(e, `/`)}
      className="back-btn"
      tabIndex={1}
      onClick={handleNavigate}
    >
      <ChevronCircled />
    </div>
  );
}
