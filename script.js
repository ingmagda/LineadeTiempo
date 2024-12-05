const Timeline = () => {
    const [selectedYear, setSelectedYear] = React.useState('2024');
    const [typeFilter, setTypeFilter] = React.useState('todos');
    const [areaFilter, setAreaFilter] = React.useState('todas');

    const Header = () => (
        <div className="timeline-header">
            <div className="logos-container">
                <div className="logo-wrapper">
                    <img 
                        src="logo-unt.png" 
                        alt="Logo Universidad Nacional de Tucumán" 
                        className="logo unt-logo"
                    />
                </div>
                <div className="logo-wrapper">
                    <img 
                        src="logo-sied.png" 
                        alt="Logo SIED-UNT" 
                        className="logo sied-logo"
                    />
                </div>
                <div className="logo-wrapper">
                    <img 
                        src="logo-peadunt.png" 
                        alt="Logo PEADUNT" 
                        className="logo peadunt-logo"
                    />
                </div>
            </div>
            <div className="title-container">
                <h1 className="timeline-title">Línea del Tiempo SIED UNT</h1>
                <p className="timeline-subtitle">2013-2024</p>
            </div>
        </div>
    );

    const events = {
        2013: [
            {
                title: "UNT Virtual",
                type: "resolution",
                doc: "Res. N° 680-13",
                area: "Rectorado",
                month: "Marzo",
                icon: "file-text",
                color: "indigo"
            }
        ],
        2019: [
            {
                title: "Aprobación/Validación SIED UNT",
                type: "approval",
                area: "SPU",
                month: "Julio",
                icon: "award",
                color: "yellow"
            }
        ],
        2021: [
            {
                title: "Diplomatura de Posgrado: Estrategias para enseñar y aprender en la Virtualidad",
                type: "academic",
                doc: "Res. N° 85-21",
                area: "Secretaría de Posgrado",
                month: "Mayo",
                icon: "book-open",
                color: "green"
            }
        ],
        2022: [
            {
                title: "Plan Estratégico Institucional UNT",
                type: "institutional",
                doc: "Documento Institucional",
                area: "Rectorado",
                month: "Marzo",
                icon: "landmark",
                color: "purple"
            },
            {
                title: "Estructura Organizacional del SIED UNT",
                type: "institutional",
                doc: "Res. N° 859-22",
                area: "Rectorado",
                month: "Agosto",
                icon: "git-branch",
                color: "purple"
            }
        ],
        2023: [
            {
                title: "Comisión Intrainstitucional SIED UNT",
                type: "institutional",
                doc: "Res. N° 117/23",
                area: "Rectorado",
                month: "Febrero",
                icon: "users",
                color: "purple"
            },
            {
                title: "Aprobación Proyecto de Investigación PIUNT",
                type: "research",
                doc: "Res. HCS N° 356-23",
                area: "HCS UNT",
                month: "Mayo",
                icon: "search",
                color: "red"
            }
        ],
        2024: [
            {
                title: "Curso de Posgrado: IA en Acción",
                type: "academic",
                doc: "RES - DGAC - 5244/2024",
                area: "SIED UNT",
                month: "Febrero",
                icon: "cpu",
                color: "green"
            },
            {
                title: "Convenio Marco UNT- Asociación Civil 'Chicos Net'",
                type: "institutional",
                doc: "RES - DGD - 13954/2024",
                area: "SIED UNT",
                month: "Abril",
                icon: "handshake",
                color: "purple"
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
            <Header />
            
            <div className="filters-container">
                <div className="filter-group">
                    <label className="filter-label">Tipo de Evento</label>
                    <select 
                        className="filter-select"
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                    >
                        <option value="todos">Todos los tipos</option>
                        <option value="resolution">Resoluciones</option>
                        <option value="academic">Eventos Académicos</option>
                        <option value="institutional">Eventos Institucionales</option>
                        <option value="approval">Aprobaciones</option>
                        <option value="research">Investigación</option>
                    </select>
                </div>
                
                <div className="filter-group">
                    <label className="filter-label">Área</label>
                    <select 
                        className="filter-select"
                        value={areaFilter}
                        onChange={(e) => setAreaFilter(e.target.value)}
                    >
                        <option value="todas">Todas las áreas</option>
                        <option value="Rectorado">Rectorado</option>
                        <option value="SIED UNT">SIED UNT</option>
                        <option value="SPU">SPU</option>
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

            <div className="events-grid">
                {filteredEvents.map((event, index) => (
                    <div key={index} className={`event-card event-${event.type}`}>
                        <div className={`event-icon-wrapper ${event.color}`}>
                            <i data-feather={event.icon} className="event-icon" />
                        </div>
                        <div className="event-content">
                            <h3 className="event-title">{event.title}</h3>
                            <div className="event-details">
                                <span className="event-date">
                                    <i data-feather="calendar" className="icon-small" />
                                    {event.month}
                                </span>
                                {event.doc && (
                                    <span className="event-doc">
                                        <i data-feather="file-text" className="icon-small" />
                                        {event.doc}
                                    </span>
                                )}
                                <span className="event-area">
                                    <i data-feather="map-pin" className="icon-small" />
                                    {event.area}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

ReactDOM.render(<Timeline />, document.getElementById('root'));
