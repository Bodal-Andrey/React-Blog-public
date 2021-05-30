const faker = require(`faker`);

const fs = require(`fs`);

const CATEGORIES = [`Css`, `Javascript`, `Html`, `Graphic`];
const SKILLS = [`Html`, `Css`, `Javascript`, `Angular 2`];
const COUNTERS_CLASS_NAMES = [`cart`, `news-paper`, `photo`, `tools`];
const COUNTERS_TEXT = [`Product sales`, `Line of Code`, `Taking photos`, `Bug fixed`];
const PORTFOLIO_MENU = [`Applications`, `Frameworks`, `Scripts`, `Layouts`, `Graphic`];
const PRODUCTS_MENU = [`Wordpress`, `Prestashop`, `Html`, `PSD Templates`, `PHP Scripts`];
const CLASS_NAME = [`blue-article`, `red-article`, `yellow-article`, `green-article`];

const db = {
    posts: [],
    comments: [],
    lastComments: [],
    user: [],
    projects: [],
    products: [],
};

const generatePosts = (count) => {
    for (let i = 1; i < count + 1; i++) {
        db.posts.push({
            id: i,
            title: faker.lorem.sentence(),
            text: faker.lorem.paragraphs(),
            image: faker.image.imageUrl() + `/tech`,
            category: CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)],
            className: CLASS_NAME[Math.floor(Math.random() * CLASS_NAME.length)],
            likes: Math.floor(faker.datatype.number() / 100),
            responses: Math.floor(Math.random() * count),
            inBanner: i < 6 ? true : false,
            isBig: i < 3 ? true : false,
        });
    }
};

const generateComments = (count) => {
    for (let i = 1; i < count + 1; i++) {
        db.comments.push({
            id: i,
            name: faker.name.findName(),
            text: faker.lorem.paragraph(),
            image: faker.image.avatar(),
            likes: Math.floor(faker.datatype.number() / 100),
            postId: Math.floor(Math.random() * db.posts.length),
        });
    }
};

const generateLastComments = (count) => {
    for (let i = 1; i < count + 1; i++) {
        db.lastComments.push({
            id: i,
            name: faker.name.findName(),
            text: faker.lorem.paragraph(),
            image: faker.image.avatar(),
        });
    }
};

const generateParagraphs = (count) => {
    const paragraphs = [];

    for (let i = 1; i < count + 1; i++) {
        paragraphs.push(faker.lorem.paragraphs());
    }
    return paragraphs;
};

const generateSkills = (count) => {
    const skills = [];

    for (let i = 1; i < count + 1; i++) {
        skills.push({
            number: i,
            title: SKILLS[i - 1],
            text: faker.lorem.paragraph(),
        });
    }
    return skills;
};

const generateCounters = (count) => {
    const counters = [];

    for (let i = 0; i < count; i++) {
        counters.push({
            class: COUNTERS_CLASS_NAMES[i],
            counter: Math.floor(faker.datatype.number() / 100),
            text: COUNTERS_TEXT[i],
        });
    }
    return counters;
};

const generateUser = (count) => {
    for (let i = 1; i < count + 1; i++) {
        db.user.push({
            about: faker.lorem.paragraphs(),
            philosophy: generateParagraphs(3),
            image: faker.image.avatar(),
            skills: generateSkills(4),
            counters: generateCounters(4),
            contacts: {
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                street: faker.address.streetAddress(),
                city: faker.address.city(),
            },
        });
    }
};

const generateProjects = (count) => {
    for (let i = 0; i < count; i++) {
        db.projects.push({
            title: faker.hacker.abbreviation() + ` ` +  faker.hacker.verb(),
            subject: PORTFOLIO_MENU[Math.floor(Math.random() * PORTFOLIO_MENU.length)],
            text: faker.hacker.phrase(),
            image: faker.image.imageUrl() + `/tech`,
            color: faker.internet.color(),
            default: faker.datatype.boolean(),
        });
    }
};

const generateProducts = (count) => {
    for (let i = 0; i < count; i++) {
        db.products.push({
            title: faker.hacker.abbreviation() + ` ` +  faker.hacker.verb(),
            subject: PRODUCTS_MENU[Math.floor(Math.random() * PRODUCTS_MENU.length)],
            text: faker.lorem.paragraph(),
            image: faker.image.imageUrl() + `/tech`,
            salesCount: Math.floor(faker.datatype.number() / 1000),
            price: Math.floor(faker.datatype.number() / 500),
            default: faker.datatype.boolean(),
        });
    }
};

generatePosts(10);
generateComments(10);
generateLastComments(10);
generateUser(1);
generateProjects(10);
generateProducts(10);

fs.writeFile(`db.json`, JSON.stringify(db), () => { console.log(`Finish:`, db)});
