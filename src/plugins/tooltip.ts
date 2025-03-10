export const createTooltip = (element: HTMLElement, text: string) => {
  const tooltip = document.createElement('div');
  tooltip.className = 'awesome-tooltip';
  tooltip.textContent = text;

  const showTooltip = (e: MouseEvent) => {
    document.body.appendChild(tooltip);
    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.style.left = `${e.pageX + 10}px`;
  };

  const hideTooltip = () => {
    if (tooltip.parentNode) {
      tooltip.parentNode.removeChild(tooltip);
    }
  };

  element.addEventListener('mouseenter', showTooltip);
  element.addEventListener('mouseleave', hideTooltip);

  return {
    destroy: () => {
      element.removeEventListener('mouseenter', showTooltip);
      element.removeEventListener('mouseleave', hideTooltip);
      hideTooltip();
    }
  };
};