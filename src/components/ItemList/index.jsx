import './styles.css';

const ItemList = ({repos}) => {
  return (
    <>
        {repos?.length ? (
        <>
            <h1 className='ItemListH1'>Repositórios</h1>
            <ul>
                {repos.map((repo) => (
                    <li>
                        <div className="title">
                            <a className="repoLink" target='_blank' href={repo.html_url}>
                                {repo.name}
                            </a>
                        </div>
                        <div className="disc">{repo.description || "Sem descrição"}</div>
                        <hr />
                    </li>
                ))}
            </ul>
        </>
        ):(
            <p>Nenhum repositório encontrado.</p> // Mensagem para quando não há repositórios
        )}
    </>
  )
}

export { ItemList };
