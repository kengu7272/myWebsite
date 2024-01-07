"use client";

function scrollTo(target: string) {
  const element: HTMLElement | null = document.getElementById(target);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
}
export function HeaderButtons() {
  return (
    <>
      <button
        className="hover:border-b border-gray-300 py-1"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Kevin Nguyen
      </button>
      <button
        className="hover:border-b border-gray-300 hidden desktop:block py-1"
        onClick={() => scrollTo("about")}
      >
        About Me
      </button>
      <button
        className="hover:border-b border-gray-300 hidden desktop:block py-1"
        onClick={() => scrollTo("education")}
      >
        Education
      </button>
      <button
        className="hover:border-b border-gray-300 hidden desktop:block py-1"
        onClick={() => scrollTo("experience")}
      >
        Experience
      </button>
    </>
  );
}

export function FooterButton() {
  return (
    <button
      onClick={() => {
        scrollTo("about");
      }}
      className="border-b hover:border-gray-300 font-bold"
    >
      Scroll to top
    </button>
  );
}
