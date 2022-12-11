import TodaContendio from "../hooks/TodaContendio";
import Mascotas from "../components/Mascotas";

function Blog() {
  const { perros } = TodaContendio();

  return (
    <div className="p-5 Blog">
      <div className="col-xs col-sm col-md col-xl-12">
        <Mascotas perros={perros} />
      </div>
    </div>
  );
}

export default Blog;
