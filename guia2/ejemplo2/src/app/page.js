import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div>
    <h2 className={styles.title}>Equipos de Fútbol</h2>
    <div className={styles.container__list}>

      {equipos.map((equipo) => (
        <div className={styles.info} key={equipo.id}>
               
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul>
            {equipo.plantilla.map((jugador) => (
      
              <div className={styles.container__list} key={jugador.id}>
                {jugador.Imagen && (
                  <img
                    src={jugador.Imagen}
                    alt={jugador.nombre}
                  />
                  )}
                  <div className={styles.name}>
                <strong>{jugador.nombre}</strong>
                <p>
                  Altura: {jugador.Altura}m <br /> Peso: {jugador.Peso}Kg
                </p>
              </div>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
};

export default function Home() {
  // Simula la obtención de datos desde tu JSON
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        {
          id: 1,nombre: "Eden Hazard",Altura: "1.75",Peso: "74Kg",Imagen:"https://phantom-marca-mx.unidadeditorial.es/df664815ec965603571f9a5cf0a1f195/resize/828/f/jpg/mx/assets/multimedia/imagenes/2024/02/03/17069586953729.jpg",},
        { id: 2, nombre: "Gonzalo García", Altura: "1.82", Peso: "74Kg",  Imagen: "https://publish-p47754-e237306.adobeaemcloud.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kibouup3gxwnnxp3vhz83af7/players/gonzalo-garcia-torres/assets/GONZALO_GARCIA.jpg"},
        { id: 3, nombre: "Karim Benzema", Altura: "1.85", Peso: "81Kg", Imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3lXnyw0eYURCWORwDPmI9ZTPW3upQ60ewA&s" },
      ],
    },
    {
      id: 2,
      nombre: "Barcelona",
      plantilla: [
        { id: 1, nombre: "Marc-André ter Stegen", Altura: "1.75", Peso: "74Kg", Imagen:"https://b.fssta.com/uploads/application/soccer/headshots/1835.vresize.350.350.medium.4.png"},
       { id: 2, nombre: "Iñigo Martinez", Altura: "1.82", Peso: "74Kg", Imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWTRtERuosQElN9FUefFAuBjvCKcha3yMhQ&s" },
        { id: 3, nombre: "Gavi", Altura: "1.85", Peso: "81Kg", Imagen:"https://i.pinimg.com/236x/6d/31/6e/6d316ef03f9fde22750b35e5d791ba21.jpg" },
      ],
    },
    {
      id: 3,
      nombre: "Manchester City",
      plantilla: [
        { id: 1, nombre: "Erling Haaland", Altura: "1.94", Peso: "88Kg", Imagen:"https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250103758.webp" },
        { id: 2, nombre: "Kevin de Bruyne", Altura: "1.81", Peso: "68Kg", Imagen:"https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250008901.webp" },
        { id: 3, nombre: "Ruben Dias", Altura: "1.87", Peso: "76Kg", Imagen:"https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250058220.webp" },
      ],
    },
    {
      id: 4,
      nombre: "Manchester City",
      plantilla: [
        { id: 1, nombre: "Erling Haaland", Altura: "1.94", Peso: "88Kg", Imagen:"https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250103758.webp" },
        { id: 2, nombre: "Kevin de Bruyne", Altura: "1.81", Peso: "68Kg", Imagen:"https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250008901.webp" },
        { id: 3, nombre: "Ruben Dias", Altura: "1.87", Peso: "76Kg", Imagen:"https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250058220.webp" },
      ],
    },
    {
      id: 5,
      nombre: "Real Madrid",
      plantilla: [
        {
          id: 1,nombre: "Eden Hazard",Altura: "1.75",Peso: "74Kg",Imagen:"https://phantom-marca-mx.unidadeditorial.es/df664815ec965603571f9a5cf0a1f195/resize/828/f/jpg/mx/assets/multimedia/imagenes/2024/02/03/17069586953729.jpg",},
        { id: 2, nombre: "Gonzalo García", Altura: "1.82", Peso: "74Kg",  Imagen: "https://publish-p47754-e237306.adobeaemcloud.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kibouup3gxwnnxp3vhz83af7/players/gonzalo-garcia-torres/assets/GONZALO_GARCIA.jpg"},
        { id: 3, nombre: "Karim Benzema", Altura: "1.85", Peso: "81Kg", Imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3lXnyw0eYURCWORwDPmI9ZTPW3upQ60ewA&s" },
      ],
    },

    {
      id: 6,
      nombre: "Barcelona",
      plantilla: [
        { id: 1, nombre: "Marc-André ter Stegen", Altura: "1.75", Peso: "74Kg", Imagen:"https://b.fssta.com/uploads/application/soccer/headshots/1835.vresize.350.350.medium.4.png"},
       { id: 2, nombre: "Iñigo Martinez", Altura: "1.82", Peso: "74Kg", Imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWTRtERuosQElN9FUefFAuBjvCKcha3yMhQ&s" },
        { id: 3, nombre: "Gavi", Altura: "1.85", Peso: "81Kg", Imagen:"https://i.pinimg.com/236x/6d/31/6e/6d316ef03f9fde22750b35e5d791ba21.jpg" },
      ],
    },
  ];

  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}
