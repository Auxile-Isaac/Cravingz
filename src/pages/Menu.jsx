import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BreakfastImg from '../utils/img/breakfast.jpg';
import LunchImg from '../utils/img/lunch.jpg';
import DinnerImg from '../utils/img/dinner.jpg';
import DessertImg from '../utils/img/dessert.jpg';

const Burgers = [
    {
        id: 1,
        name: 'Beef Cheese Burger',
        description: 'smoked bacon, sausage, tomato, mushrooms, black pudding, baked beans, eggs',
        price: 5000
    },
    {
        id: 2,
        name: 'Beef Burger',
        description: 'tortilla, egg, cheese, potatoes, pork meat',
        price: 4000
    },
    {
        id: 3,
        name: 'Chicken Cheese Burger',
        description: 'tortilla, egg, cheese, potatoes, pork meat',
        price: 6000
    },
    {
        id: 4,
        name: 'Chicken Burger',
        description: 'tortilla, egg, cheese, potatoes, pork meat',
        price: 5500
    }
];
const Pizza = [
    {
        id: 1,
        name: '4 season',
        description: 'chicken breast, romaine lettuce, croutons, parmesan',
        price: 8000
    },
    {
        id: 2,
        name: 'Hawain',
        description: 'spaghetti, pancetta, garlic, eggs, parmesan, pepper',
        price: 7000
    },
    {
        id: 3,
        name: 'Margharitta',
        description: 'chorizo, italian salami, tomatoes, mushrooms, olives',
        price: 5000
    }
    ,
    {
        id: 4,
        name: 'Kirakitu',
        description: 'chorizo, italian salami, tomatoes, mushrooms, olives',
        price: 10000
    },
    {
        id: 5,
        name: 'Carnivol',
        description: 'chorizo, italian salami, tomatoes, mushrooms, olives',
        price: 9000
    }
];

const Sandwiches = [
    {
        id: 1,
        name: 'Spicy Beef',
        description: 'spicy beef, potatoes, carrots, cheese sauce, spices',
        price: 4000
    },
    {
        id: 2,
        name: 'Hot Dog',
        description: 'onion, carrot, celery, minced meat, spaghetti, parmesan',
        price: 3000
    },
    {
        id: 3,
        name: 'Meatball Sub',
        description: 'onion, chickpea, garlic, mushrooms, tomatoes, spices',
        price: 5000
    },
    {
        id: 4,
        name: 'Ham & Cheese',
        description: 'onion, chickpea, garlic, mushrooms, tomatoes, spices',
        price: 2500
    },
    {
        id: 5,
        name: 'Ham',
        description: 'onion, chickpea, garlic, mushrooms, tomatoes, spices',
        price: 2000
    }
];

const dessert = [
    {
        id: 1,
        name: 'Lemon Cake',
        description: 'flour, sugar, baking powder, lemon',
        price: 2000
    },
    {
        id: 2,
        name: 'Cinnamon Rolls',
        description: 'flour, salt, sugar, cinnamon, yeast, sour cream, milk',
        price: 2000
    },
    {
        id: 3,
        name: 'Vegan Pancakes',
        description: 'flour, sugar, baking powder, soya milk, blueberries',
        price: 2000
    }
];

function Menu() {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Burgers</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {Burgers.map((Burgers) => (
                                <div key={Burgers.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {Burgers.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {Burgers.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                Rwf {Burgers.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='lunch bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Pizza</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {Pizza.map((Pizza) => (
                                <div key={Pizza.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {Pizza.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {Pizza.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                Rwf {Pizza.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={LunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Sandwiches</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {Sandwiches.map((Sandwiches) => (
                                <div key={Sandwiches.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {Sandwiches.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {Sandwiches.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                Rwf {Sandwiches.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='dessert bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dessert</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dessert.map((dessert) => (
                                <div key={dessert.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dessert.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dessert.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                Rwf {dessert.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;