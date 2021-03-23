import { MenuLinks } from '../components';

function MenuLinksContainer({ links, mainTo, callback = false }) {
  return links.length > 0 ? (
    <MenuLinks>
      {links.map((item) => {
        return (
          <MenuLinks.MenuLink
            key={item.id}
            {...item}
            callback={callback}
            mainTo={mainTo}
          />
        );
      })}
    </MenuLinks>
  ) : null;
}
export default MenuLinksContainer;
