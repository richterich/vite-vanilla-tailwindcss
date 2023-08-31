/**
 *
 * @param {HTMLElement | null} element
 */
export function setupCounter(element) {
  let counter = 0;

  /**
   *
   * @param {number} count
   */
  const setCounter = (count) => {
    counter = count;
    if (element) element.innerHTML = `Count is ${counter}`;
  };

  element?.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
