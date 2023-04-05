import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    appartment_name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    rooms:{type:Number,required:true},
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
    deposit_amount: { type: Number, required: true },
    carpet_area: { type: Number, required: true },
    furnished: { type: String, required: true },
    price: { type: Number, required: true },
    mobile: { type: Number, required: true,  unique: true },
    owner: { type: String, required: true },
    location: { type: String, required: true },
    balcony: { type: Number, required: true },
    category: { type: String, required: true },

    
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;