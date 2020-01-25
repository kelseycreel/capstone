import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';

import shapes from '../../../helpers/props/shapes';
import authData from '../../../helpers/data/authData';

import './SearchCard.scss';

class SearchCard extends React.Component {
  static propTypes = {
    product: shapes.productShape,
  }

  saveProductEvent = (e) => {
    e.preventDefault();
    const { product } = this.props;
    const uid = authData.getUid();
    const newUserProduct = {};
    newUserProduct.productId = product.id;
    newUserProduct.uid = uid;
    console.log(newUserProduct);
  }

  render() {
    const { product } = this.props;

    return (
      <div className="SearchCard">
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{product.name}</CardTitle>
          <CardSubtitle>{product.brand} {product.category}</CardSubtitle>
          <CardText>Ingredients: {product.ingredients}</CardText>
          <Button onClick={this.saveProductEvent}>Add to my bag</Button>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default SearchCard;
