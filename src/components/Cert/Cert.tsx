import "./Cert.css";
import betImg from "../../assets/cert-Picsart-AiImageEnhancer.jpeg";
const Cert = () => {
  return (
    <div className="cert-main">
      <div
        className="primaryText yPaddings"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          paddingTop: "100px",
          paddingBottom: "30px",
          fontSize: "35px",
          fontWeight: "bold",
        }}
      >
        <p>Certification</p>{" "}
      </div>

      <div className="cert-div-img">
        <img src={betImg} />
      </div>
    </div>
  );
};

export default Cert;
