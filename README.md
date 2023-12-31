# Aplicativo Web - MERN

<!-- ## Propuesta Comercial -->

# <strong>SOPORTE TÉCNICO Y MANTENIMIENTO DE EQUIPOS INFORMATICOS.</strong> 

El mercado para esta idea de negocio es bastante amplio y diverso, donde abarca desde individuos hasta grandes empresas de diferentres tamaños e instituciones como lo son la educacion, el estado, la salud, entre otras.

Todos estos sectores traen una demanda constante de servicios que abarcan desde la resolución de problemas técnicos hasta el mantenimiento preventivo y la seguridad de datos.

La propuesta de valor se centra en la calidad del servicio, la disponibilidad, la personalización y la seguridad. Un ejemplo del modelo de negocios podria ser el siguiente:

1. Segmentos de Cliente:

    - Empresas pequeñas y medianas.
    - Usuarios individuales.
    - Instituciones educativas.
    - Organizaciones sin fines de lucro.

2. Propuesta de Valor:

    - Mantenimiento preventivo y correctivo.
    - Respuesta rápida a emergencias.
    - Soluciones adaptadas a las necesidades de cada cliente.

3. Canales de Distribución:

    - Sitio web y presencia en redes sociales.
    - Alianzas con empresas de tecnología.
    - Publicidad en línea y marketing digital.

4. Relaciones con los Clientes:

    - Atención al cliente personalizada.
    - Comunicación continua para resolver problemas.
    - Encuestas de satisfacción para recopilar comentarios.

5. Fuentes de Ingresos:

    - Tarifas por hora de servicio.
    - Contratos de mantenimiento mensuales.
    - Servicios adicionales, como ventas de hardware.

6. Recursos Clave:

    - Personal técnico altamente calificado.
    - Herramientas de diagnóstico y reparación.
    - Alianzas estratégicas con proveedores.

7. Actividades Clave:

    - Soporte técnico remoto y en sitio.
    - Mantenimiento programado.
    - Capacitación de clientes.

8. Socios Clave:

    - Proveedores de hardware y software.
    - Empresas de servicios de tecnología.
    - Organizaciones locales y cámaras de comercio.

9. Estructura de Costos:

    - Sueldos y salarios del personal técnico.
    - Herramientas y equipos de diagnóstico.
Gastos de marketing y publicidad.

10. Flujo de Ingresos:

    - Ingresos constantes de contratos de mantenimiento.
    - Ingresos por servicios de soporte técnico.
    - Ingresos adicionales por la venta de hardware y software.


Este modelo de negocio se centra en brindar servicios de alta calidad a una variedad de clientes, manteniendo relaciones sólidas y generando ingresos tanto a través de tarifas por servicio como de contratos de mantenimiento recurrentes. Los recursos clave incluyen personal altamente capacitado y herramientas especializadas para brindar un servicio eficiente y satisfactorio a los clientes.

Por ultimo, en cuanto a la estrategia de monetización, esta puede variar según el enfoque y el público objetivo de la propuesta comercial. Es común combinar varios métodos para diversificar las fuentes de ingresos y adaptarse a las necesidades de los clientes.




## BASE DE DATOS 

### Diagrama de base de datos no realacionales
<img src="./db.png" width="700rem">
<br>

Nota: Se anexo una llave-valor a la coleccion "equipos" llamada "nombre" con el fin de complementar un poco la coleccion dandole un nombre al equipo.

### Wireframes 
<img src="./figma1.jpg">
<img src="./figma2.jpg">
<img src="./figma3.jpg">

<br>
Estas tres imagenes reflejan Inicio, Usuarios, y Equipos respectivamente.

Se ve contemplado, que la pag de Inicio es algo sencilla, la pag de Usuarios, ya recorre la API y tiene los botones de editar y eliminar. Finalmente la pag de Equipo que evidencia solo los datos proporcionados por una API.

Anexo link del figma: https://www.figma.com/file/MhzhckZy6oq7arCnKaLkkO/Untitled?type=design&node-id=0%3A1&mode=design&t=v8DEd8lm3ZqcpNX4-1


## ESTRUCTURA BASE DE DATOS

En la web, dentro de MongoDB Atlas, en mi cuenta, se creo un nuevo proyecto "Campus". Dentro de se creo nuestra base de datos "computers". Una vez creada obtuvimos el link de conexion y seguimos trabajando en el MongoDB Compass con el fin de manejar su consola independiente para poder anexar cada uno de las colecciones y documentos de la base de datos.

Una vez creada la base de datos, se realizo la debida conexion desde el sistema principal, esta conexion las realizamos de dos maneras:
  1. Por medio de "mongoose":  esta conexion se puede ver en el archivo "config.js", donde se crea y exporta una funcion para conectar a la base de datos. Despues en el archivo principal, "index.js" la importamos y ejecutamos dicha funcion.
  2. Por medio de "MongoClient": esta es una conexion directa a la base de datos.

Cabe recordar que para realizar cualquiera de las dos conexiones se utilizaron las variables de entorno, es por eso que se creo un archivo ".env" con las variables: PORT (puerto de conexion) y MONGO_URI (link de la base de datos).

La siguiente parte es una descripción de nuestra base de datos que contiene información sobre equipos, actividades, usuarios y más. Es decir, las colecciones con sus respectivos documentos.

## Basde de datos "computers"

