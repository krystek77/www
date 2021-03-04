export function connectPageAndLinks(pages, totalLinks) {
  const result = [];
  pages.forEach((page) => {
    const allLinks = page.links.map((linkId) => {
      return totalLinks.find((link) => linkId === link.id);
    });
    const id = page.id;
    const label = page.label;
    const to = page.to;
    const links = [...allLinks];
    const newPage = {
      id,
      label,
      to,
      links,
    };
    result.push(newPage);
  });
  return result;
}
