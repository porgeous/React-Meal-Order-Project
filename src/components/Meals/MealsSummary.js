import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered to You</h2>
      <p>
        Choose your favorite meal from our broad selection of available dishes
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All of our meals are cooked with the highest-quality ingredients by our
        experienced chefs with just-in-time availability!
      </p>
    </section>
  );
};

export default MealsSummary;