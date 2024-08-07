import { Link } from "react-router-dom";
import FeaturesSection from "./FeaturesSection";
import CustomerReviews from "./CustomerReviews";
import BlogPosts from "./LatestBlog";
import LatestProducts from "../shop/LatestProducts";

const HomePage = () => {
  return (
    <>
      <div
        className="bg-contain bg-center h-[80vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/waiter-girl-working-with-pos-terminal-cashbox-cafe-people-service-concept_756748-48849.jpg?w=740')",
        }}
      >
        <div className="p-6 sm:p-10 lg:p-20 text-center max-w-lg sm:max-w-2xl">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            printexpress123
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6">
            printexpress123 is your one-stop solution for all your office
            needs. <br />
            We are an independent e-commerce platform providing small business
            and home office printers.
          </p>
          <Link
            to="/shop"
            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            SHOP NOW
          </Link>
        </div>
      </div>

      <FeaturesSection />
      <LatestProducts />
      <CustomerReviews />
      <BlogPosts />
    </>
  );
};

export default HomePage;
