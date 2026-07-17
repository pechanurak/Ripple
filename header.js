// Header behaviour: compact on scroll, expand on logo hover
const header = document.querySelector('.header');
let lastScroll = window.pageYOffset;
let compactTimeout = null;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  const isScrollingDown = currentScroll > lastScroll;

  if (isScrollingDown && currentScroll > 180) {
    if (compactTimeout === null) {
      compactTimeout = window.setTimeout(() => {
        header.classList.add('header--compact');
        compactTimeout = null;
      }, 1000);
    }
  } else {
    if (compactTimeout !== null) {
      window.clearTimeout(compactTimeout);
      compactTimeout = null;
    }

    if (currentScroll <= 180) {
      header.classList.remove('header--compact');
    }
  }

  lastScroll = currentScroll;
});

const logo = document.querySelector('.logo');
let logoCollapseTimer = null;

const clearLogoCollapseTimer = () => {
  if (logoCollapseTimer !== null) {
    window.clearTimeout(logoCollapseTimer);
    logoCollapseTimer = null;
  }
};

const scheduleLogoCollapse = () => {
  clearLogoCollapseTimer();
  if (window.pageYOffset > 180) {
    logoCollapseTimer = window.setTimeout(() => {
      if (!header.matches(':hover')) {
        header.classList.add('header--compact');
      }
      logoCollapseTimer = null;
    }, 1000);
  }
};

logo.addEventListener('mouseenter', () => {
  header.classList.remove('header--compact');
  clearLogoCollapseTimer();
});

header.addEventListener('mouseenter', () => {
  clearLogoCollapseTimer();
});

header.addEventListener('mouseleave', () => {
  scheduleLogoCollapse();
});
