 const API_BASE_MUNI = 'https://censopoblacion.azurewebsites.net/API/indicadores/2/201';
 const API_BASE_DEPTO = 'https://censopoblacion.azurewebsites.net/API/indicadores/2/999';

    const contDatos = document.getElementById('contenedorDatos');
    datosGlobalesMuni = null;
    datosGlobalesDepto = null;

    function cargarDatosMuni() {
        fetch(API_BASE_MUNI)
        .then(res => res.json())
        .then(data => {
            
            datosGlobalesMuni = JSON.parse(data);

            console.log(datosGlobalesMuni);
            renderDatos();
        })
        .catch(error => {
            console.error("Error al cargar datos:", error);
        });
    }

    function cargarDatosDepto() {
        fetch(API_BASE_DEPTO)
        .then(res => res.json())
        .then(data => {
            
            datosGlobalesDepto = JSON.parse(data);

            console.log(datosGlobalesDepto);
            renderDatos();
        })
        .catch(error => {
            console.error("Error al cargar datos:", error);
        });
    }

    function renderDatos(){
    
        document.getElementById('nombreDepartamento').textContent = datosGlobalesDepto.nombre;
        document.getElementById('totalMunicipios').textContent = datosGlobalesDepto.total_lugares;
        document.getElementById('cabecera').textContent = datosGlobalesDepto.capital;
        document.getElementById('pob_total').textContent = datosGlobalesDepto.pob_total;
        document.getElementById('indice_masculinidad').textContent = datosGlobalesDepto.indice_masculinidad;
        document.getElementById('edad_promedio').textContent = datosGlobalesDepto.edad_promedio;
        document.getElementById('indice_dependencia').textContent = datosGlobalesDepto.indice_dependencia;
        document.getElementById('anios_prom_estudio').textContent = datosGlobalesDepto.anios_prom_estudio;
        document.getElementById('alfabetismo').textContent = datosGlobalesDepto.alfabetismo;
        document.getElementById('viviendas_part').textContent = datosGlobalesDepto.viviendas_part;
        document.getElementById('total_hogares').textContent = datosGlobalesDepto.total_hogares;
        document.getElementById('prom_personas_hogar').textContent = datosGlobalesDepto.prom_personas_hogar;
        document.getElementById('total_jefas_hogar').textContent = datosGlobalesDepto.total_jefas_hogar;
        document.getElementById('total_sexo_hombre').textContent = datosGlobalesMuni.total_sexo_hombre;
        document.getElementById('porc_sexo_hombre').textContent = datosGlobalesMuni.porc_sexo_hombre;
        document.getElementById('total_sexo_mujeres').textContent = datosGlobalesMuni.total_sexo_mujeres;
        document.getElementById('porc_sexo_mujeres').textContent = datosGlobalesMuni.porc_sexo_mujeres;
        document.getElementById('total_sector_urbano').textContent = datosGlobalesMuni.total_sector_urbano;
        document.getElementById('porc_sector_urbano').textContent = datosGlobalesMuni.porc_sector_urbano;
        document.getElementById('total_sector_rural').textContent = datosGlobalesMuni.total_sector_rural;
        document.getElementById('porc_sector_rural').textContent = datosGlobalesMuni.porc_sector_rural;
        document.getElementById('pob_edad_014').textContent = datosGlobalesMuni.pob_edad_014;
        document.getElementById('porc_edad_014').textContent = datosGlobalesMuni.porc_edad_014;
        document.getElementById('pob_edad_1564').textContent = datosGlobalesMuni.pob_edad_1564;
        document.getElementById('porc_edad_1564').textContent = datosGlobalesMuni.porc_edad_1564;
        document.getElementById('pob_edad_65').textContent = datosGlobalesMuni.pob_edad_65;
        document.getElementById('porc_edad_65').textContent = datosGlobalesMuni.porc_edad_65;
        document.getElementById('pob_pueblo_garifuna').textContent = datosGlobalesMuni.pob_pueblo_garifuna;
        document.getElementById('porc_pueblo_garifuna').textContent = datosGlobalesMuni.porc_pueblo_garifuna;
        document.getElementById('pob_pueblo_xinca').textContent = datosGlobalesMuni.pob_pueblo_xinca;
        document.getElementById('pob_pueblo_afrodescendiente').textContent = datosGlobalesMuni.pob_pueblo_afrodescendiente;
        document.getElementById('porc_pueblo_afrodescendiente').textContent = datosGlobalesMuni.porc_pueblo_afrodescendiente;
        document.getElementById('pob_pueblo_ladino').textContent = datosGlobalesMuni.pob_pueblo_ladino;
      
    }

    cargarDatosDepto();
    cargarDatosMuni();

   