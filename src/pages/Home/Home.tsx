import Hero from "../../components/Hero/Hero";
import PageCard from "../../components/Card/PageCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <PageCard
        title="Featured Post"
        subtitle="This is a wider card with supporting text below as a natural lead-in to additional content."
        img="https://source.unsplash.com/random"
      />
    </div>
  );
};

export default Home;
