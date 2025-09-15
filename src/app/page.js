import Header from "@/components/templates/Header";
import Navbar from "../components/templates/Navbar";
import Feature from "@/components/templates/Feature";
import Pro from "@/components/templates/Pro";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <Feature />
        <Pro />
      </div>
    </>
  );
}
