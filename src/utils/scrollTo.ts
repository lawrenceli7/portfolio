const scrollTo = (dest: string) => {
  return () => {
    const element = document.getElementById(dest);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
};

export default scrollTo;
