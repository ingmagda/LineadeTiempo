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
                month: "Marzo"
            }
        ],
        2019: [
            {
                title: "Aprobación/Validación SIED UNT",
                type: "approval",
                area: "SPU",
                month: "Julio"
            }
        ],
        2021: [
            {
                title: "Diplomatura de Posgrado: Estrategias para enseñar y aprender en la Virtualidad",
                type: "academic",
                doc: "Res. N° 85-21",
                area: "Secretaría de Posgrado",
                month: "Mayo"
            }
        ],
        2022: [
            {
                title: "Plan Estratégico Institucional UNT",
                type: "institutional",
                doc: "Documento Institucional",
                area: "Rectorado",
                month: "Marzo"
            },
            {
                title: "Estructura Organizacional del SIED UNT",
                type: "institutional",
                doc: "Res. N° 859-22",
                area: "Rectorado",
                month: "Agosto"
            }
        ],
        2023: [
            {
                title: "Comisión Intrainstitucional SIED UNT",
                type: "institutional",
                doc: "Res. N° 117/23",
                area: "Rectorado",
                month: "Febrero"
            },
            {
                title: "Aprobación Proyecto de Investigación PIUNT",
                type: "research",
                doc: "Res. HCS N° 356-23",
                area: "HCS UNT",
                month: "Mayo"
            }
        ],
        2024: [
            {
                title: "Curso de Posgrado: IA en Acción",
                type: "academic",
                doc: "RES - DGAC - 5244/2024",
                area: "SIED UNT",
                month: "Febrero"
            },
            {
                title: "Convenio Marco UNT- Asociación Civil 'Chicos Net'",
                type: "institutional",
                doc: "RES - DGD - 13954/2024",
                area: "SIED UNT",
                month: "Abril"
            }
        ]
    };

    const getEventIcon = (type) => {
        switch(type) {
            case 'resolution': return 'file-text';
            case 'academic': return 'book';
            case 'institutional': return 'landmark';
            case 'approval': return 'award';
            case 'research': return 'users';
            default: return 'calendar';
        }
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
                <h1 className="timeline-title">Línea de Tiempo SIED UNT</h1>
                <p className="timeline-subtitle">2013-2024</p>
            </div>

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

            <div className="events-grid">
                {filteredEvents.map((event, index) => (
                    <div key={index} className={`event-card event-${event.type}`}>
                        <i data-feather={getEventIcon(event.type)} className="event-icon" />
                        <h3 className="event-title">{event.title}</h3>
                        <div className="event-details">
                            <div>{event.month}</div>
                            {event.doc && <div>{event.doc}</div>}
                            <div>{event.area}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

ReactDOM.render(<Timeline />, document.getElementById('root'));
