
/**
 * Inject into the main page a template,
 * fetching its content from the provided `path`.
 * @name injectTemplate
 * @param {String} path
 * @param {String} templateId
 * 
 * @return {Promise<undefined>}
 */
const injectTemplate = async (path, templateId) => {
  const template = await fetch(path);

  const templateEl = document.createElement('template');
  templateEl.id = templateId;
  templateEl.innerHTML = await template.text();

  document.body.appendChild(templateEl);
};

export default injectTemplate;
