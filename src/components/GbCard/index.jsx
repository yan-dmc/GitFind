import gbIcon from "../../assets/gbIcon.png";
import './styles.css';

const GbCard = ({ currentUser }) => {
  return (
    <>
      {currentUser?.name ? (
        <>
          <div className="main">
            <figure>
              <img src={currentUser.avatar_url} alt="User avatar" /> {/* Usar a URL do avatar do usuário */}
            </figure>
            <div className="info">
              <div className="nome">
                <a href={currentUser.html_url} target="_blank" className="profileLink">{currentUser.name}</a> <br /> {/* Usar o nome do usuário */}
                <span className="arroba">@{currentUser.name}</span> {/* Usar o login do usuário */}
              </div>
              <div className="desc">{currentUser.bio}</div> {/* Usar a bio do usuário */}
            </div>
          </div>
          <hr />
        </>
      ) : null}
    </>
  );
};

export { GbCard };