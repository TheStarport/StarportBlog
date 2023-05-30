import type { ClientModule } from '@docusaurus/types';

const imgPath = "/img/author-avatars/"
const avatarMap = {
    "Laz": 5,
};

const module: ClientModule = {
    onRouteDidUpdate({ location, previousLocation }) {
        for (const [key, value] of Object.entries(avatarMap)) {
            const el = document.querySelectorAll(`img[alt="${key}"]`);
            if (!el.length) {
                continue;
            }

            const imgNumber = Math.floor(Math.random() * value);
            el.forEach(x => x.setAttribute('src', imgPath + key + `/${imgNumber}.png`));
        }
    },
};
export default module;