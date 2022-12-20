import mongoose from 'mongoose'; 
  
import crawledPageSchema from '../schema/scawledpage.schema'; 

export default mongoose.model('CrawledPage', crawledPageSchema);