import { createApi, createEvent, createStore } from "effector";
import { isMobile } from "../models/common/helpers";

const $updateView = createEvent<boolean>(),
  $isDesktop = createStore<boolean>(
    !isMobile(window.innerWidth, window.innerHeight)
  ).on($updateView, (_, isDesktop) => isDesktop);

const $isLoading = createStore<boolean>(false),
  { toggleLoad } = createApi($isLoading, {
    toggleLoad: (state, value) => value,
  });

export { $isLoading, $isDesktop, toggleLoad, $updateView };
