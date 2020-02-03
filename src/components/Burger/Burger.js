import React from "react";
import BurgerIngredients from "../Burger/BurgerIngredients/BurgerIngredients";

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])]
      .map((_, i) => {
        return <BurgerIngredients key={igKey + i} type={igKey} />;
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);
  });
  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
