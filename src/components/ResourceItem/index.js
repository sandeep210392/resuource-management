import "./index.css";

const ResourceItem = (props) => {
  const { resourceDetails } = props;
  const { title, iconUrl, link, description, category } = resourceDetails;

  return (
    <li className="resource-item">
      <div>
        <div className="title-card">
          <img className="icon-img" src={`${iconUrl}`} alt="logo" />
          <div>
            <h1 className="title">{title}</h1>
            <p className="category">{category}</p>
          </div>
        </div>
        <a href={`${link}`}>{link}</a>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default ResourceItem;