```json
use computers

// 1. GENEROS //
db.generos.insertMany([
    {genero: "Masculino"},
    {genero: "Femenino"}, 
    {genero: "otro"}
]);


// 2. ROLES //
db.roles.insertMany([
  { rol: "Camper" },
  { rol: "Trainer" },
  { rol: "Psicologo(a)" },
  { rol: "Teacher" },
  { rol: "Coworking" },
  { rol: "Invitado" },
  { rol: "Lider" }
]);


// 3. USUARIOS //
db.usuarios.insertMany([
  {
    nombreUsuario: "JuanPerez",
    cedula: "12345",
    nombre: "Juan",
    apellido: "Pérez",
    correo: "juan@example.com",
    genero: ObjectId("6511c9f1160b1b9e7c5c0783"),
    rol: ObjectId("6511cb87160b1b9e7c5c0787")
  },
  {
    nombreUsuario: "MariaLopez",
    cedula: "67890",
    nombre: "María",
    apellido: "López",
    correo: "maria@example.com",
    genero: ObjectId("6511ca60160b1b9e7c5c0784"),
    rol: ObjectId("6511cb87160b1b9e7c5c0788")
  },
  {
    nombreUsuario: "AnaGarcia",
    cedula: "13579",
    nombre: "Ana",
    apellido: "García",
    correo: "ana@example.com",
    genero: ObjectId("6511ca60160b1b9e7c5c0784"),
    rol: ObjectId("6511cb87160b1b9e7c5c0786")
  },
  {
    nombreUsuario: "LuisHernandez",
    cedula: "24680",
    nombre: "Luis",
    apellido: "Hernández",
    correo: "luis@example.com",
    genero: ObjectId("6511c9f1160b1b9e7c5c0783"),
    rol: ObjectId("6511cb87160b1b9e7c5c078a")
  },
  {
    nombreUsuario: "ElenaRodriguez",
    cedula: "97531",
    nombre: "Elena",
    apellido: "Rodríguez",
    correo: "elena@example.com",
    genero: ObjectId("6511ca60160b1b9e7c5c0784"),
    rol: ObjectId("6511cb87160b1b9e7c5c078b")
  },
  {
    nombreUsuario: "MariaPerez",
    cedula: "86420",
    nombre: "Maria",
    apellido: "Perez",
    correo: "maria@example.com",
    genero: ObjectId("6511ca60160b1b9e7c5c0785"),
    rol: ObjectId("6511cb87160b1b9e7c5c0788")
  },
  {
    nombreUsuario: "CarlosGomez",
    cedula: "75319",
    nombre: "Carlos",
    apellido: "Gomez",
    correo: "carlos@example.com",
    genero: ObjectId("6511ca60160b1b9e7c5c0784"),
    rol: ObjectId("6511cb87160b1b9e7c5c0787")
  },
  {
    nombreUsuario: "LauraMartinez",
    cedula: "98765",
    nombre: "Laura",
    apellido: "Martinez",
    correo: "laura@example.com",
    genero: ObjectId("6511ca60160b1b9e7c5c0785"),
    rol: ObjectId("6511cb87160b1b9e7c5c0789")
  },
  {
    nombreUsuario: "PedroSanchez",
    cedula: "36987",
    nombre: "Pedro",
    apellido: "Sanchez",
    correo: "pedro@example.com",
    genero: ObjectId("6511c9f1160b1b9e7c5c0783"),
    rol: ObjectId("6511cb87160b1b9e7c5c078c")
  },
  {
    nombreUsuario: "IsabelLopez",
    cedula: "85214",
    nombre: "Isabel",
    apellido: "Lopez",
    correo: "isabel@example.com",
    genero: ObjectId("6511ca60160b1b9e7c5c0784"),
    rol: ObjectId("6511cb87160b1b9e7c5c0786")
  }
]);


// 4. TECLADOS //
db.teclados.insertMany([
  {
    n_bien: "KB12345",
    n_serie: "SN56789",
    marca: "Logitech",
    modelo: "K480"
  },
  {
    n_bien: "KB67890",
    n_serie: "SN12345",
    marca: "Microsoft",
    modelo: "Wireless 900"
  },
  {
    n_bien: "KB24680",
    n_serie: "SN98765",
    marca: "HP",
    modelo: "Classic Desktop"
  },
  {
    n_bien: "KB13579",
    n_serie: "SN54321",
    marca: "Corsair",
    modelo: "K70 RGB"
  },
  {
    n_bien: "KB97531",
    n_serie: "SN67890",
    marca: "Razer",
    modelo: "BlackWidow Elite"
  },
  {
    n_bien: "KB11111",
    n_serie: "SN11111",
    marca: "ASUS",
    modelo: "ROG Strix Flare"
  },
  {
    n_bien: "KB22222",
    n_serie: "SN22222",
    marca: "SteelSeries",
    modelo: "Apex Pro TKL"
  },
  {
    n_bien: "KB33333",
    n_serie: "SN33333",
    marca: "Ducky",
    modelo: "One 2 Mini"
  },
  {
    n_bien: "KB44444",
    n_serie: "SN44444",
    marca: "Cooler Master",
    modelo: "MasterKeys Pro L"
  },
  {
    n_bien: "KB55555",
    n_serie: "SN55555",
    marca: "HyperX",
    modelo: "Alloy FPS Pro"
  }
]);


// 5. RATONES //
db.ratones.insertMany([
  {
    n_bien: "MOU12345",
    n_serie: "SN1234",
    marca: "Logitech",
    modelo: "MX Master 3"
  },
  {
    n_bien: "MOU67890",
    n_serie: "SN5678",
    marca: "Microsoft",
    modelo: "Wireless Mobile Mouse 3500"
  },
  {
    n_bien: "MOU24680",
    n_serie: "SN9876",
    marca: "HP",
    modelo: "X3000"
  },
  {
    n_bien: "MOU13579",
    n_serie: "SN5432",
    marca: "Corsair",
    modelo: "Dark Core RGB/SE"
  },
  {
    n_bien: "MOU97531",
    n_serie: "SN6789",
    marca: "Razer",
    modelo: "DeathAdder Elite"
  },
  {
    n_bien: "MOU11111",
    n_serie: "SN1111",
    marca: "SteelSeries",
    modelo: "Rival 600"
  },
  {
    n_bien: "MOU22222",
    n_serie: "SN2222",
    marca: "Logitech",
    modelo: "G Pro Wireless"
  },
  {
    n_bien: "MOU33333",
    n_serie: "SN3333",
    marca: "Corsair",
    modelo: "Harpoon RGB"
  },
  {
    n_bien: "MOU44444",
    n_serie: "SN4444",
    marca: "Microsoft",
    modelo: "Surface Precision Mouse"
  },
  {
    n_bien: "MOU55555",
    n_serie: "SN5555",
    marca: "ASUS",
    modelo: "ROG Gladius II"
  }
]);


// 6. MONITORES //
db.monitores.insertMany([
  {
    n_bien: "MON12345",
    n_serie: "SN1234",
    tipo: "LED",
    marca: "Dell",
    modelo: "UltraSharp U2719D"
  },
  {
    n_bien: "MON67890",
    n_serie: "SN5678",
    tipo: "LCD",
    marca: "HP",
    modelo: "Pavilion 22cwa"
  },
  {
    n_bien: "MON24680",
    n_serie: "SN9876",
    tipo: "LED",
    marca: "Acer",
    modelo: "R240HY"
  },
  {
    n_bien: "MON13579",
    n_serie: "SN5432",
    tipo: "LED",
    marca: "Asus",
    modelo: "VG279Q"
  },
  {
    n_bien: "MON97531",
    n_serie: "SN6789",
    tipo: "LCD",
    marca: "LG",
    modelo: "24MK400H-B"
  },
  {
    n_bien: "MON11111",
    n_serie: "SN1111",
    tipo: "LED",
    marca: "Samsung",
    modelo: "Samsung S27R750Q"
  },
  {
    n_bien: "MON22222",
    n_serie: "SN2222",
    tipo: "LCD",
    marca: "AOC",
    modelo: "AOC CQ32G1"
  },
  {
    n_bien: "MON33333",
    n_serie: "SN3333",
    tipo: "LED",
    marca: "ViewSonic",
    modelo: "ViewSonic XG270QG"
  },
  {
    n_bien: "MON44444",
    n_serie: "SN4444",
    tipo: "LED",
    marca: "HP",
    modelo: "HP Omen X 27"
  },
  {
    n_bien: "MON55555",
    n_serie: "SN5555",
    tipo: "LCD",
    marca: "Dell",
    modelo: "Dell S2719DGF"
  }
]);


// 7. OTROS //
db.otros.insertMany([
  {
    dispositivo: "Impresora",
    n_bien: "IMP12345",
    n_serie: "SN1234",
    marca: "Epson",
    modelo: "WorkForce Pro WF-4740"
  },
  {
    dispositivo: "Escáner",
    n_bien: "ESC67890",
    n_serie: "SN5678",
    marca: "Canon",
    modelo: "CanoScan LiDE 400"
  },
  {
    dispositivo: "Proyector",
    n_bien: "PRO24680",
    n_serie: "SN9876",
    marca: "BenQ",
    modelo: "MH733"
  },
  {
    dispositivo: "Teléfono IP",
    n_bien: "TEL13579",
    n_serie: "SN5432",
    marca: "Polycom",
    modelo: "VVX 411"
  },
  {
    dispositivo: "Router",
    n_bien: "ROU97531",
    n_serie: "SN6789",
    marca: "Linksys",
    modelo: "AC1750"
  }
]);


// 8. MEMORIAS //
db.memorias.insertMany([
  {
    marca: "Seagate",
    capacidad: "1 TB"
  },
  {
    marca: "Western Digital",
    capacidad: "512 GB"
  },
  {
    marca: "Samsung",
    capacidad: "2 TB"
  },
  {
    marca: "Crucial",
    capacidad: "256 GB"
  },
  {
    marca: "SanDisk",
    capacidad: "500 GB"
  },
  {
    marca: "Kingston",
    capacidad: "1 TB"
  },
  {
    marca: "Corsair",
    capacidad: "512 GB"
  },
  {
    marca: "ADATA",
    capacidad: "2 TB"
  },
  {
    marca: "Transcend",
    capacidad: "256 GB"
  },
  {
    marca: "HyperX",
    capacidad: "1 TB"
  }
]);


// 9. DISCOS //
db.discos.insertMany([
  {
    disco_duro: "Seagate Barracuda 2TB HDD"
  },
  {
    disco_duro: "Western Digital Blue 1TB HDD"
  },
  {
    disco_duro: "Samsung 860 EVO 500GB SSD"
  },
  {
    disco_duro: "Crucial MX500 1TB SSD"
  },
  {
    disco_duro: "Toshiba P300 3TB HDD"
  },
  {
    disco_duro: "SanDisk Ultra 2TB SSD"
  },
  {
    disco_duro: "Western Digital Red 4TB HDD"
  },
  {
    disco_duro: "Kingston A2000 500GB NVMe SSD"
  },
  {
    disco_duro: "Seagate IronWolf 6TB HDD"
  },
  {
    disco_duro: "Samsung 970 EVO 1TB NVMe SSD"
  }
]);


// 10. TORRES //
db.torres.insertMany([
  {
    n_bien: "TOWER001",
    n_serie: "SN1234",
    tipo: "Torre de escritorio",
    marca: "Dell",
    modelo: "OptiPlex 3050",
    procesador: "Intel Core i5",
    disco_duro: ObjectId("6512c76a160b1b9e7c5c07ab"),
    memoria: ObjectId("6512c728160b1b9e7c5c07a6")
  },
  {
    n_bien: "TOWER002",
    n_serie: "SN5678",
    tipo: "Torre de servidor",
    marca: "HP",
    modelo: "ProLiant DL360 Gen10",
    procesador: "Intel Xeon",
    disco_duro: ObjectId("6512c76a160b1b9e7c5c07ac"),
    memoria: ObjectId("6512c728160b1b9e7c5c07a7")
  },
  {
    n_bien: "TOWER003",
    n_serie: "SN9876",
    tipo: "Torre de escritorio",
    marca: "Lenovo",
    modelo: "ThinkCentre M710q",
    procesador: "Intel Core i7",
    disco_duro: ObjectId("6512c76a160b1b9e7c5c07ad"),
    memoria: ObjectId("6512c728160b1b9e7c5c07a8")
  },
  {
    n_bien: "TOWER004",
    n_serie: "SN5432",
    tipo: "Torre de servidor",
    marca: "Dell",
    modelo: "PowerEdge R740",
    procesador: "Intel Xeon",
    disco_duro: ObjectId("6512c76a160b1b9e7c5c07ae"),
    memoria: ObjectId("6512c728160b1b9e7c5c07a9")
  },
  {
    n_bien: "TOWER005",
    n_serie: "SN6789",
    tipo: "Torre de escritorio",
    marca: "HP",
    modelo: "EliteDesk 800 G5",
    procesador: "Intel Core i9",
    disco_duro: ObjectId("6512c76a160b1b9e7c5c07af"),
    memoria: ObjectId("6512c728160b1b9e7c5c07aa")
  },
  {
    n_bien: "TOWER006",
    n_serie: "SN2468",
    tipo: "Torre de escritorio",
    marca: "Acer",
    modelo: "Aspire TC-885",
    procesador: "Intel Core i3",
    disco_duro: ObjectId("651d99c447c9d2ebddde6605"),
    memoria: ObjectId("651d99c547c9d2ebddde660a")
  },
  {
    n_bien: "TOWER007",
    n_serie: "SN1357",
    tipo: "Torre de servidor",
    marca: "IBM",
    modelo: "System x3550 M5",
    procesador: "Intel Xeon",
    disco_duro: ObjectId("651d99c447c9d2ebddde6606"),
    memoria: ObjectId("651d99c547c9d2ebddde660b")
  },
  {
    n_bien: "TOWER008",
    n_serie: "SN8024",
    tipo: "Torre de escritorio",
    marca: "Asus",
    modelo: "ROG Strix G15",
    procesador: "AMD Ryzen",
    disco_duro: ObjectId("651d99c447c9d2ebddde6607"),
    memoria: ObjectId("651d99c547c9d2ebddde660c")
  },
  {
    n_bien: "TOWER009",
    n_serie: "SN9631",
    tipo: "Torre de servidor",
    marca: "Cisco",
    modelo: "UCS C220 M5",
    procesador: "Intel Xeon",
    disco_duro: ObjectId("651d99c447c9d2ebddde6608"),
    memoria: ObjectId("651d99c547c9d2ebddde660d")
  },
  {
    n_bien: "TOWER010",
    n_serie: "SN5742",
    tipo: "Torre de escritorio",
    marca: "Toshiba",
    modelo: "Satellite Pro C50",
    procesador: "Intel Core i5",
    disco_duro: ObjectId("651d99c447c9d2ebddde6609"),
    memoria: ObjectId("651d99c547c9d2ebddde660e")
  }
]);


// 11. ESTADOS //
db.estados.insertMany([
  {
    estado: "Operativo"
  },
  {
    estado: "En reparación"
  },
  {
    estado: "Descompuesto"
  },
  {
    estado: "En mantenimiento"
  },
  {
    estado: "En espera de piezas"
  }
]);

// 12. EQUIPOS //
db.equipos.insertMany([
  {
    nombre: "Equipo 1",
    estado: ObjectId("6512c969160b1b9e7c5c07b5"),
    torre: ObjectId("6512c8f1160b1b9e7c5c07b0"),
    monitor: ObjectId("6512c5b1160b1b9e7c5c079c"),
    teclado: ObjectId("6512c48d160b1b9e7c5c0792"),
    raton: ObjectId("6512c556160b1b9e7c5c0797"),
    otro: ObjectId("6512c60d160b1b9e7c5c07a1")
  },
  {
    nombre: "Equipo 2",
    estado: ObjectId("6512c969160b1b9e7c5c07b6"),
    torre: ObjectId("6512c8f1160b1b9e7c5c07b1"),
    monitor: ObjectId("6512c5b1160b1b9e7c5c079d"),
    teclado: ObjectId("6512c48d160b1b9e7c5c0793"),
    raton: ObjectId("6512c556160b1b9e7c5c0798"),
    otro: ObjectId("6512c60d160b1b9e7c5c07a2")
  },
  {
    nombre: "Equipo 3",
    estado: ObjectId("6512c969160b1b9e7c5c07b7"),
    torre: ObjectId("6512c8f1160b1b9e7c5c07b2"),
    monitor: ObjectId("6512c5b1160b1b9e7c5c079e"),
    teclado: ObjectId("6512c48d160b1b9e7c5c0794"),
    raton: ObjectId("6512c556160b1b9e7c5c0799"),
    otro: ObjectId("6512c60d160b1b9e7c5c07a3")
  },
  {
    nombre: "Equipo 4",
    estado: ObjectId("6512c969160b1b9e7c5c07b8"),
    torre: ObjectId("6512c8f1160b1b9e7c5c07b3"),
    monitor: ObjectId("6512c5b1160b1b9e7c5c079f"),
    teclado: ObjectId("6512c48d160b1b9e7c5c0795"),
    raton: ObjectId("6512c556160b1b9e7c5c079a"),
    otro: ObjectId("6512c60d160b1b9e7c5c07a4")
  },
  {
    nombre: "Equipo 5",
    estado: ObjectId("6512c969160b1b9e7c5c07b9"),
    torre: ObjectId("6512c8f1160b1b9e7c5c07b4"),
    monitor: ObjectId("6512c5b1160b1b9e7c5c07a0"),
    teclado: ObjectId("6512c48d160b1b9e7c5c0796"),
    raton: ObjectId("6512c556160b1b9e7c5c079b"),
    otro: ObjectId("6512c60d160b1b9e7c5c07a5")
  },
  {
    nombre: "Equipo PC 6",
    estado: ObjectId("6512c969160b1b9e7c5c07b9"),
    torre: ObjectId("651d9c4147c9d2ebddde6646"),
    monitor: ObjectId("651d99c547c9d2ebddde6610"),
    teclado: ObjectId("651d99c547c9d2ebddde661b"),
    raton: ObjectId("651d99c547c9d2ebddde6615"),
    otro: ObjectId("6512c60d160b1b9e7c5c07a4")
  },
  {
    nombre: "Equipo PC 7",
    estado: ObjectId("6512c969160b1b9e7c5c07b7"),
    torre: ObjectId("651d9c4147c9d2ebddde6649"),
    monitor: ObjectId("651d99c547c9d2ebddde6611"),
    teclado: ObjectId("651d99c547c9d2ebddde661a"),
    raton: ObjectId("651d99c547c9d2ebddde6618"),
    otro: ObjectId("6512c60d160b1b9e7c5c07a3")
  },
  {
    nombre: "Equipo PC 8",
    estado: ObjectId("6512c969160b1b9e7c5c07b6"),
    torre: ObjectId("651d9c4147c9d2ebddde6647"),
    monitor: ObjectId("651d99c547c9d2ebddde6612"),
    teclado: ObjectId("651d99c547c9d2ebddde661c"),
    raton: ObjectId("651d99c547c9d2ebddde6616"),
    otro: ObjectId("6512c60d160b1b9e7c5c07a2")
  },
  {
    nombre: "Equipo PC 9",
    estado: ObjectId("6512c969160b1b9e7c5c07b5"),
    torre: ObjectId("651d9c4147c9d2ebddde6648"),
    monitor: ObjectId("651d99c547c9d2ebddde6613"),
    teclado: ObjectId("651d99c547c9d2ebddde661d"),
    raton: ObjectId("651d99c547c9d2ebddde6614"),
    otro: ObjectId("6512c60d160b1b9e7c5c07a1")
  },
  {
    nombre: "Equipo PC 10",
    estado: ObjectId("6512c969160b1b9e7c5c07b8"),
    torre: ObjectId("651d9c4147c9d2ebddde664a"),
    monitor: ObjectId("651d99c547c9d2ebddde6613"),
    teclado: ObjectId("651d99c547c9d2ebddde661e"),
    raton: ObjectId("651d99c547c9d2ebddde6617"),
    otro: ObjectId("6512c60d160b1b9e7c5c07a5")
  }
]
);


// 13. TIPOS ACTIVIDADES //
db.tipos.insertMany([
  {
    tipo: "Mantenimiento preventivo"
  },
  {
    tipo: "Reparación de hardware"
  },
  {
    tipo: "Instalación de software"
  },
  {
    tipo: "Actualización de controladores"
  },
  {
    tipo: "Limpieza de virus y malware"
  }
]);


// 14. ACTIVIDADES //
db.actividades.insertMany([
  {
    usuario: ObjectId("6511cddd160b1b9e7c5c078d"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c4"),
    equipo: ObjectId("6512cf14160b1b9e7c5c07bf")
  },
  {
    usuario: ObjectId("6511cddd160b1b9e7c5c078e"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c5"),
    equipo: ObjectId("6512cf14160b1b9e7c5c07c0")
  },
  {
    usuario: ObjectId("6511cf81160b1b9e7c5c078f"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c6"),
    equipo: ObjectId("6512cf14160b1b9e7c5c07c1")
  },
  {
    usuario: ObjectId("6511cf81160b1b9e7c5c0790"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c7"),
    equipo: ObjectId("6512cf14160b1b9e7c5c07c2")
  },
  {
    usuario: ObjectId("6511cf81160b1b9e7c5c0791"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c8"),
    equipo: ObjectId("6512cf14160b1b9e7c5c07c3")
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6641"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c4"),
    equipo: ObjectId("651da66d47c9d2ebddde664b")
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6642"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c5"),
    equipo: ObjectId("651da66d47c9d2ebddde664c")
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6643"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c6"),
    equipo: ObjectId("651da66d47c9d2ebddde664d")
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6644"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c7"),
    equipo: ObjectId("651da66d47c9d2ebddde664e")
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6645"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c8"),
    equipo: ObjectId("651da66d47c9d2ebddde664f")
  }
]);


// 15. HISTORIALES //
db.historiales.insertMany([
  {
    actividad: ObjectId("6512d177160b1b9e7c5c07c9"),
    equipo: ObjectId("6512cf14160b1b9e7c5c07bf")
  },
  {
    actividad: ObjectId("6512d177160b1b9e7c5c07ca"),
    equipo: ObjectId("6512cf14160b1b9e7c5c07c0")
  },
  {
    actividad: ObjectId("6512d177160b1b9e7c5c07cb"),
    equipo: ObjectId("6512cf14160b1b9e7c5c07c1")
  },
  {
    actividad: ObjectId("6512d177160b1b9e7c5c07cc"),
    equipo: ObjectId("6512cf14160b1b9e7c5c07c2")
  },
  {
    actividad: ObjectId("6512d177160b1b9e7c5c07cd"),
    equipo: ObjectId("6512cf14160b1b9e7c5c07c3")
  },
  {
    actividad: ObjectId("651da81047c9d2ebddde6650"),
    equipo: ObjectId("651da66d47c9d2ebddde664b")
  },
  {
    actividad: ObjectId("651da81047c9d2ebddde6651"),
    equipo: ObjectId("651da66d47c9d2ebddde664c")
  },
  {
    actividad: ObjectId("651da81047c9d2ebddde6652"),
    equipo: ObjectId("651da66d47c9d2ebddde664d")
  },
  {
    actividad: ObjectId("651da81047c9d2ebddde6653"),
    equipo: ObjectId("651da66d47c9d2ebddde664e")
  },
  {
    actividad: ObjectId("651da81047c9d2ebddde6654"),
    equipo: ObjectId("651da66d47c9d2ebddde664f")
  }
]); 


// 16. SOPORTES //
db.soportes.insertMany([
  {
    usuario: ObjectId("6511cddd160b1b9e7c5c078d"),
    actividad: ObjectId("6512d177160b1b9e7c5c07c9"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c4"),
    fecha: new Date("2023-09-15T10:30:00Z"),
    origen: "Usuario",
    localidad: "Ciudad A",
    atencion: "Técnico A",
    descripcion: "Problema de conexión a internet",
    tiempo_solucion: "2 horas",
    solucion: "Reiniciar el router"
  },
  {
    usuario: ObjectId("6511cddd160b1b9e7c5c078e"),
    actividad: ObjectId("6512d177160b1b9e7c5c07ca"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c5"),
    fecha: new Date("2023-09-16T14:45:00Z"),
    origen: "Usuario",
    localidad: "Ciudad B",
    atencion: "Técnico B",
    descripcion: "Pantalla en blanco al iniciar",
    tiempo_solucion: "1 hora",
    solucion: "Reemplazo de tarjeta gráfica"
  },
  {
    usuario: ObjectId("6511cf81160b1b9e7c5c078f"),
    actividad: ObjectId("6512d177160b1b9e7c5c07cb"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c6"),
    fecha: new Date("2023-09-17T09:15:00Z"),
    origen: "Usuario",
    localidad: "Ciudad C",
    atencion: "Técnico C",
    descripcion: "Problema de impresión",
    tiempo_solucion: "45 minutos",
    solucion: "Reemplazo de cartucho de tinta"
  },
  {
    usuario: ObjectId("6511cf81160b1b9e7c5c0790"),
    actividad: ObjectId("6512d177160b1b9e7c5c07cc"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c7"),
    fecha: new Date("2023-09-18T16:20:00Z"),
    origen: "Usuario",
    localidad: "Ciudad D",
    atencion: "Técnico A",
    descripcion: "Error de sistema operativo",
    tiempo_solucion: "3 horas",
    solucion: "Reinstalación del sistema"
  },
  {
    usuario: ObjectId("6511cf81160b1b9e7c5c0791"),
    actividad: ObjectId("6512d177160b1b9e7c5c07cd"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c8"),
    fecha: new Date("2023-09-19T11:00:00Z"),
    origen: "Usuario",
    localidad: "Ciudad E",
    atencion: "Técnico B",
    descripcion: "Problema de lento rendimiento",
    tiempo_solucion: "2 horas",
    solucion: "Optimización del sistema"
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6641"),
    actividad: ObjectId("651da81047c9d2ebddde6650"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c4"),
    fecha: new Date("2023-09-20T08:30:00Z"),
    origen: "Usuario",
    localidad: "Ciudad F",
    atencion: "Técnico A",
    descripcion: "Problema de congelamiento",
    tiempo_solucion: "2 horas",
    solucion: "Actualización de controladores"
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6642"),
    actividad: ObjectId("651da81047c9d2ebddde6651"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c5"),
    fecha: new Date("2023-09-21T13:15:00Z"),
    origen: "Usuario",
    localidad: "Ciudad G",
    atencion: "Técnico B",
    descripcion: "Problema de sonido",
    tiempo_solucion: "1 hora",
    solucion: "Reinstalación de controladores de audio"
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6643"),
    actividad: ObjectId("651da81047c9d2ebddde6652"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c6"),
    fecha: new Date("2023-09-22T10:45:00Z"),
    origen: "Usuario",
    localidad: "Ciudad H",
    atencion: "Técnico C",
    descripcion: "Problema de reinicio inesperado",
    tiempo_solucion: "45 minutos",
    solucion: "Limpieza interna y verificación de hardware"
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6644"),
    actividad: ObjectId("651da81047c9d2ebddde6653"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c7"),
    fecha: new Date("2023-09-23T16:00:00Z"),
    origen: "Usuario",
    localidad: "Ciudad I",
    atencion: "Técnico A",
    descripcion: "Problema de software",
    tiempo_solucion: "3 horas",
    solucion: "Reinstalación del sistema operativo"
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6645"),
    actividad: ObjectId("651da81047c9d2ebddde6654"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c8"),
    fecha: new Date("2023-09-24T11:30:00Z"),
    origen: "Usuario",
    localidad: "Ciudad J",
    atencion: "Técnico B",
    descripcion: "Problema de red",
    tiempo_solucion: "2 horas",
    solucion: "Reconfiguración de la red"
  }
]);


// 17. TALLERES //
db.talleres.insertMany([
  {
    usuario: ObjectId("6511cddd160b1b9e7c5c078d"),
    actividad: ObjectId("6512d177160b1b9e7c5c07c9"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c4"),
    fecha: new Date("2023-09-20T09:30:00Z"),
    origen: "Usuario",
    localidad: "Ciudad A",
    proceso: "Diagnóstico",
    descripcion: "Problema de hardware"
  },
  {
    usuario: ObjectId("6511cddd160b1b9e7c5c078e"),
    actividad: ObjectId("6512d177160b1b9e7c5c07ca"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c5"),
    fecha: new Date("2023-09-21T14:15:00Z"),
    origen: "Usuario",
    localidad: "Ciudad B",
    proceso: "Reparación",
    descripcion: "Reemplazo de disco duro"
  },
  {
    usuario: ObjectId("6511cf81160b1b9e7c5c078f"),
    actividad: ObjectId("6512d177160b1b9e7c5c07cb"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c6"),
    fecha: new Date("2023-09-22T10:45:00Z"),
    origen: "Usuario",
    localidad: "Ciudad C",
    proceso: "Mantenimiento",
    descripcion: "Limpieza interna"
  },
  {
    usuario: ObjectId("6511cf81160b1b9e7c5c0790"),
    actividad: ObjectId("6512d177160b1b9e7c5c07cc"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c7"),
    fecha: new Date("2023-09-23T16:00:00Z"),
    origen: "Usuario",
    localidad: "Ciudad D",
    proceso: "Diagnóstico",
    descripcion: "Problema de software"
  },
  {
    usuario: ObjectId("6511cf81160b1b9e7c5c0791"),
    actividad: ObjectId("6512d177160b1b9e7c5c07cd"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c8"),
    fecha: new Date("2023-09-24T11:30:00Z"),
    origen: "Usuario",
    localidad: "Ciudad E",
    proceso: "Actualización",
    descripcion: "Instalación de software"
  },
   {
    usuario: ObjectId("651d9a2547c9d2ebddde6641"),
    actividad: ObjectId("651da81047c9d2ebddde6650"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c4"),
    fecha: new Date("2023-09-25T08:30:00Z"),
    origen: "Usuario",
    localidad: "Ciudad F",
    proceso: "Diagnóstico",
    descripcion: "Problema de pantalla"
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6642"),
    actividad: ObjectId("651da81047c9d2ebddde6651"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c5"),
    fecha: new Date("2023-09-26T13:15:00Z"),
    origen: "Usuario",
    localidad: "Ciudad G",
    proceso: "Reparación",
    descripcion: "Reemplazo de teclado"
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6643"),
    actividad: ObjectId("651da81047c9d2ebddde6652"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c6"),
    fecha: new Date("2023-09-27T10:45:00Z"),
    origen: "Usuario",
    localidad: "Ciudad H",
    proceso: "Mantenimiento",
    descripcion: "Actualización de hardware"
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6644"),
    actividad: ObjectId("651da81047c9d2ebddde6653"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c7"),
    fecha: new Date("2023-09-28T16:00:00Z"),
    origen: "Usuario",
    localidad: "Ciudad I",
    proceso: "Diagnóstico",
    descripcion: "Problema de pantalla táctil"
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6645"),
    actividad: ObjectId("651da81047c9d2ebddde6654"),
    tipo: ObjectId("6512cfe1160b1b9e7c5c07c8"),
    fecha: new Date("2023-09-29T11:30:00Z"),
    origen: "Usuario",
    localidad: "Ciudad J",
    proceso: "Actualización",
    descripcion: "Instalación de software de diseño"
  }
]);


// 18. FEEDBACKS //
db.feedbacks.insertMany([
  {
    usuario: ObjectId("6511cddd160b1b9e7c5c078d"),
    comentarios: "El servicio fue rápido y eficiente. ¡Gracias!"
  },
  {
    usuario: ObjectId("6511cddd160b1b9e7c5c078e"),
    comentarios: "Excelente atención al cliente. Solucionaron mi problema de manera rápida."
  },
  {
    usuario: ObjectId("6511cf81160b1b9e7c5c078f"),
    comentarios: "Muy satisfecho con el servicio. El técnico fue amable y profesional."
  },
  {
    usuario: ObjectId("6511cf81160b1b9e7c5c0790"),
    comentarios: "Gran experiencia en el taller. Recomiendo este servicio."
  },
  {
    usuario: ObjectId("6511cf81160b1b9e7c5c0791"),
    comentarios: "Todo salió perfecto. Gracias por la ayuda."
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6641"),
    comentarios: "El servicio superó mis expectativas. Muy contento con el resultado."
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6642"),
    comentarios: "Atención al cliente de primera clase. Definitivamente volveré."
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6643"),
    comentarios: "Los técnicos son muy conocedores. Mi problema se resolvió de inmediato."
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6644"),
    comentarios: "Servicio confiable y rápido. Los recomendaré a mis amigos."
  },
  {
    usuario: ObjectId("651d9a2547c9d2ebddde6645"),
    comentarios: "No podría estar más satisfecho. Gracias por su ayuda profesional."
  }
]);

```

