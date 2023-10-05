import VerticalCard from "../../components/UI/VerticalCard";
import { servicesData } from "../../constants/MissionSections";
import classes from "./Home.module.css";

const Services = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSection} style={{ flexDirection: "column" }}>
        <div className={classes.titleContainer}>
          <h3>Nursing Methods</h3>
        </div>
        <div className={classes.serviceSubText}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting all
            industries. Lorem Ipsum is simply dummy text of the printing and
            typesetting all industries. Lorem Ipsum is simply dummy text of the
            printing and typesetting all industries.
          </p>
        </div>

        <div className={classes.cardContainer} style={{justifyContent:'center'}}>
    {servicesData.map((item, index) => {
        return (
            <div className={classes.verticalCardItem} key={index} >
                <VerticalCard title={item.title} text={item.text} image={item.image} />
            </div>


        )
    })}
    </div>
      </div>


    </div>
  );
};

export default Services;
