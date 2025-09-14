import Header from "@/components/templates/Header";
import Navbar from "../components/templates/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
      </div>
    </>
  );
}
