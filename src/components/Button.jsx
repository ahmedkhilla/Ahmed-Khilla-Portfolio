function Button({ href, children, className, color }) {
  return (
    <button
      className={`${
        className || ""
      } rounded-full ${color === "dark" ? "border border-white bg-primary-bcg shadow-lg hover:bg-white hover:text-primary-bcg" : "bg-border-gradient shadow-custom-blue hover:bg-btn-hover"} px-4 py-4 text-xs font-medium sm:text-sm md:text-base`}
    >
      <a href={href} target="_blank">
        {children}
      </a>
    </button>
  );
}

export default Button;
