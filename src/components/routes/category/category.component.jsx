import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

import { CategoriesContext } from "../../../contexts/categories.context";

import "./category.styles.scss";
import ProductCard from "../../product-card/product-card.component";
import { selectCategoriesMap } from "../../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setproducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setproducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
