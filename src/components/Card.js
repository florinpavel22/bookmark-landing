import Button from "./subcomponents/Button";

const Card = ({ contents }) => {
    return ( 
        <div className="card-container">
            <img src={ contents.logo } alt="Logo" />
            <h5>{ contents.header }</h5>
            <p>{ contents.subheader }</p>
            <Button text="Add & Install Extension" primary={true} />
        </div>
     );
}
 
export default Card;