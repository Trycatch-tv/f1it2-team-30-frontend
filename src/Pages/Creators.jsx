import { Button, Card, Flex, Grid, Title } from "@tremor/react";
import Authenticated from "../Layouts/Menu";

function Creators() {
  return (
    <Authenticated
      header={
        <h2 className="font-semibold text-2xl text-gray-800 dark:text-[#404750] leading-tight">
          Creadores
        </h2>
      }
    >
      <Grid
        numItemsSm={3}
        numItemsLg={3}
        className="gap-6 mt-4 items-center bg-[#F8D442] p-6 rounded-2xl"
      >
        <Card>
          <Flex justifyContent="start" className="space-x-4">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="src/assets/media/JaimeCuellar.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <Title className="py-4">Jaime Alexander Cuéllar Segura</Title>
                <p className="py-2">
                  Developer Jr. FullStack | JS+React+Node.js | MySQL |
                  UX/UI+Sociologist
                </p>
                <div className="p-2">
                  <Button className="mr-5 ">
                    <a
                      target="_blank"
                      href="https://github.com/jaimecuellar"
                      rel="noreferrer"
                    >
                      <img src="src/assets/github-logo-24.png" alt="Shoes" />
                    </a>
                  </Button>
                  <Button className="btn btn-primary ">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/jaimeacuellars/"
                      rel="noreferrer"
                    >
                      <img
                        src="src/assets/linkedin-square-logo-24.png"
                        alt="Shoes"
                      />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Flex>
        </Card>
        <Card>
          <Flex justifyContent="start" className="space-x-4">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="src/assets/media/AlexanderFlores.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <Title className="py-4">
                  Alexander Flores (Lexandev) Rayme
                </Title>
                <p>⭐FRONTEND DEVELOPER | React | JavaScript ⭐</p>
                <div className="p-2">
                  <Button className="mr-5">
                    <a
                      target="_blank"
                      href="https://github.com/Lexand-dev"
                      rel="noreferrer"
                    >
                      <img src="src/assets/github-logo-24.png" alt="Shoes" />
                    </a>
                  </Button>
                  <Button className="btn btn-primary ">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/alexander-flores-lexandev-rayme-727545165/"
                      rel="noreferrer"
                    >
                      <img
                        src="src/assets/linkedin-square-logo-24.png"
                        alt="Shoes"
                      />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Flex>
        </Card>
        <Card>
          <Flex justifyContent="start" className="space-x-4">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="src/assets/media/JuanAcosta.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <Title className="py-4">Juan José Acosta Rico</Title>
                <p>
                  🧑‍💻 Ingeniero Informático | 👨‍💻 Programador | 🖥️📱 Diseñador Web
                </p>
                <div className="p-2">
                  <Button className="mr-5 ">
                    <a
                      target="_blank"
                      className=""
                      href="https://github.com/JuanJoseAcostaRico"
                      rel="noreferrer"
                    >
                      <img src="src/assets/github-logo-24.png" alt="Shoes" />
                    </a>
                  </Button>
                  <Button className="btn btn-primary ">
                    <a
                      target="_blank"
                      className=""
                      href="https://www.linkedin.com/in/juanjoseacostarico/"
                      rel="noreferrer"
                    >
                      <img
                        src="src/assets/linkedin-square-logo-24.png"
                        alt="Shoes"
                      />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Flex>
        </Card>
      </Grid>
    </Authenticated>
  );
}

export default Creators;
