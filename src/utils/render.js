export const RenderPosition = {
    BEFOREBEGIN: `beforebegin`,
    AFTERBEGIN: `afterbegin`,
    BEFOREEND: `beforeend`,
    AFTEREND: `afterend`,
};

export const render = (child, place) => {
    const container = document.querySelector('body');

    const newElement = document.createElement(`main`);
    newElement.innerHTML = child;
    switch (place) {
        case RenderPosition.BEFOREBEGIN:
            container.before(newElement);
            break;
        case RenderPosition.AFTERBEGIN:
            container.prepend(newElement);
            break;
        case RenderPosition.BEFOREEND:
            container.append(newElement);
            break;
        case RenderPosition.AFTEREND:
            container.after(newElement);
            break;
    }
};


export const remove = (component) => {
    component.getElement().remove();
    component.removeElement();
  };
  