import faker from 'faker'
import niceColors from 'nice-color-palettes'
faker.seed(1);

export const ORANGE = '#FB9B06'

const data = [
    {
        type: 'Soup',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480438.png'
    },
    {
        type: 'Salad',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480436.png'
    },
    {
        type: 'Sweet',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480435.png'
    },
    {
        type: 'Rice',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480434.png'
    },
    {
        type: 'Extra',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480433.png'
    },
    {
        type: 'Blaos',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480413.png'
    },
    {
        type: 'Zuki',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480403.png'
    },
    {
        type: 'Polos',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480478.png'
    },
    {
        type: 'Pure',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480456.png'
    },
    {
        type: 'Batata',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480431.png'
    },
    {
        type: 'Doce',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480442.png'
    },
    {
        type: 'Mandioca',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480431.png'
    },
    {
        type: 'Frutas',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480491.png'
    },
    {
        type: 'Legumes',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480493.png'
    },
    {
        type: 'Verdura',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480403.png'
    },
    {
        type: 'Colagno',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480413.png'
    },
    {
        type: 'Salgados',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480453.png'
    },
    {
        type: 'Lanche',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480443.png'
    },
    {
        type: 'Churros',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480433.png'
    },
    {
        type: 'Abobrinha',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480423.png'
    },
]

const colors = niceColors[1]
export const tabs = [
    'Today',
    'Chips',
    'Fish',
    'Burguer',
    'Coffe',
    'Drinks',
    'Breakfast'
]

export default data.map((item, index) => ({
    ...item,
    key: faker.random.uuid(),
    subType: faker.commerce.productName(),
    color: `${colors[index % colors.length]}66`,
    fullColor: colors[index % colors.length],
    description: [...Array(2).keys()].map(faker.commerce.productDescription).join('. '),
    price: `$${(faker.random.number(200) + 50) / 100}`,
    subcategories: faker.helpers.shuffle(data).slice(0, 3)
}));

export const popularFood = faker.helpers.shuffle(data).map((item) => ({
    ...item,
    key: faker.random.uuid(),
    raiting: (faker.random.number(30) + 20) / 10,
    price: `$${(faker.random.number(200) + 50) / 100}`
}))