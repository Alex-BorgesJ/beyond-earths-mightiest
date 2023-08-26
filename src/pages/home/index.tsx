import { EventPoster } from "../../components/EventPoster";
import FooterPage from "../../components/FooterPage";
import { GridCards } from "../../components/GridCards";
import Header from "../../components/Header";
import { useGetHeroes } from "../../service/query/useGetHeroes";


export function Home() {
  return (
    <div className ="app bg-white">
     <Header/>
     <main className="container">
      <EventPoster/>
      <GridCards/>
     </main>
     <FooterPage/>
    </div>
  );
}