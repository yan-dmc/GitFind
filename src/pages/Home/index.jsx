import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { GbCard } from "../../components/GbCard";
import { ItemList } from "../../components/ItemList";
import background from "../../assets/background.png";
import './styles.css';
import { useState } from "react";

const App = () => {
    const [user, setUser] = useState('yan-dmc');
    const [currentUser, setCurrentUser] = useState(null);
    const [repos, setRepos] = useState(null);
    const handleGetData = async () => {
        try {
          const userData = await fetch(`https://api.github.com/users/${user}`);
          if (!userData.ok) {
            throw new Error('Usuário não encontrado');
          }
          const newUser = await userData.json();
          console.log("Dados do usuário:", newUser);
      
          if (newUser && newUser.name) {
            const { avatar_url, name, bio, login, html_url } = newUser;
            setCurrentUser({ avatar_url, name, bio, login, html_url });
      
            const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
            if (!reposData.ok) {
              throw new Error('Erro ao buscar repositórios');
            }
            const newRepos = await reposData.json();
            console.log("Repositórios:", newRepos);
      
            setRepos(newRepos || []); 
          }
        } catch (error) {
          console.error("Erro:", error);
          setCurrentUser(null); 
          setRepos([]);
        }
      };
      

    return (
        <>
            <Header />
            <div className="App">
                <div className="bg" style={{backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "left", height: "100vh"}}>
                    <div className="content">
                        <div className="search">
                            <div><Input user={user} setUser={setUser}/></div>
                            <div><Button onClick={handleGetData} valor={"Buscar"}/></div>
                        </div>
                        <div className="gbCard">
                            <GbCard currentUser={currentUser} />
                        </div>
                        <div className="repositorios">
                            <ItemList repos={repos}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;