Observaciones de la base de datos:
- La cantidad de documentos de las colecciones "generos",  "roles", "otros" y "estados" estan limitadas de acuerdo a lo que esta establecido.
- Las demás colecciones tienen minimo 10 documentos.
- Se crearon un total de 18 colecciones.
- Esta base de datos tiene un total de 8 colecciones que tienen correlación entre ellas.


## BACKEND
Como se menciono anteriormente, se crearon 18 colecciones, por lo cual para cada una de ellas se creo su modelo, su controlador y su ruta respectiva. 

Se crearon 15 CRUD de las 18 colecciones, este trabajo se realizo haciendo los metodo HTTP y la conexion a la base de datos por medio de "mongoose". Los links son los siguientes:

- Leer: localhost:5050/usuarios/all
- Eliminar: localhost:5050/usuarios/del/{_id}
- Agregar: localhost:5050/usuarios/add
- Actualizar: localhost:5050/usuarios/upd/{_id}

Todos los CRUD manejan el mismo link, lo unico que cambia es que es el nombre de la coleccion. En los link anteriores se uso "usuarios", para las demas colecciones utilizamos sus repectivos nombres.

Tambien se hizo una conexion directa a la base de datos con "mongodb", utilizando MongoClient donde se realizaron 4 ENDPOINTS, los cuales son:

