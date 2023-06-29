import { useRouter } from "next/router";

//ACESSIBILIDADE
export const useNavigateByTab = () => {
  const router = useRouter();
  const handleNavigateByTab = (event: React.KeyboardEvent<HTMLParagraphElement>, route: string) => {
    if (event.key === "Enter" || event.key === " ") {
      router.push(route);
    }
  };
  return {handleNavigateByTab};
};
