const scrollToTop = (smooth: boolean = false) => {
  if (!smooth) {
    document.documentElement.scrollTop = 0;
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export default scrollToTop;
