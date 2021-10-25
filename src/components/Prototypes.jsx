import useActions from "../hooks/useActions";
import usePrototypes from "../hooks/usePrototypes";

export default function Prototypes() {
  const prototypes = usePrototypes();
  const { addToOrder } = useActions();
  return (
    <main>
      <div
        className="prototypes"
        style={{ display: "flex", overflow: "hidden" }}
      >
        {prototypes.map((prototype) => {
          const { id, thumbnail, title, price, desc, pieUrl } = prototype;
          const click = () => {
            addToOrder(id);
          };
          return (
            <div
              className="prototype"
              style={{
                backgroundColor: "red",
                border: "1px solid black",
              }}
              key={id}
            >
              <a href={pieUrl} rel="noreferrer" target="_blank">
                <div>
                  <img
                    className="prototype__artwork prototype__edit"
                    src={thumbnail}
                    alt={title}
                    style={{
                      overflow: "hidden",
                      width: "100px",
                      height: "200px",
                    }}
                  ></img>
                </div>
              </a>
              <div className="prototype__body">
                <div className="prototype__title">
                  <div
                    className="btn btn--primary float--right"
                    style={{
                      height: "30px",
                      width: "30px",
                      backgroundColor: "black",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: "column",
                      color: "white",
                      fontSize: "20px",
                    }}
                    onClick={click}
                  >
                    <i className="icon icon--plus">+</i>
                  </div>
                  {title}
                </div>
                <p className="prototype__price">$ {price}</p>
                <p className="prototype__desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
