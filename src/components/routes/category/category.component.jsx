import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

import { CategoriesContext } from "../../../contexts/categories.context";

import "./category.styles.scss";
import ProductCard from "../../product-card/product-card.component";
import Spinner from "../../spinner/spinner.component";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  console.log("render/re-rendering category");
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setproducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log("effect fire calling setProducts");
    setproducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
