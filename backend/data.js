import bcrypt from 'bcryptjs';
const data = {

  users: [
    {
      name: 'nikunj',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'jay',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

    products: [
      {
       // _id:'1',
        appartment_name:'Kabir Appartment',
        slug:'k1',
        rooms: '3 BHK',
        image1: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg', 
        image2: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 
        image3: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
        deposit_amount: 22000,
        carpet_area: 10,
        furnished:'yes',
        price:95000,
        mobile:1234567890,
        owner:'jemin',
        location:'surat',
        balcony:'1',
        category:'For Sale',
        
              
       
      },
      {
        // _id:'2',
        appartment_name:'Kabir Appartment',
        slug:'k2',
        rooms: '3 BHK',
        image1: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg', 
        image2: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 
        image3: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
        deposit_amount: 22000,
        carpet_area: 10,
        furnished:'yes',
        price:95000,
        mobile:1234567890,
        owner:'jemin',
        location:'surat',
        balcony:'1',
        category:'For Rent'
       
      },
      {
        // _id:'3',
        appartment_name:'Kabir Appartment',
        slug:'k3',
        rooms: '3 BHK',
        image1: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg', 
        image2: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 
        image3: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
        deposit_amount: 22000,
        carpet_area: 10,
        furnished:'yes',
        price:95000,
        mobile:1234567890,
        owner:'jemin',
        location:'surat',
        balcony:'1',
        category:'For Rent'
        
      },
      {
        // _id:'4',
        appartment_name:'Kabir Appartment',
        slug:'k4',
        rooms: '3 BHK',
        image1: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg', 
        image2: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 
        image3: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
        deposit_amount: 22000,
        carpet_area: 10,
        furnished:'yes',
        price:95000,
        mobile:1234567890,
        owner:'jemin',
        location:'surat',
        balcony:'1',
        category:'For Rent'
      },
    ],
  };
  export default data;