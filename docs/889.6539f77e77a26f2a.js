"use strict";(self.webpackChunkdividelo_documentation=self.webpackChunkdividelo_documentation||[]).push([[889],{2889:(S,l,t)=>{t.r(l),t.d(l,{BusinessAccountModule:()=>N});var m=t(4755),g=t(9744),b=t(1538),Z=t(9231),e=t(3020),i=t(9896),u=t(5581),p=t(1094),_=t(3080),E=t(2225),U=t(360);let A=(()=>{class a{constructor(){this.scriptModule='\n    \x3c!--\n    Este script deber\xeda ubicarse al final del documento\n    dentro de la etiqueta <body> para no bloquear la carga\n    de la p\xe1gina.\n    --\x3e\n    <script\n      type="module"\n      src="https://web-qa.digital.interbank.pe/bindings/js/business-account@0.0.1/main.js">\n    <\/script>\n  ',this.scriptComponent='\n    \x3c!-- Bot\xf3n de apertura de cuenta negocio--\x3e\n    <ibk-business-accounts\n      trigger-model="C"\n      document-number="44386667"\n      company-document-number="2000398833"\n      session-token="__SESSION_TOKEN_VALUE__"\n      subscription-key="__SUBSCRIPTION_KEY_VALUE__"\n    </ibk-business-accounts>\n  ',this.scriptCustomEvent='\n    <ibk-business-accounts  id="account-business-wc"></ibk-business-accounts>\n\n    <script>\n      const element = document.getElementById(\'account-business-wc\');\n\n      element.addEventListener(\'accountCreated\', event => {\n        // El objeto emitido dentro del detalle del evento\n        console.log(event.detail);\n        // [{\n        //   accountCorrelationId: "pg-1678740476800-53"\n        //   accountId:"8987003445035"\n        //   currency:"PEN"\n        //   status:"SETTLED"\n        // }]\n      });\n    <\/script>\n  ',this.scriptSessionToken="\n    curl --location --request POST 'https://apiqa.digital.interbank.pe/bff-security/v1/bff-security/oauth/token' \\\n    --header 'Content-Type: application/json' \\\n    --header 'Ocp-Apim-Subscription-Key: __SUBSCRIPTION_KEY__' \\\n    --header 'Authorization: Basic __APPLICATION_CREDENTIALS__'\n  ",this.scriptSessionTokenResponse='\n    {\n      "access_token": "MjRiNWRhMTQtYzk4OC00YTFkLTkxYTctYWRlY2ZhNDkzYmE1", // Valor usado en el atributo session-token\n      "token_type": "SESSION",\n      "creation_time": "2022-10-21 14:51",\n      "expires_in": 300\n    }\n  ',this.scriptCurlCorrelation="\n    curl --location --request POST 'https://apiqa.digital.interbank.pe/applications/v1/correlations/{correlationId}' \\\n    --header 'Content-Type: application/json' \\\n    --header 'Ocp-Apim-Subscription-Key: __SUBSCRIPTION_KEY__' \\\n    --header 'Authorization: Bearer __JWT__'\n  ",this.scriptCorrelationResponse='\n    {\n        "correlation": {\n            "status": "SETTLED" | "FAILED",\n            "id": "__CORRELATION_ID_",\n            "data": {\n                "accounts": [\n                    {\n                        "financialInstitution": "INTERBANK",\n                        "type": "CHECKING",\n                        "subType": "CTA_CTE_NEGOCIOS_PNN",\n                        "currency": "PEN",\n                        "customer": {\n                            "id": "__CUSTOMER_ID__"\n                        },\n                        "id": "__ACCOUNT_ID__",\n                    }\n                ],\n                "customer": {\n                    "firstName": "MORELIA",\n                    "lastName": "CORDOVA",\n                    "motherLastName": "PIMENTEL",\n                    "email": [\n                        {\n                            "value": "CHRISTIAN_17_07@HOTMAIL.COM"\n                        }\n                    ],\n                    "birthDate": "1983-08-03",\n                    "residenceCountry": "PE",\n                    "nationality": "PE",\n                    "identityDocument": [\n                        {\n                            "type": "DNI",\n                            "number": "76389974"\n                        }\n                    ],\n                    "address": [\n                        {\n                            "country": "PE",\n                            "department": "LIMA",\n                            "province": "LIMA",\n                            "district": "SURCO",\n                            "streetType": "SHRED",\n                            "streetName": "GARCILASO DE LA VEGA",\n                            "streetNumber": "100",\n                            "block": "",\n                            "lot": "",\n                            "apartment": "",\n                            "neighborhood": "",\n                            "landmark": ""\n                        }\n                    ],\n                    "phone": [\n                        {\n                            "type": "MOBILE",\n                            "number": "935845155",\n                            "carrier": "BITEL"\n                        }\n                    ],\n                    "gender": "FEMALE",\n                    "maritalStatus": "DIVORCED",\n                    "ldpd": {\n                        "accepted": true\n                    },\n                    "employment": {\n                        "employer": {\n                            "name": null,\n                            "startDate": null,\n                            "address": null,\n                            "phone": null\n                        }\n                    },\n                    "id": "0060654640"\n                },\n                "store": {\n                    "storeCode": "898"\n                },\n                "agency": {\n                    "code": "01",\n                    "name": "Lima"\n                },\n                "validationType": "KBA",\n                "originId": "192.168.0.1",\n                "tariff": "DIGITAL"\n            },\n            "id": "pg-1234263243328-18"\n        }\n    }\n  ',this.GENERAL_ROUTES=b.j,this.ROUTES_BUSINESS_ACCOUNTS=d,this.BUSINESS_ACCOUNT_ROUTES=Z.Y}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-introduction"]],decls:93,vars:13,consts:[[1,"bold"],["text","aqu\xed",3,"href"],[3,"code"],[1,"attributes"],[3,"secondLevel"],["type","request","verb","GET","link","https://apiqa.digital.interbank.pe/bff-security/v1/bff-security/oauth/token",3,"code"],["type","response","responseType","success","responseCode","200",3,"code"],["type","request","verb","GET","link","https://apiqa.digital.interbank.pe/applications/v1/correlations/{correlationId}",3,"code"],["text","Persona natural",3,"href"],["text","Persona jur\xeddica",3,"href"]],template:function(n,o){1&n&&(e.TgZ(0,"app-title"),e._uU(1,"Cuenta negocio"),e.qZA(),e.TgZ(2,"app-paragraph"),e._uU(3," Integra de una manera sencilla el "),e.TgZ(4,"span",0),e._uU(5,"Web Component"),e.qZA(),e._uU(6," de "),e.TgZ(7,"span",0),e._uU(8,"apertura de cuenta negocio"),e.qZA(),e._uU(9," customizable, as\xed evitar\xe1s todo el desarrollo e integraci\xf3n con el API de Interbank adem\xe1s formulario y procesos con KBA.\n"),e.qZA(),e.TgZ(10,"app-subtitle"),e._uU(11,"Paso 1: Registro de aplicaci\xf3n"),e.qZA(),e.TgZ(12,"app-paragraph"),e._uU(13," Deber\xe1s seguir los pasos indicados "),e._UZ(14,"app-link",1),e._uU(15," .\n"),e.qZA(),e.TgZ(16,"app-subtitle"),e._uU(17,"Paso 2: Integraci\xf3n Web Component"),e.qZA(),e.TgZ(18,"app-paragraph"),e._uU(19," El script que carga Apertura de Cuenta se encuentra desplegado en un CDN. Es suficiente con importar el script dentro de tu p\xe1gina web y usar el componente como un "),e.TgZ(20,"span",0),e._uU(21,"Custom Element"),e.qZA(),e._uU(22,". Al interactuar con el bot\xf3n el usuario ver\xe1 un "),e.TgZ(23,"span",0),e._uU(24,"popup"),e.qZA(),e._uU(25," o "),e.TgZ(26,"span",0),e._uU(27,"modal"),e.qZA(),e._uU(28," en donde completar\xe1 su proceso de pago.\n"),e.qZA(),e._UZ(29,"app-code-block",2)(30,"app-code-block",2),e.TgZ(31,"div",3)(32,"app-subtitle"),e._uU(33,"Atributos"),e.qZA(),e.TgZ(34,"ol")(35,"app-paragraph")(36,"li")(37,"span",0),e._uU(38,"session-token (obligatorio)"),e.qZA(),e._uU(39,": Session Token de autenticaci\xf3n generado como se describe en el "),e.TgZ(40,"span",0),e._uU(41,"Paso 3.2"),e.qZA()()(),e.TgZ(42,"app-paragraph")(43,"li")(44,"span",0),e._uU(45,"subscription-key (obligatorio)"),e.qZA(),e._uU(46,": Credencial generada por Interbank. "),e.qZA()(),e.TgZ(47,"app-paragraph")(48,"li")(49,"span",0),e._uU(50,"document-number (obligatorio)"),e.qZA(),e._uU(51,": Numero de documento asosicado al representante legal de la empresa. "),e.qZA()(),e.TgZ(52,"app-paragraph")(53,"li")(54,"span",0),e._uU(55,"company-document-number (obligatorio)"),e.qZA(),e._uU(56,": Numero de documento asociado al comercio. "),e.qZA()(),e.TgZ(57,"app-paragraph")(58,"li")(59,"span",0),e._uU(60,"trigger-model (obligatorio)"),e.qZA(),e._uU(61,": Identifica el modo de integraci\xf3n del flujo Valores: (A, B, C). "),e.qZA()()()(),e._UZ(62,"br"),e.TgZ(63,"app-subtitle"),e._uU(64,"Paso 3: Notificaci\xf3n de creaci\xf3n de cuenta"),e.qZA(),e.TgZ(65,"app-paragraph"),e._uU(66," Una vez el cliente haya completado el proceso de creaci\xf3n de cuenta el Web Component de Interbank notificar\xe1 a trav\xe9s de un "),e.TgZ(67,"span",0),e._uU(68,"CustomEvent"),e.qZA(),e._uU(69," un identificador con el cual se podr\xe1 consultar al API de Interbank el detalle de la cuenta. Adem\xe1s se emitir\xe1 si el cliente acept\xf3 compartir los datos de sus cuentas de ahorro para asociar al perfil personal (\xfaltimo checkbox) junto con el CCI y el id de la cuenta. "),e.TgZ(70,"span",0),e._uU(71," Es importante verificar este \xfaltimo a trav\xe9s del servicio de correlaci\xf3n explicado en el paso 3.3 "),e.qZA()(),e.TgZ(72,"app-subtitle",4),e._uU(73,"Paso 3.1: Web Component Custom Event"),e.qZA(),e._UZ(74,"app-code-block",2),e.TgZ(75,"app-subtitle",4),e._uU(76,"Paso 3.2: Autenticaci\xf3n Session Token"),e.qZA(),e.TgZ(77,"app-paragraph"),e._uU(78," Este paso es obligratorio y se debe realizar con pre-requisito antes de instanciar al componente para generer el session-token el cual debe suministrarse al componente\n"),e.qZA(),e._UZ(79,"app-http-block",5)(80,"app-http-block",6),e.TgZ(81,"app-subtitle",4),e._uU(82,"Paso 3.3: Consulta detalle de cuenta"),e.qZA(),e.TgZ(83,"app-paragraph"),e._uU(84," Una vez se haya obtenido el Correlation Id en el paso 3.1, bastar\xe1 con consultar al siguiente endpoint para obtener todos los datos relacionados a la cuenta:\n"),e.qZA(),e._UZ(85,"app-http-block",7)(86,"app-http-block",6),e.TgZ(87,"app-paragraph"),e._uU(88," Conoce el flujo de apertura de cuenta negocio a trav\xe9s del WebComponent de Interbank para "),e._UZ(89,"app-link",8),e._uU(90," y "),e._UZ(91,"app-link",9),e._uU(92,".\n"),e.qZA()),2&n&&(e.xp6(14),e.Q6J("href",o.GENERAL_ROUTES.PARTNER_REGISTRATION),e.xp6(15),e.Q6J("code",o.scriptModule),e.xp6(1),e.Q6J("code",o.scriptComponent),e.xp6(42),e.Q6J("secondLevel",!0),e.xp6(2),e.Q6J("code",o.scriptCustomEvent),e.xp6(1),e.Q6J("secondLevel",!0),e.xp6(4),e.Q6J("code",o.scriptSessionToken),e.xp6(1),e.Q6J("code",o.scriptSessionTokenResponse),e.xp6(1),e.Q6J("secondLevel",!0),e.xp6(4),e.Q6J("code",o.scriptCurlCorrelation),e.xp6(1),e.Q6J("code",o.scriptCorrelationResponse),e.xp6(3),e.Q6J("href",o.BUSINESS_ACCOUNT_ROUTES.NATURAL_PERSON_FLOW),e.xp6(2),e.Q6J("href",o.BUSINESS_ACCOUNT_ROUTES.LEGAL_ENTITY_FLOW))},dependencies:[i.r,u.w,p.H,_.P,E.N,U.D]}),a})(),T=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-natural-person-flow"]],decls:101,vars:0,consts:[[1,"bold"],[1,"column"],["src","assets/images/business-account/natural-person/step-one.png","alt","step-one",1,"column__img"],[1,"column__text"],["src","assets/images/business-account/natural-person/step-two.png","alt","step-two",1,"column__img"],["src","assets/images/business-account/biometry/Opciones-biometria.png","alt","biometry",1,"column__img"],["src","assets/images/business-account/biometry/Mensaje-permisos.png","alt","biometry",1,"column__img"],["src","assets/images/business-account/natural-person/step-three-client.png","alt","step-three",1,"column__img"],["src","assets/images/business-account/natural-person/step-three-no-client.png","alt","step-three",1,"column__img"],["src","assets/images/business-account/natural-person/step-three-no-client-address.png","alt","step-three",1,"column__img"],["src","assets/images/business-account/natural-person/step-three-residence.png","alt","step-three",1,"column__img"],["src","assets/images/business-account/natural-person/step-four.png","alt","step-four",1,"column__img"],["src","assets/images/business-account/natural-person/step-four-configuration.png","alt","step-four",1,"column__img"],["src","assets/images/business-account/natural-person/step-five.png","alt","step-five",1,"column__img"]],template:function(n,o){1&n&&(e.TgZ(0,"app-title"),e._uU(1,"Flujo - Persona Natural"),e.qZA(),e.TgZ(2,"app-paragraph"),e._uU(3," El flujo de apertura de cuenta a trav\xe9s del WebComponent de Interbank puede variar entre 3 a 5 pasos, esto depender\xe1 de si la persona que quiere abrir una cuenta es "),e.TgZ(4,"span",0),e._uU(5,"cliente de Interbank o no"),e.qZA(),e._uU(6," y adem\xe1s, posee o no una tarjeta d\xe9bito. A continuaci\xf3n se describir\xe1 en detalle cada paso del proceso adem\xe1s de posibles configuraciones adicionales.\n"),e.qZA(),e.TgZ(7,"div",1),e._UZ(8,"img",2),e.TgZ(9,"div",3)(10,"app-subtitle"),e._uU(11,"Identificaci\xf3n de cliente"),e.qZA(),e.TgZ(12,"app-paragraph"),e._uU(13," Ser\xe1 el primer paso para la apertura de cuenta, en este paso, el cliente deber\xe1 proporcionar su DNI para determinar si ya es un "),e.TgZ(14,"span",0),e._uU(15,"cliente Interbank"),e.qZA(),e._uU(16," o no. "),e.qZA(),e.TgZ(17,"app-paragraph"),e._uU(18," Una vez el cliente haya ingresado su DNI, el sistema determinar\xe1 si el DNI corresponde a un cliente ya registrado en Interbank, de ser as\xed, el cliente s\xf3lo deber\xe1 proporcionar informaci\xf3n adicional sobre la moneda y otros detalles como impuestos de renta. "),e.qZA(),e.TgZ(19,"app-paragraph"),e._uU(20," Si el sistema determina que el DNI ingresado "),e.TgZ(21,"span",0),e._uU(22,"no corresponde"),e.qZA(),e._uU(23," a un cliente registrado en Interbank, se agregar\xe1 un paso adicional donde se detallar\xe1 informaci\xf3n personal del usuario como pa\xeds de residencia, direcciones, etc. "),e.qZA()()(),e.TgZ(24,"div",1)(25,"div",3)(26,"app-subtitle"),e._uU(27,"2. Proceso de Validaci\xf3n de identidad"),e.qZA(),e.TgZ(28,"app-paragraph"),e._uU(29," Una vez se haya identificado al cliente a trav\xe9s de su RUC o DNI, se dar\xe1 paso a la secci\xf3n de preguntas KBA, en donde el cliente deber\xe1 responder una serie de preguntas para validar su identidad, este paso es obligatorio para continuar con el flujo. "),e.qZA(),e.TgZ(30,"app-paragraph"),e._uU(31," Si el cliente responde equ\xedvocamente las preguntas, un nuevo conjunto de preguntas ser\xe1 proporcionado para intentar nuevamente, para un total de 3 intentos m\xe1ximos, caso en el que el DNI ser\xe1 bloqueado y no podr\xe1 usarse para abrir una cuenta durante las pr\xf3ximas 24 horas. "),e.qZA()(),e._UZ(32,"img",4),e.qZA(),e.TgZ(33,"div",1),e._UZ(34,"img",5),e.TgZ(35,"div",3)(36,"app-paragraph"),e._uU(37," Una vez que se responden correctamente las preguntas de seguridad se debe pasar por el segundo factor de autenticaci\xf3n que corresponde a validaci\xf3n por biometria (Validaci\xf3n Facial) "),e.qZA()()(),e.TgZ(38,"div",1)(39,"div",3)(40,"app-paragraph"),e._uU(41," Para poder ejecutar correctamente el proceso de validaci\xf3n sera necesario establecer permisos a la camara en navegador, como se presenta en la imagen. "),e.qZA()(),e._UZ(42,"img",6),e.qZA(),e.TgZ(43,"div",1),e._UZ(44,"img",7),e.TgZ(45,"div",3)(46,"app-subtitle"),e._uU(47,"3. Formulario de Identificaci\xf3n del RUC"),e.qZA(),e.TgZ(48,"app-paragraph"),e._uU(49," En este paso si ya es cliente y se encuentra registrado en Interbank Interbank solo sera necesario completar algunos campos del faltantes. "),e.qZA()()(),e.TgZ(50,"div",1)(51,"div",3)(52,"app-paragraph"),e._uU(53," Caso contrario de no ser cliente Interbank ser\xe1 necesario completar datos personales. "),e.qZA()(),e._UZ(54,"img",8),e.qZA(),e.TgZ(55,"div",1),e._UZ(56,"img",9),e.TgZ(57,"div",3)(58,"app-paragraph"),e._uU(59," De igual manera al no ser cliente se deber\xe1 completar los campos del domicilio. "),e.qZA()()(),e.TgZ(60,"div",1)(61,"div",3)(62,"app-paragraph"),e._uU(63," En caso de que el cliente seleccione la opci\xf3n en la que asegura tener residencia fiscal o tributaria fuera del pa\xeds, se desplegar\xe1n 3 campos adicionales en los cuales se especificar\xe1 el pa\xeds, n\xfamero tributario y un checkbox para especificar si este no es requerido en el pa\xeds seleccionado. "),e.qZA(),e.TgZ(64,"app-paragraph"),e._uU(65," En caso de que el cliente tenga otro pa\xeds o pa\xedses adicionales los cuales especificar, el bot\xf3n "),e.TgZ(66,"span",0),e._uU(67,"A\xf1adir otro pa\xeds"),e.qZA(),e._uU(68," crear\xe1 cuantos campos adicionales se necesiten para agregar la informaci\xf3n necesaria. "),e.qZA()(),e._UZ(69,"img",10),e.qZA(),e.TgZ(70,"div",1),e._UZ(71,"img",11),e.TgZ(72,"div",3)(73,"app-subtitle"),e._uU(74,"4. Configuraci\xf3n de la cuenta"),e.qZA(),e.TgZ(75,"app-paragraph"),e._uU(76," Este ser\xe1 el paso final, en el cual el cliente escoger\xe1 la moneda (Soles o D\xf3lares) de su preferencia para abrir su cuenta Interbank "),e.qZA(),e.TgZ(77,"app-paragraph"),e._uU(78," Finalmente, proporcionar\xe1 su acuerdo con los t\xe9rminos y condiciones adem\xe1s de otras pol\xedticas de tratamiento de datos e informaci\xf3n personales. "),e.qZA()()(),e.TgZ(79,"div",1)(80,"div",3)(81,"app-paragraph"),e._uU(82," Se presentara los campos para seleccionar la moneda de la cuenta las opciones Soles, D\xf3lares o Ambos esta ultima opci\xf3n creara dos cuentas silmultaneamente. "),e.qZA(),e.TgZ(83,"app-paragraph"),e._uU(84," Se deben marcar los terminos y condiciones para crear la cuenta. "),e.qZA()(),e._UZ(85,"img",12),e.qZA(),e.TgZ(86,"div",1),e._UZ(87,"img",13),e.TgZ(88,"div",3)(89,"app-subtitle"),e._uU(90,"5. Creaci\xf3n de cuenta exitosa"),e.qZA(),e.TgZ(91,"app-paragraph"),e._uU(92," En este punto, el cliente ya habr\xe1 creado su cuenta de manera exitosa y es aqu\xed donde se notificar\xe1 al comercio el evento de creaci\xf3n de cuenta. "),e.qZA()()(),e._UZ(93,"br"),e.TgZ(94,"app-subtitle"),e._uU(95,"Correo de notificaci\xf3n de apertura de cuenta"),e.qZA(),e.TgZ(96,"app-paragraph"),e._uU(97," Una vez se hayan completado todos los pasos, el cliente podr\xe1 crear su cuenta, momento en el que recibir\xe1 un "),e.TgZ(98,"span",0),e._uU(99,"correo electr\xf3nico"),e.qZA(),e._uU(100," detallando informaci\xf3n como el n\xfamero de cuenta, c\xf3digo CCI y otros datos adicionales. El correo en menci\xf3n tambi\xe9n contendr\xe1 dos archivos PDF con el detalle m\xe1s espec\xedfico sobre la cuenta creada m\xe1s otro archivo PDF con el Contrato de Dep\xf3sitos en Cuenta Corriente.\n"),e.qZA())},dependencies:[i.r,u.w,p.H]}),a})(),h=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-legal-entity-flow"]],decls:89,vars:0,consts:[[1,"bold"],[1,"column"],["src","assets/images/business-account/legal-person/step-one.png","alt","step-one",1,"column__img"],[1,"column__text"],["src","assets/images/business-account/legal-person/step-two.png","alt","step-two",1,"column__img"],["src","assets/images/business-account/biometry/Opciones-biometria.png","alt","biometry",1,"column__img"],["src","assets/images/business-account/biometry/Mensaje-permisos.png","alt","biometry",1,"column__img"],["src","assets/images/business-account/legal-person/step-three-info.png","alt","step-three",1,"column__img"],["src","assets/images/business-account/legal-person/step-three-error.png","alt","biometry",1,"column__img"],["src","assets/images/business-account/legal-person/step-four.png","alt","step-three",1,"column__img"],["src","assets/images/business-account/legal-person/step-four-currencies.png","alt","step-four",1,"column__img"],["src","assets/images/business-account/legal-person/step-four-terms.png","alt","step-three",1,"column__img"],["src","assets/images/business-account/legal-person/step-five.png","alt","step-five",1,"column__img"]],template:function(n,o){1&n&&(e.TgZ(0,"app-title"),e._uU(1,"Flujo - Persona Natural"),e.qZA(),e.TgZ(2,"app-paragraph"),e._uU(3," El flujo de apertura de cuenta a trav\xe9s del WebComponent de Interbank puede variar entre 3 a 5 pasos, esto depender\xe1 de si la persona que quiere abrir una cuenta es "),e.TgZ(4,"span",0),e._uU(5,"cliente de Interbank o no"),e.qZA(),e._uU(6," y adem\xe1s, posee o no una tarjeta d\xe9bito. A continuaci\xf3n se describir\xe1 en detalle cada paso del proceso adem\xe1s de posibles configuraciones adicionales.\n"),e.qZA(),e.TgZ(7,"div",1),e._UZ(8,"img",2),e.TgZ(9,"div",3)(10,"app-subtitle"),e._uU(11,"Identificaci\xf3n de cliente"),e.qZA(),e.TgZ(12,"app-paragraph"),e._uU(13," Ser\xe1 el primer paso para la apertura de cuenta, en este paso, el cliente deber\xe1 proporcionar su DNI para determinar si ya es un "),e.TgZ(14,"span",0),e._uU(15,"cliente Interbank"),e.qZA(),e._uU(16," o no. "),e.qZA(),e.TgZ(17,"app-paragraph"),e._uU(18," Una vez el cliente haya ingresado su DNI, el sistema determinar\xe1 si el DNI corresponde a un cliente ya registrado en Interbank, de ser as\xed, el cliente s\xf3lo deber\xe1 proporcionar informaci\xf3n adicional sobre la moneda y otros detalles como impuestos de renta. "),e.qZA(),e.TgZ(19,"app-paragraph"),e._uU(20," Si el sistema determina que el DNI ingresado "),e.TgZ(21,"span",0),e._uU(22,"no corresponde"),e.qZA(),e._uU(23," a un cliente registrado en Interbank, se agregar\xe1 un paso adicional donde se detallar\xe1 informaci\xf3n personal del usuario como pa\xeds de residencia, direcciones, etc. "),e.qZA()()(),e.TgZ(24,"div",1)(25,"div",3)(26,"app-subtitle"),e._uU(27,"2. Proceso de Validaci\xf3n de identidad"),e.qZA(),e.TgZ(28,"app-paragraph"),e._uU(29," Una vez se haya identificado al cliente a trav\xe9s de su RUC o DNI, se dar\xe1 paso a la secci\xf3n de preguntas KBA, en donde el cliente deber\xe1 responder una serie de preguntas para validar su identidad, este paso es obligatorio para continuar con el flujo. "),e.qZA(),e.TgZ(30,"app-paragraph"),e._uU(31," Si el cliente responde equ\xedvocamente las preguntas, un nuevo conjunto de preguntas ser\xe1 proporcionado para intentar nuevamente, para un total de 3 intentos m\xe1ximos, caso en el que el DNI ser\xe1 bloqueado y no podr\xe1 usarse para abrir una cuenta durante las pr\xf3ximas 24 horas. "),e.qZA()(),e._UZ(32,"img",4),e.qZA(),e.TgZ(33,"div",1),e._UZ(34,"img",5),e.TgZ(35,"div",3)(36,"app-paragraph"),e._uU(37," Una vez que se responden correctamente las preguntas de seguridad se debe pasar por el segundo factor de autenticaci\xf3n que corresponde a validaci\xf3n por biometria (Validaci\xf3n Facial) "),e.qZA()()(),e.TgZ(38,"div",1)(39,"div",3)(40,"app-paragraph"),e._uU(41," Para poder ejecutar correctamente el proceso de validaci\xf3n sera necesario establecer permisos a la camara en navegador, como se presenta en la imagen. "),e.qZA()(),e._UZ(42,"img",6),e.qZA(),e.TgZ(43,"div",1),e._UZ(44,"img",7),e.TgZ(45,"div",3)(46,"app-subtitle"),e._uU(47,"3. Formulario de Identificaci\xf3n del RUC"),e.qZA(),e.TgZ(48,"app-paragraph"),e._uU(49," En este paso se solicitara los datos de la residencia fiscal, conjuntamente con los datos de la partida registral, en caso de no recordar el N\xfamero de partida registral puedes usar el link Con\xf3celo aqui "),e.qZA()()(),e.TgZ(50,"div",1)(51,"div",3)(52,"app-paragraph"),e._uU(53," En caso no se cuente con una residencia fiscal o tributaria en Pe\xfa no se podra continuar con el flujo y se mostrara un mensaje de error. "),e.qZA()(),e._UZ(54,"img",8),e.qZA(),e.TgZ(55,"div",1),e._UZ(56,"img",9),e.TgZ(57,"div",3)(58,"app-subtitle"),e._uU(59,"4. Configuraci\xf3n de la cuenta"),e.qZA(),e.TgZ(60,"app-paragraph"),e._uU(61," Este ser\xe1 el paso final, en el cual el cliente escoger\xe1 la moneda (Soles o D\xf3lares) de su preferencia para abrir su cuenta Interbank "),e.qZA(),e.TgZ(62,"app-paragraph"),e._uU(63," Finalmente, proporcionar\xe1 su acuerdo con los t\xe9rminos y condiciones adem\xe1s de otras pol\xedticas de tratamiento de datos e informaci\xf3n personales. "),e.qZA()()(),e.TgZ(64,"div",1)(65,"div",3)(66,"app-paragraph"),e._uU(67," Se presentara los campos para seleccionar la moneda de la cuenta las opciones Soles, D\xf3lares o Ambos esta ultima opci\xf3n creara dos cuentas silmultaneamente. "),e.qZA()(),e._UZ(68,"img",10),e.qZA(),e.TgZ(69,"div",1),e._UZ(70,"img",11),e.TgZ(71,"div",3)(72,"app-paragraph"),e._uU(73," Se deben marcar los terminos y condiciones para crear la cuenta. "),e.qZA()()(),e.TgZ(74,"div",1)(75,"div",3)(76,"app-subtitle"),e._uU(77,"5. Creaci\xf3n de cuenta exitosa"),e.qZA(),e.TgZ(78,"app-paragraph"),e._uU(79," En este punto, el cliente ya habr\xe1 creado su cuenta de manera exitosa y es aqu\xed donde se notificar\xe1 al comercio el evento de creaci\xf3n de cuenta. "),e.qZA()(),e._UZ(80,"img",12),e.qZA(),e._UZ(81,"br"),e.TgZ(82,"app-subtitle"),e._uU(83,"Correo de notificaci\xf3n de apertura de cuenta"),e.qZA(),e.TgZ(84,"app-paragraph"),e._uU(85," Una vez se hayan completado todos los pasos, el cliente podr\xe1 crear su cuenta, momento en el que recibir\xe1 un "),e.TgZ(86,"span",0),e._uU(87,"correo electr\xf3nico"),e.qZA(),e._uU(88," detallando informaci\xf3n como el n\xfamero de cuenta, c\xf3digo CCI y otros datos adicionales. El correo en menci\xf3n tambi\xe9n contendr\xe1 dos archivos PDF con el detalle m\xe1s espec\xedfico sobre la cuenta creada m\xe1s otro archivo PDF con el Contrato de Dep\xf3sitos en Cuenta Corriente.\n"),e.qZA())},dependencies:[i.r,u.w,p.H]}),a})();var s=t(5030),v=t(2910),q=t(257),f=t(8283),C=t(5271),I=t(42);const F=["webComponent"],d=[{path:"",pathMatch:"full",redirectTo:"introduction"},{path:"introduccion",component:A},{path:"flujo-persona-natural",component:T},{path:"flujo-persona-juridica",component:h},{path:"sandbox",component:(()=>{class a{constructor(n){this.renderer=n,this.models=[{label:"A",value:"A",selected:!0},{label:"B",value:"B"},{label:"C",value:"C"}],this.ToastType=v.p,this.businessAccount=new s.cw({sessionToken:new s.NI("",[s.kI.required]),subscriptionKey:new s.NI("",[s.kI.required]),triggerModel:new s.NI(this.models[0].value,[]),companyDocumentNumber:new s.NI("",[s.kI.required]),documentNumber:new s.NI("",[s.kI.required])})}generateWebComponent(){const n=this.content.nativeElement.children[0];n&&this.renderer.removeChild(this.content.nativeElement,n);const o=this.renderer.createElement("ibk-business-accounts");o.setAttribute("session-token",this.businessAccount.value.sessionToken),o.setAttribute("subscription-key",this.businessAccount.value.subscriptionKey),o.setAttribute("trigger-model",this.businessAccount.value.triggerModel),o.setAttribute("company-document-number",this.businessAccount.value.companyDocumentNumber),o.setAttribute("document-number",this.businessAccount.value.documentNumber),this.renderer.appendChild(this.content.nativeElement,o)}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(e.Qsj))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-sandbox"]],viewQuery:function(n,o){if(1&n&&e.Gf(F,5),2&n){let c;e.iGM(c=e.CRH())&&(o.content=c.first)}},decls:34,vars:12,consts:[[1,"bold"],[1,"form",3,"formGroup"],[1,"form__definition"],[3,"secondLevel","opaque","noLegend"],["formControlName","sessionToken","label","Session Token","placeholder","Ingrese el session token",3,"required"],["formControlName","subscriptionKey","label","Subscription Key","placeholder","Ingrese el subscription key",3,"required"],["formControlName","triggerModel","label","Modelo",3,"options"],["formControlName","companyDocumentNumber","label","N\xfamero de documento de la empresa","placeholder","Ingrese el documento de la empresa",3,"required"],["formControlName","documentNumber","label","N\xfamero de documento Representante Legal","placeholder","Ingrese el documento del representante legal",3,"required"],[1,"form__button",3,"disabled","click"],[3,"noLegend"],[1,"web-component"],["webComponent",""],[3,"type"]],template:function(n,o){1&n&&(e.TgZ(0,"app-title"),e._uU(1,"Sandbox"),e.qZA(),e.TgZ(2,"app-paragraph"),e._uU(3," Aqu\xed podr\xe1s interactuar con el "),e.TgZ(4,"span",0),e._uU(5,"web component de simulaci\xf3n"),e.qZA(),e._uU(6," para ver su funcionamiento y posibles configuraciones.\n"),e.qZA(),e._UZ(7,"br"),e.TgZ(8,"app-paragraph"),e._uU(9," Ingresa los siguientes campos para crear la simulaci\xf3n del componente:\n"),e.qZA(),e._UZ(10,"br"),e.TgZ(11,"form",1)(12,"div",2)(13,"app-subtitle",3),e._uU(14," DEFINICI\xd3N "),e.qZA(),e._UZ(15,"app-input",4)(16,"app-input",5)(17,"app-select",6)(18,"app-input",7)(19,"app-input",8),e.qZA(),e._UZ(20,"br"),e.TgZ(21,"app-button",9),e.NdJ("click",function(){return o.generateWebComponent()}),e._uU(22," Crear Web Component "),e.qZA()(),e.TgZ(23,"app-subtitle",10),e._uU(24,"Web Component"),e.qZA(),e.TgZ(25,"app-paragraph"),e._uU(26," Presiona el bot\xf3n "),e.TgZ(27,"span",0),e._uU(28,"crear web component"),e.qZA(),e._uU(29," para crearlo o actualizar su configuraci\xf3n\n"),e.qZA(),e._UZ(30,"div",11,12),e.TgZ(32,"app-toast",13),e._uU(33," Recuerda que si la prueba de sandbox funciona, es muy seguro de que la integraci\xf3n funcione en tu p\xe1gina web.\n"),e.qZA()),2&n&&(e.xp6(11),e.Q6J("formGroup",o.businessAccount),e.xp6(2),e.Q6J("secondLevel",!0)("opaque",!0)("noLegend",!0),e.xp6(2),e.Q6J("required",!0),e.xp6(1),e.Q6J("required",!0),e.xp6(1),e.Q6J("options",o.models),e.xp6(1),e.Q6J("required",!0),e.xp6(1),e.Q6J("required",!0),e.xp6(2),e.Q6J("disabled","INVALID"===o.businessAccount.status),e.xp6(2),e.Q6J("noLegend",!0),e.xp6(9),e.Q6J("type",o.ToastType.INFO))},dependencies:[i.r,u.w,p.H,q.q,f.a,C.H,I.r,s._Y,s.JJ,s.JL,s.Q7,s.sg,s.u]}),a})()}];var y=t(4466);let N=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[m.ez,g.Bz.forChild(d),y.m,s.u5,s.UX]}),a})()}}]);