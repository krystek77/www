export function connectMenuAndLinks(menu, totalLinks) {
  const result = [];
  menu.forEach((item) => {
    const submenu = item.links.map((linkId) => {
      return totalLinks.find((link) => linkId === link.id);
    });
    const id = item.id;
    const label = item.label;
    const to = item.to;
    const links = [...submenu];
    const newItemMenu = {
      id,
      label,
      to,
      links,
    };
    result.push(newItemMenu);
  });
  return result;
}
