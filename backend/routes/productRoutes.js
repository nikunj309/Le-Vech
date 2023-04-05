import express from 'express';
import Product from '../models/productModel.js';
import multer from "multer";
import expressAsyncHandler from 'express-async-handler';
import { isAuth, isAdmin } from '../utils.js';

const productRouter = express.Router();



productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});


//img storage path that define path of storage and filename , image not store in database but store in destination path folder or server and that only img path store in database
const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },

    //define image name
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}. ${file.originalname}`)
    }
})


// img filter: if upload file is img that only file we can upload else through error
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("only images is allowd"))
    }
}

//use of multer
const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
});



productRouter.post(
  '/',upload.single("image1"),upload.single("image2"),upload.single("image3"),
  isAuth,
  // isAdmin,
  expressAsyncHandler(async (req, res) => {
    const newProduct = new Product({
     
      appartment_name: req.body.appartment_name ,
      slug: req.body.slug ,
      rooms: req.body.rooms,
      image1: req.body.image1,
      image2: req.body.image2,
      image3: req.body.image3,
      deposit_amount: req.body.deposit_amount,
      carpet_area:req.body.carpet_area,
      furnished:req.body.furnished,
      price:req.body.price,
      mobile:req.body.mobile,
      owner:req.body.owner,
      location:req.body.location,
      balcony:req.body.balcony,
      category:req.body.category,
      user: req.user._id,
      
    });
    const product = await newProduct.save();
    res.send({ message: 'Product Created', product });
  })
);


productRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({ user: req.user._id });
    res.send(products);
  })
);


productRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res.send({ message: 'Product Deleted' });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);



const PAGE_SIZE = 10;

productRouter.get(
  '/admin',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const page = query.page || 1;
    const pageSize = query.pageSize || PAGE_SIZE;

    const products = await Product.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    const countProducts = await Product.countDocuments();
    res.send({
      products,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
    });
  })
);





productRouter.get('/slug/:slug', async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});




productRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});




// productRouter.get('/:id', isAuth, expressAsyncHandler(async (req, res) => {
//       const product = await Product.findById(req.params.id);
//       if (product) {
//         res.send(product);
//       } else {
//         res.status(404).send({ message: 'Product Not Found' });
//       }
//     })
//   );
export default productRouter;