import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My Recent Projects</h1>
                <p className="pl-desc">
                    Click any of the pictures below to see my Projects!
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} text={item.p} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
