import React from 'react';
import './ProductsList.css';
import data from '../../../data.json';
import Products from '../../Products/Products';
import Filter from '../../Filter/Filter';
import Cart from '../../Cart/Cart';

class ProductsList extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            cartItems: localStorage.getItem('cartItems')
                ? JSON.parse(localStorage.getItem('cartItems'))
                : [],
            producer: '',
            sort: '',
        };
    }
    createOrder = (order) => {
        alert('need to save order for  ' + order.name);
    };
    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter((x) => x._id !== product._id),
        });
        localStorage.setItem(
            'cartItems',
            JSON.stringify(cartItems.filter((x) => x._id !== product._id))
        );
    };

    addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach((item) => {
            if (item._id === product._id) {
                item.count++;
                alreadyInCart = true;
            }
        });
        if (!alreadyInCart) {
            cartItems.push({ ...product, count: 1 });
        }
        this.setState({ cartItems });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    sortProducts = (event) => {
        const sort = event.target.value;
        this.setState((state) => ({
            sort: sort,
            products: this.state.products
                .slice()
                .sort((a, b) =>
                    sort === 'lowest'
                        ? a.price > b.price
                            ? 1
                            : -1
                        : sort === 'highest'
                        ? a.price < b.price
                            ? 1
                            : -1
                        : a._id < b._id
                        ? 1
                        : -1
                ),
        }));
    };

    filterProducts = (event) => {
        if (event.target.value === '') {
            this.setState({
                producer: event.target.value,
                products: data.products,
            });
        } else {
            this.setState({
                producer: event.target.value,
                products: data.products.filter(
                    (product) =>
                        product.producer.indexOf(event.target.value) >= 0
                ),
            });
        }
    };

    render() {
        return (
            <div className="grid-container">
                <header className="grid-title">
                    <h1>browse the products</h1>
                </header>
                <aside className="filter-container">
                    <h2>Match your createria</h2>
                    <Filter
                        count={this.state.products.length}
                        producer={this.state.producer}
                        sort={this.state.sort}
                        filterProducts={this.filterProducts}
                        sortProducts={this.sortProducts}
                    />
                </aside>
                <main>
                    <div className="content">
                        <div className="main">
                            <Products
                                products={this.state.products}
                                addToCart={this.addToCart}
                            />
                        </div>
                        <div className="sidebar">
                            <Cart
                                createOrder={this.createOrder}
                                removeFromCart={this.removeFromCart}
                                cartItems={this.state.cartItems}
                            />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default ProductsList;
