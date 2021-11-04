const tagType = [`graphic`, `angular2`, `graphic`, `react`, `it`, `science`];

const projectMenuTitle = [`All`, `Applications`, `Frameworks`, `Scripts`, `Layouts`, `Graphic`];

const productMenuTitle = [`All`, `Wordpress`, `Prestashop`, `HTML`, `PSD Templates`, `PHP Scripts`];

const menuTitle = {
    project: [`All`, `Applications`, `Frameworks`, `Scripts`, `Layouts`, `Graphic`],
    product: [`All`, `Wordpress`, `Prestashop`, `HTML`, `PSD Templates`, `PHP Scripts`]
};

const categories = [
    {
        name: `CSS`,
        color: `blue`,
    },
    {
        name: `HTML`,
        color: `red`,
    },
    {
        name: `Javascript`,
        color: `yellow`,
    },
    {
        name: `Graphic`,
        color: `green`,
    },
];

const navigation = [
    {
        class: `active`,
        title: `Start page`,
        route: `ROOT`,
    },
    {
        class: `dropdown`,
        title: `Blog articles`,
        route: `ARTICLES`,
    },
    {
        class: ``,
        title: `About me`,
        route: `ABOUT_ME`,
    },
    {
        class: `projects`,
        title: `My projects`,
        route: `MY_PROJECTS`,
    },
    {
        class: ``,
        title: `Contact me`,
        route: `CONTACTS`,
    },
    {
        class: `buyproducts-link`,
        title: `Buy products`,
        route: `PRODUCTS`,
    },
];

export {
    tagType,
    projectMenuTitle,
    productMenuTitle,
    menuTitle,
    categories,
    navigation,
};
