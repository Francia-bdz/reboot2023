import Link from "next/link";
import styles from "./intro.module.scss";
export default function page() {
  return (
    <div>
      <h1>Bienvenue</h1>
      <p>
        Voici le contexte : Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Perspiciatis iure sint quod fugit consequatur voluptate delectus
        voluptatibus possimus nostrum. Libero voluptatem, temporibus sint sed
        exercitationem reprehenderit amet? Optio, autem pariatur?
        <Link href="/story1">Commencer l'histoire ?</Link>
      </p>
    </div>
  );
}
