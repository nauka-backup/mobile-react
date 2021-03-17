import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort">
                    Order
                    <select
                        value={this.props.sort}
                        onChange={this.props.sortProducts}
                    >
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-producer">
                    Filter
                    <select
                        value={this.props.producer}
                        onChange={this.props.filterProducts}
                    >
                        <option value="">All</option>
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                        <option value="LG">LG</option>
                        <option value="Huawei">Huawei</option>
                        <option value="Xiaomi">Xiaomi</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Filter;
