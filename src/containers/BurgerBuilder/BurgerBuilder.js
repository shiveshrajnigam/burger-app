import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import _ from "lodash";
import BuildControls from "../../components/Burger/BuildConrols/BuildControls";

const INGREDIENT_PRICES = {
  salad: 10,
  bacon: 20,
  cheese: 15,
  meat: 30
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false
  };

  updatePurchaseState(ingredients) {
    let arr = _.values(ingredients);
    console.log(_.sum(arr));
    return _.sum(arr) > 0;
  }

  addIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
      purchaseable: this.updatePurchaseState(updatedIngredients)
    });
  };

  removeIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount > 0 ? oldCount - 1 : oldCount;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice > 4 ? oldPrice - priceAddition : oldPrice;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
      purchaseable: this.updatePurchaseState(updatedIngredients)
    });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredients={this.addIngredientsHandler}
          removeIngredientsHandler={this.removeIngredientsHandler}
          disabled={disabledInfo}
          totalPrice={this.state.totalPrice}
          orderDisabled={!this.state.purchaseable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
