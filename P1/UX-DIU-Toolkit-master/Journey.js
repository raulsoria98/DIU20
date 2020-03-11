/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Jon Robertson",
                Photo: "Jon Robertson.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere desconectar del trabajo y organizar un gran viaje con la familia",
                touch1: "Móvil (Telegram)",
                feel1: "4",
                con1: "Ponerse de acuerdo y cuadrar fechas con la familia",
                ima1: "cartoon-phone.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet ofertas para esas fechas",
                touch2: "Ordenador",
                feel2: "1",
                con2: "No encuentra una web fiable en la que poder encontrar un plan que se adapte a sus necesidades",
                ima2: "cartoon-PChard.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Hablando con su familia, deciden ir a Finlandia ya que una amiga de su hermana fue de Erasmus allí y quedo prendada",
                touch3: "Boca a boca",
                feel3: "5",
                con3: "Le preocupa un poco el frío pero le motiva ver la nieve ya que en Ronda no nieva mucho",
                ima3: "cartoon-speaking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Finalmente encuentra una web de viajes que le convence",
                touch4: "Ordenador",
                feel4: "3",
                con4: "La web deja que desear ya que hay demasiada información y esto le abruma",
                ima4: "cartoon-thinking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Tras mucho buscar encuentra un viaje que le gusta",
                touch5: "Móvil (Telegram)",
                feel5: "2",
                con5: "Su familia discrepa, prefieren otro itinerario",
                ima5: "cartoon-talking.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Finalmente se da por vencido y completa la reserva con el itinerario que proponía su abuela, será un gran viaje!",
                touch6: "Ordenador",
                feel6: "4",
                con6: "Se ha dado cuenta de que la opción que él estaba barajando era más económica pero no iba a ser tan divertida como esta",
                ima6: "cartoon-shaking.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Dana Coleman",
                Photo: "Dana Coleman.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere conocer España al completo y se lo propone a sus dos mejores amigas de Barcelona",
                touch1: "Móvil (Instagram)",
                feel1: "5",
                con1: "Una amiga está trabajando y tiene que cuadrar las fechas del viaje con los días libres",
                ima1: "cartoon-teamthinking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Deciden ir a una agencia para organizar su viaje",
                touch2: "Servicio (agencia)",
                feel2: "3",
                con2: "Encuentran un viaje interesante pero es bastante caro",
                ima2: "cartoon-reading.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Van a reservar el viaje",
                touch3: "Servicio (agencia)",
                feel3: "1",
                con3: "Sus amigas opinan que es muy caro y que no van a poder asumir ese coste. Estas abandonan el plan",
                ima3: "cartoon-KO.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Decide continuar con el plan, esta vez en solitario. Está buscando una web en la que poder unirse a un viaje y conocer gente nueva",
                touch4: "Ordenador",
                feel4: "3",
                con4: "Está triste por no poder viajar con sus amigas, pero por otra parte es una gran ocasión para hacer amigos",
                ima4: "cartoon-deciding2.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra un viaje por el norte de España",
                touch5: "Ordenador",
                feel5: "3",
                con5: "Quedan pocas plazas para el viaje, tiene que decidir rápidamente",
                ima5: "cartoon-deciding.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Finalmente hace la reserva, va a ser un viaje muy divertido a pesar de no hacerlo con sus amigas",
                touch6: "Ordenador",
                feel6: "4",
                con6: "Tiene un poco de miedo ya que no sabe cómo serán las otras personas con las que viajará",
                ima6: "cartoon-resting.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



