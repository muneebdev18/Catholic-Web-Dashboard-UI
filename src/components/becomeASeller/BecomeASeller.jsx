import SellerService from "../../assets/images/technologies/tech4.png";
import styles from "../../pages/website/Home/style.module.css";

const BecomeASeller = () => {
    return (
        <div className={`${styles.sellerServiceContainer}`}>
            <div className={styles.sellerServiceWrapper}>
                <div className={`${styles.sellerServiceBox}`}>
                    <img src={SellerService} alt="" />
                    <p className={`${styles.sellerServiceTitle}`}>
                        Join Our Faith-Based Community and Start <br /> Selling Your
                        Services!
                    </p>
                    <p className={`${styles.sellerServiceDesc}`}>
                        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                        eiusmod tempor incididunt.
                    </p>
                    <button className={`${styles.sellerServiceButton}`}>
                        Become a Seller
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BecomeASeller;