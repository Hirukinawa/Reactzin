import { listaVolumes } from "./listaVolumes";
import { getImage } from "./getImage";

export default function Molde() {
  const volumes = listaVolumes.map((novel) => (
    <ul key={novel.volume}>
      <img src={getImage(novel)} alt={novel.volume} />
      <p>Volume: {novel.volume}</p>
      <p>Arco: {novel.arco}</p>
      <button>
        <a href={novel.link}>Saiba mais</a>
      </button>
    </ul>
  ));

  return <article className="volumesLista">{volumes}</article>;
}
