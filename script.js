const Timeline = () => {
    const [selectedYear, setSelectedYear] = React.useState('2024');
    const [typeFilter, setTypeFilter] = React.useState('todos');
    const [areaFilter, setAreaFilter] = React.useState('todas');

    const events = {
        2013: [
            {
                title: "UNT Virtual",
                type: "resolution",
                doc: "Res. N° 680-13",
                area: "Rectorado",
                month: "Marzo",
                icon: "landmark"
            }
        ],
        2019: [
            {
                title: "Aprobación/Validación SIED UNT",
                type: "approval",
                area: "SPU",
                month: "Julio",
                icon: "award"
            }
        ],
        2021: [
            {
                title: "Diplomatura de Posgrado: Estrategias para enseñar y aprender en la Virtualidad",
                type: "academic",
                doc: "Res. N° 85-21",
                area: "Secretaría de Posgrado",
                month: "Mayo",
                icon: "book-open"
            }
        ],
        2022: [
            {
                title: "Plan Estratégico Institucional UNT",
                type: "institutional",
                doc: "Documento Institucional",
                area: "Rectorado",
                month: "Marzo",
                icon: "building"
            },
            {
                title: "Reglamento General para Opciones Pedagógicas a Distancia",
                type: "resolution",
                doc: "Res. N° 2029-22",
                area: "Rectorado",
                month: "Junio",
                icon: "file-text"
            },
            {
                title: "Estructura Organizacional del SIED UNT",
                type: "institutional",
                doc: "Res. N° 859-22",
                area: "Rectorado",
                month: "Agosto",
                icon: "git-branch"
            },
            {
                title: "Diplomatura 'Estrategias y recursos para enseñar y aprender en la virtualidad' (1ra y 2da Cohorte)",
                type: "academic",
                doc: "Res. N° 711-22",
                area: "Secretaría Académica y Secretaría de Posgrado",
                month: "Julio",
                icon: "book"
            },
            {
                title: "Diplomatura a Distancia: Prácticas de Enseñanza en la Educación Superior",
                type: "academic",
                doc: "Res. N° 1250-22",
                area: "Secretaría Académica",
                month: "Septiembre",
                icon: "book"
            },
            {
                title: "Libro: 'Voces que entraman experiencias en el contexto de pandemia'",
                type: "publication",
                doc: "Libro Digital",
                area: "Secretaría Académica - SIED UNT",
                month: "Octubre",
                icon: "book-open"
            }
        ],
        2023: [
            {
                title: "Comisión Intrainstitucional SIED UNT",
                type: "institutional",
                doc: "Res. N° 117/23",
                area: "Rectorado",
                month: "Febrero",
                icon: "users"
            },
            {
                title: "Aprobación Proyecto de Investigación PIUNT",
                type: "research",
                doc: "Res. HCS N° 356-23",
                area: "HCS UNT",
                month: "Mayo",
                icon: "search"
            },
            {
                title: "Taller 'La investigación científica y la formación de investigadores en EaD'",
                type: "academic",
                doc: "Res. N° 110-23",
                area: "SIED UNT",
                month: "Junio",
                icon: "book"
            }
        ],
        2024: [
            {
                title: "Curso de Posgrado: IA en Acción",
                type: "academic",
                doc: "RES - DGAC - 5244/2024",
                area: "SIED UNT",
                month: "Febrero",
                icon: "cpu"
            },
            {
                title: "Curso de Posgrado: Integración de IA en la Escritura Académica",
                type: "academic",
                doc: "RES - DGAC -7153/2024",
                area: "SIED UNT",
                month: "Marzo",
                icon: "edit"
            },
            {
                title: "Convenio Marco UNT- Asociación Civil 'Chicos Net'",
                type: "institutional",
                doc: "RES - DGD - 13954/2024",
                area: "SIED UNT",
                month: "Abril",
                icon: "handshake"
            }
        ]
    };

    React.useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    });

    const filteredEvents = React.useMemo(() => {
        return events[selectedYear].filter(event => {
            const typeMatch = typeFilter === 'todos' || event.type === typeFilter;
            const areaMatch = areaFilter === 'todas' || event.area.includes(areaFilter);
            return typeMatch && areaMatch;
        });
    }, [selectedYear, typeFilter, areaFilter]);

    return (
        <div className="timeline-container">
            <div className="timeline-header">
                <div className="logos-container">
                    <div className="logo-wrapper">
                        <img src="logo-unt.png" alt="Logo UNT" className="logo unt-logo" />
                    </div>
                    <div className="logo-wrapper">
                        <img src="logo-sied.png" alt="Logo SIED" className="logo sied-logo" />
                    </div>
                    <div className="logo-wrapper">
                        <img src="logo-peadunt.png" alt="Logo PEADUNT" className="logo peadunt-logo" />
                    </div>
                </div>
                <h1 className="timeline-title">Línea de Tiempo</h1>
                <p className="timeline-subtitle">Línea: "Análisis Documental" del Proyecto de Investigación PIUNT C701</p>
            </div>

            <div className="filters-container">
                <div className="filter-group">
                    <label>Tipo de Evento</label>
                    <select 
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                        className="filter-select"
                    >
                        <option value="todos">Todos los tipos</option>
                        <option value="resolution">Resoluciones</option>
                        <option value="academic">Eventos Académicos</option>
                        <option value="institutional">Eventos Institucionales</option>
                        <option value="approval">Aprobaciones</option>
                        <option value="research">Investigación</option>
                        <option value="publication">Publicaciones</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label>Área</label>
                    <select 
                        value={areaFilter}
                        onChange={(e) => setAreaFilter(e.target.value)}
                        className="filter-select"
                    >
                        <option value="todas">Todas las áreas</option>
                        <option value="Rectorado">Rectorado</option>
                        <option value="SIED UNT">SIED UNT</option>
                        <option value="Secretaría">Secretaría Académica</option>
                        <option value="HCS">HCS UNT</option>
                    </select>
                </div>
            </div>

            <div className="timeline-nav">
                {Object.keys(events).map(year => (
                    <div
                        key={year}
                        className={`year-marker ${selectedYear === year ? 'active' : ''}`}
                        onClick={() => setSelectedYear(year)}
                    >
                        {year}
                    </div>
                ))}
            </div>

            <h2 className="events-title">Eventos en {selectedYear}</h2>
            
            <div className="events-list">
                {filteredEvents.map((event, index) => (
                    <div key={index} className={`event-card ${event.type}`}>
                        <div className="event-icon">
                            <i data-feather={event.icon}></i>
                        </div>
                        <div className="event-content">
                            <h3>{event.title}</h3>
                            <div className="event-meta">
                                {event.doc && <span className="event-doc">{event.doc}</span>}
                                <span className="event-area">{event.area}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

ReactDOM.render(<Timeline />, document.getElementById('root'));