1. Obtener los usuarios masculinos (localhost:5050/computers/usuarios/m). 
2. Obtener los usuarios femeninos (localhost:5050/computers/usuarios/f).
3. Obtener los monitores tipo LED (localhost:5050/computers/monitores/LED).
3. Obtener los monitores tipo LCD (localhost:5050/computers/monitores/LCD).


## FRONTEND

Se creo un proyecto de ReactJS llamado "frontend" para poder implementar los CRUD y ENDPOINTS realizados en la seccion de BACKEND.

Para la realizacion de este proyecto realizamos lo siguiente.

1. Iniciamos el proyecto
2. Escogimos una imagen de fondo para nuestra pagina
3. Procedimos a hacer nuestro navbar, donde impleamentamos la libreria "router" de una vez. Para ello creamos un componente de acuerdo a cada una de las opciones de nuesto navbar.
4. Procedimos a realizar cada una de las implemantaciones de las APIs a cada una de las partes segun correpondian al navbar.


En la parte de inicio se hizo algo sencillo, donde el Tecnico o Jefe de informatica, pudiera entrar a mirar que es su empresa y que es lo que ofrece.

En la parte de Usuario, fue la que mas se trabajo y trate de implementar todos los CRUD. En esta parte se recorre la API de Usuarios (localhost:5050/usuarios/all), donde toda la informacion de coloca en una tabla.

A esta tabla se le adicionan dos botones, uno de Editar y otro de Eliminar que con ayuda de las APIs correspondientes se logro que funcionara. Tambien se adicionó un boton de Agregar que me permite adicionar documentos a la tabla.

En los demas botones del menu: Equipos, Talleres, Soportes. Solo se corrio la API para poder mostrar la informacion. 

En la seccion de implemento, no me alcanzo el tiempo para poder realizar lo que tenia en mente, mi idea era crear botones ahi dentro de los implemntos de los computadores, como lo son: Monitores, Teclados, Ratones, Memorias, Discos, etc. Donde despues se pudiera ver la informacion de acuerdo a su respectiva API.



## Agradecimientos

Muchas gracias al Trainer Pedro por sus enseñanzas, agradezco su comprension en el sentido de que considero que he hecho un buen trabajo, es muy sencillo para mi gusto, pero usted sabe que mi tiempo es muy corto debido a mis compromisos con Campus y la Universidad.

Bendiciones de parte de Dios.













