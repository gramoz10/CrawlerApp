import mongoose, { Schema } from 'mongoose';

const crawledPageSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  title: String,
  headings: {
    h1: [String],
    h2: [String],
    h3: [String],
    h4: [String],
    h5: [String],
    h6: [String],
  },
  paragraphs: [String],
  anchors: [
    {
      href: String,
      text: String
    }
  ],
  metatags: {
    meta: {
      title: String,
      description: String,
      canonical: String
    },
    images: [{
      url: String,
      width: Number,
      height: Number
    }],
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  }
});

export default crawledPageSchema;