import { useUnit } from "effector-react";
import { $comments, $error } from "../../stores/comments";
import { Main } from "./MainPage.styled";
import { List } from "../../components/List/List";
import { $isLoading, $updateView } from "../../stores/common";
import { useEffect } from "react";
import { isMobile, throttle } from "../../models/common/helpers";

export function MainPage() {
  const [comments, error] = useUnit([$comments, $error]),
    [updateView] = useUnit([$updateView]),
    isLoading = useUnit($isLoading);

  useEffect(() => {
    const handleResize = throttle(() => {
      updateView(!isMobile(window.innerWidth, window.innerHeight));
    }, 200);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLoading) {
    return <Main>Loading...</Main>;
  }

  if (error) {
    return <Main>Error: {error.message}</Main>;
  }

  return (
    <Main>
      <List comments={comments} />
    </Main>
  );
}
