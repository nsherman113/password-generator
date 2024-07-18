
// const contacts = {
//   Barry : {
//    phone: '(817) 222-6936',
//    email:'barry@gmail.com',
//    address: '123 pinackle dr arlington, tx 74812',
//    },
//  Bill : {
//    phone: '(817) 333-6836',
//    email:'bill@gmail.com',
//    address: '123 robterson dr grand prarie, tx 75726',
//  },
//  Ted : {
//  phone: '(817) 444-6736',
//    email:'ted@gmail.com',
//    address: '223 spackle dr benbrook, tx 76126',
//  },
//  Melissa : {
//  phone: '(682) 386-6556',
//    email:'mel@gmail.com',
//    address: '445 bankway dr fort worth, tx 78710',

//  },
//    Ron : {
//  phone: '(817) 440-7823',
//    email:'ron@gmail.com',
//    address: '558 ranch house rd austin, tx 78705',
//  },    
//    Sarah : {
//    phone: '(281) 222-6936',
//    email:'sarah@gmail.com',
//    address: '123 statesman ct aledo, tx 76880',
//  },
//    Peggy : {
//  phone: '(682) 222-6936',
//    email:'peggy@gmail.com',
//    address: '123 ranger dr dallas, tx 76008',
//  },
//    Frank : {
//  phone: '(817) 222-6936',
//    email:'frank@gmail.com',
//    address: '123 pinackle dr austin, tx 78741',
//  },
//    John :{
//  phone: '(512) 222-6936',
//    email:'john@gmail.com',
//    address: '123 martin luther king jr blvd austin, tx 78701',
//  },
//    Linda : {
//   phone: '(713) 222-6936',
//    email:'linda@gmail.com',
//    address: '123 tech ridge dr austin, tx 78751',
//  },
//  Phil : {
//   phone: '(444) 685-1122',
//    email:'phil@gmail.com',
//    address: '123 tech ridge dr overland park ks 22652',
//  },
   
//  };

//  const findContactLocation = () => {
//    for (const key of Object.keys(contacts)) {
//    const phoneNumber = contacts[key].phone 
//   // conditional to check location by phone number 
//    if(phoneNumber.includes( '(512)') || phoneNumber.includes( '(713)')) {
//     console.log(`${[key]} is from Austin Texas`);
//    } else if (phoneNumber.includes( '(682)') || phoneNumber.includes( '(817)') || phoneNumber.includes('281')) {
//     console.log(`${[key]} is from Dallas Texas`);
//    } else {
//     console.log(`${[key]}'s location is outside of Texas`)
//    }
//    }
//  }
// findContactLocation();
