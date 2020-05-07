export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const RenderPosition = {
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`,
  AFTERELEM: `afterelem`,
};

export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTEREND:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTERELEM:
      container.after(element);
      break;
  }
};
