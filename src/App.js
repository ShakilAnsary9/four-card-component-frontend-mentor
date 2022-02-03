import "./App.css";
import Card from "./component/Card";
import Text from "./component/Text";
import calculator from "./images/icon-calculator.svg";
import karma from "./images/icon-karma.svg";
import supervisor from "./images/icon-supervisor.svg";
import teambuilder from "./images/icon-team-builder.svg";

export default function App() {
  return (
    <div className="App">
      <div className="text-flex">
        <Text name={"Technology"} />
      </div>
      <div className="card-flex">
        <div className="card-holder">
          <div className="middle">
            <Card
              cardname={"Supervisor"}
              borderline={{ borderTop: "5px solid hsl(180, 62%, 55%)" }}
              para="Monitors activity to identify project roadblocks"
              icon={supervisor}
            />
          </div>
          <div>
            <Card
              cardname={"Team Builder"}
              borderline={{ borderTop: "5px solid hsl(0, 78%, 62%)" }}
              para="Scans our talent network to create the optimal team for your project"
              icon={teambuilder}
            />
            <br />
            <br />
            <Card
              cardname={"Karma"}
              borderline={{ borderTop: "5px solid hsl(34, 97%, 64%)" }}
              para="Regularly evaluates our talent to ensure quality"
              icon={karma}
            />
          </div>
          <div className="middle">
            <Card
              cardname={"Calculator"}
              borderline={{ borderTop: "5px solid hsl(212, 86%, 64%)" }}
              para="Uses data from past projects to provide better delivery estimates"
              icon={calculator}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
