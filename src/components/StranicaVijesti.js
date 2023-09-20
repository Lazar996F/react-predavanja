import { useContext, useEffect } from "react";
import { vijestiContext } from "../App";
import { usePostsWithUsers } from "../hooks/usePostsWithUsers";
import { toast } from "react-toastify";
import Accordion from "react-bootstrap/Accordion";

const StranicaVijesti = () => {
  //ucitavanje vijesti iz globalnog state-a
  //const vijestData = useContext(vijestiContext);
  const { postovi, korisnici, loading, greska } = usePostsWithUsers();

  useEffect(() => {
    if (greska) {
      toast.error("Doslo je do greske");
    }
  }, [loading]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>VIJESTI</h1>
      <p>Ukupno vijesti {postovi.length}</p>
      {postovi.map((jednaVijest) => (
        <div key={jednaVijest.id}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>{jednaVijest.title}</Accordion.Header>
              <Accordion.Body>{jednaVijest.body}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ))}
    </>
  );
};

export default StranicaVijesti;
