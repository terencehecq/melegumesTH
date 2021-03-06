//test map
var log = console.log;
var qs = document.querySelector.bind(document);
var qsa = document.querySelectorAll.bind(document);

const friends = [
    {
      id: 1,
      name: 'MÉL\'ÉGUMES',
      adresse: 'Chemin de la Joyeuse Entrée',
      n: 13,
      cp: 7020,
      ville: 'Nimy',
      pays: 'Belgique',
      map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.396675654272!2d3.955087424231859!3d50.47095859858905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c24fdf5d798f0f%3A0x38bb990cdb3b3f7e!2sAvenue+de+la+Joyeuse+Entr%C3%A9e+13%2C+7000+Mons!5e0!3m2!1sfr!2sbe!4v1551445627729',
     photo: '../image/logomelegumes.png',
     email:'melanie-depaul@hotmail.com',
     horaires:'Du lundi au vendredi: ',
     horairesligne2: ' de 9h30 à 13h00',
     horairesligne3: 'OU',
     horairesligne4: 'sur <a href="contact.html">rendez-vous</a>.',
     horairesligne5: '',
     horairesligne6: '',
     horairesligne7: '',
    },
    {
      id: 2,
      name: 'MOSAIC',
      adresse: 'Rue d’Havré',
      n: 114,
      cp: 7000,
      ville: 'Mons',
      pays: 'Belgique',
      map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.313232230878!2d3.9552199157315475!3d50.45389157947583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c24ffc56d4540b%3A0x84c820673bbf1aca!2sRue+d&#39;Havr%C3%A9+114%2C+7000+Mons!5e0!3m2!1sfr!2sbe!4v1550744630506',
      photo: '../image/logomosaic3.jpg',
      email:'mosaicmons@gmail.com',
      horaires:'lundi Fermé',
     horairesligne2: 'mardi 12:00–19:00',
     horairesligne3: 'mercredi 10:00–19:00',
     horairesligne4: 'jeudi 10:00–19:00',
     horairesligne5: 'vendredi 10:00–21:00',
     horairesligne6: 'samedi 10:00–19:00',
     horairesligne7: 'dimanche Fermé',
    },
    {
      id: 3,
      name: 'PAIN PERDU',
      adresse: 'Rue des Ecoles',
      n: 1,
      cp: 7034,
      ville: 'Obourg',
      pays: 'Belgique',
      map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.280166413728!2d4.007366915896699!3d50.47312779361138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c24f08e20852fb%3A0xec99095de694fae1!2sRue+des+Ecoles+1%2C+7034+Mons!5e0!3m2!1sfr!2sbe!4v1550744752243',
      photo: '../image/logopainperdu.png',
      email:'info@lepainperduobourg.be',
      horaires:'lundi 07:00–17:00',
      horairesligne2: 'mardi Fermé',
      horairesligne3: 'mercredi Fermé',
      horairesligne4: 'jeudi 07:00–17:00',
      horairesligne5: 'vendredi 07:00–17:00',
      horairesligne6: 'samedi 07:00–12:00',
      horairesligne7: 'dimanche 07:00–12:00',
    },
    {
      id: 4,
      name: 'ALL COOK',
      adresse: 'Avenue Maréchal Foch',
      n: 795,
      cp: 7012,
      ville: 'Jemappes',
      pays: 'Belgique',
      map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.6479459254742!2d3.8792809158959995!3d50.447657895446895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c25a7512d1ee7f%3A0xf9690b8fbbf4bb8e!2sAv.+Mar%C3%A9chal+Foch+795%2C+7012+Mons!5e0!3m2!1sfr!2sbe!4v1550744800491',
      passions: [2, 3, 4],
      photo: '../image/logoallcook.png',
      email:'info@allcook.be',
      horaires:'lundi 14:00–17:00',
      horairesligne2: 'mardi 11:00–18:00',
      horairesligne3: 'mercredi 10:00–18:00',
      horairesligne4: 'jeudi 10:00–18:00',
      horairesligne5: 'vendredi 10:00–19:00',
      horairesligne6: 'samedi 10:00–18:00',
      horairesligne7: 'dimanche Fermé',
    }
  ];
  
  
  const renderMarkup = (templateId, data) => {
    const templateStrings = [

      {
        id: 1,
        markup: `<li class="fName" onmouseover="generateFriendDetails(${data.id})"><img src="images/${data.photo}" alt="Placeholder image"</br>
        <strong>${data.name}</strong></br>
  
        <strong>${data.ville}
        </li>`
      },
      {
        id: 10,
        markup: `
          
            <div class="card-content">
                <div class="media">

                    
                </div>
                <div class="content">
                <div class="informations">
                <div class="infosleft" >
                <strong>${data.name}</strong> </br>
                    ${data.adresse}, ${data.n}
                    <br/> ${data.cp} ${data.ville}
                    <br /> ${data.pays}
                    <br /><a href="mailto:${data.email}">${data.email}</a> 
                 </div>

                 <div class="infosright">
                 <strong>HORAIRES :</strong>
                    <br/> ${data.horaires}
                    <br/> ${data.horairesligne2}
                    <br/> ${data.horairesligne3}
                    <br/> ${data.horairesligne4}
                    <br/> ${data.horairesligne5}
                    <br/> ${data.horairesligne6}
                    <br/> ${data.horairesligne7}
                </div>
                </div>

                    <div class="card-image">
                    <figure class="imageis-3by1">
                    <iframe
                    src=${data.map} frameborder="0" allowfullscreen></iframe>
                  </div>
                    
            `
            
      },
     
    ];
    return templateStrings.find(template => template.id === templateId).markup;
  };
  
  
  const generateFriendDetails = friendId => {
    const currentFriend = friends.find(friend => friend.id === friendId);
    qs('#friend_detail').innerHTML = renderMarkup(10, currentFriend);
    // generatePassionsTags(currentFriend.passions);
  };
  
  
  const generateFriendsList = () => {
    const list = qs('#friends_list');
    const listMarkup = friends.reduce(
      //1 = au template dont l'id est 1
      (markup, friend) => `${markup}${renderMarkup(1, friend)}`,
      ''
    );
  
  
    list.innerHTML = listMarkup;
  };
  
  generateFriendsList();
  
  