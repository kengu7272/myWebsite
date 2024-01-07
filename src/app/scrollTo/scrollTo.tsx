export default function scrollTo(target: string) {
  const element: HTMLElement | null = document.getElementById(target);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
}
