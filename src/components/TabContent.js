import Button from './subcomponents/Button';

const TabContent = ({ tabs, active }) => {
  return (
    <div className="tab-content">
      <div className="content-img">
        <img src={tabs[active].img} alt="Hero" />
      </div>

      <div className="content-description">
        <h4 className="inner-header">{tabs[active].header}</h4>
        <p>{tabs[active].body}</p>

        <Button text="More info" primary={true} />
      </div>
    </div>
  );
};

export default TabContent;
