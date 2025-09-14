import Header from "@/components/templates/Header";
import Navbar from "../components/templates/Navbar";
import Feature from "@/components/templates/Feature";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        {/* <Feature /> */}
      </div>
    </>
  );
}
