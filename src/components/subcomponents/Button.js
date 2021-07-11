const Button = ({ text, primary }) => {
    return ( 
        <button className={`btn ${primary ? 'primary' : 'secondary'}`}>{ text }</button>
     );
}
 
export default Button;