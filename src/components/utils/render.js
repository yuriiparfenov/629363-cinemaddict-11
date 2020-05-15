export const RenderPosition = {
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`,
  AFTERELEM: `afterelem`,
};

export const render = (container, component, place) => {
  switch (place) {
    case RenderPosition.AFTEREND:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
    case RenderPosition.AFTERELEM:
      container.after(component.getElement());
      break;
  }
};

export const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};
