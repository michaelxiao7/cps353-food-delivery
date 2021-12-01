import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import { useCart } from "react-use-cart"

const data = {
    productData:[
        {
            id: 1,
            img: img1,
            title: 'Cheese Quesadilla',
            description: 'The original cheese quesadilla',
            price: 5,        },
        {
            id: 2,
            img: img2,
            title: 'Chicken Quesadilla',
            description: 'Now with fresh shredded chicken',
            price: 6,
        },
        {
            id: 3,
            img: img3,
            title: 'Dillosauce',
            description: 'A must-have with the quesadilla!',
            price: 1,
        }
    ],
};

export default data;