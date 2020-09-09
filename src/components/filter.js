import React from 'react';
import Product from './Product'

class ProductLists extends React.Component {

    constructor(props) {
        super(props);
        this.incrementProduct = this.props.incrementProduct;
        this.state = {
            selectedColor: 'All'
        }
    }

    onColorSelect = (color) => {
        this.setState({
            selectedColor: color
        });
        // console.log(this.state.selectedColor);
        return;
    }

    render() {
        return (
            <div className="container">
                <div className="row" style={{ marginBottom: '10px', marginTop: '10px' }}>
                    <div className="col-10">
                       
                            <select title="Color Filter" variant="secondary"
                                onSelect={this.onColorSelect}>
                                <option eventKey="All">All</option>
                                <option eventKey="Black">Black</option>
                                <option eventKey="Stone">Stone</option>
                                <option eventKey="Red">Red</option>
                            </select>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        {this.props.products.filter(product => {
                            if (this.state.selectedColor == 'All') {
                                return this.props.products;
                            }
                            else
                                return product.colour == this.state.selectedColor;
                        }).map((filteredProd) => (
                            <div className="container" key={filteredProd.id}>
                                <div className="row">
                                    <div>
                                        {/* <Product product={filteredProd} /> */}
                                        <Product product={filteredProd}
                                            cartClick={this.props.cartClick}
                                            incrementProduct={this.incrementProduct} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        );
    }
}

export default ProductLists;